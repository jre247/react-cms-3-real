var pg = require('pg');
var Promise = require("node-promise").Promise;
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/wedding';

exports.save = function(data){
  try{
    console.log('starting save.');

    var results = [];
    var promise = new Promise();

    pg.connect(connectionString, function(err, client, done) {
        console.log('starting pg connect for insert.');

        if(err) {
          processError(done, err);
        }

        client.query(
          "INSERT INTO content(Name, Value, PageId, ContentTypeId, UserId, DateCreated, IsActive) values($1, $2, $3, $4, $5, $6, $7, $8)",
          [data.name, data.value, data.pageId, data.contentTypeId, data.userId, data.dateCreated, true]
        );

        var query = client.query("select * from Venue where IsActive = true");

        // Stream results back one row at a time
        query.on('row', function(row) {
            console.log('pushing row for insert.');
            results.push(row);
        });

        query.on('end', function() {
            console.log('starting process query end for insert.');
            promise.resolve(processQueryEnd(done, results));
        });
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}

exports.get = function(data){
  console.log('db get for venue.');
  var results = [];
  var promise = new Promise();
  console.log('promise: ' + promise);
  console.log('pg: ' + pg);
  console.log('connection string: ' + connectionString);

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        console.log('running query.');
        console.log('data.pageId: ' + data.pageId);
        var query = client.query("select * from content where isactive = true And pageid = $1", [data.pageId]);
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
