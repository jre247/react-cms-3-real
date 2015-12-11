var pg = require('pg');
var _ = require('underscore-node');
var Promise = require("node-promise").Promise;
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/wedding';

exports.save = function(pageId, userId, contents){
  try{
    var results = [];
    var promise = new Promise();

    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        client.query('UPDATE content set IsActive = false where PageId = $1', [pageId]);

        client.query(buildBulkInsertStatement(pageId, userId, contents));

        done();

        promise.resolve();
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}

var buildBulkInsertStatement = function(pageId, userId, rows) {
    var params = []
    var chunks = []
    _.each(rows, function(row){
        var valueClause = [];
        params.push(row.name);
        valueClause.push('$' + params.length);
        params.push(row.value);
        valueClause.push('$' + params.length);
        params.push(pageId);
        valueClause.push('$' + params.length);
        params.push(row.contentType);
        valueClause.push('$' + params.length);
        params.push(userId);
        valueClause.push('$' + params.length);
        params.push(row.sortOrder);
        valueClause.push('$' + params.length);
        params.push(row.parentIndex);
        valueClause.push('$' + params.length);
        params.push(new Date());
        valueClause.push('$' + params.length);
        params.push(true);
        valueClause.push('$' + params.length);
        chunks.push('(' + valueClause.join(', ') + ')');
    });
    return {
        text: 'INSERT INTO content(Name, Value, PageId, ContentTypeId, UserId, SortOrder, DateCreated, IsActive) VALUES ' +
            chunks.join(', '),
        values: params
    }
}

exports.get = function(pageId, userId){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        pageId = parseInt(pageId);
        var query = client.query("select * from content where IsActive = true And PageId = $1 order by SortOrder", [pageId]);
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
          var venue = processQueryEnd(done, results);
          console.log('query on end');
          promise.resolve(venue);
        });
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}

var processQueryEnd = function(done, results){
  done();

  return results;
}

var processError = function(done, err){
  done();
  console.log(err);
  throw err;
}
