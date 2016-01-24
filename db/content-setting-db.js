var pg = require('pg');
var _ = require('underscore-node');
var Promise = require("node-promise").Promise;
var connectionConfig = require('../config/connection-config');
var connectionString = process.env.DATABASE_URL || connectionConfig.getConnectionString();

exports.getSettingsForPage = function(pageId){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        var query = client.query("select cs.* from content_setting cs join content c on cs.content_id = c.id join page p on c.page_id = p.id where cs.is_active = true And p.id = $1 And p.is_active = true", [pageId]);
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
          var settings = processQueryEnd(done, results);

          promise.resolve(settings);
        });
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}

exports.save = function(contentIds, contentSettings){
  try{
    var results = [];
    var promise = new Promise();

    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        // deactivate existing content settings for all content ids being saved
        var params = [];
        for(var id = 1; id <= contentIds.length; id++) {
          params.push('$' + id);
        }
        var queryText = 'UPDATE content_setting set is_active = false where content_id in (' + params.join(',') + ')';

        client.query(buildBulkInsertStatement(contentSettings));

        done();

        promise.resolve();
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}

var buildBulkInsertStatement = function(rows) {
    var params = []
    var chunks = []
    _.each(rows, function(row){
        var valueClause = [];
        params.push(row.setting_id);
        valueClause.push('$' + params.length);
        params.push(row.content_id);
        valueClause.push('$' + params.length);
        params.push(true);
        valueClause.push('$' + params.length);
        chunks.push('(' + valueClause.join(', ') + ')');
    });
    return {
        text: 'INSERT INTO content_setting(setting_id, content_id, is_active) VALUES ' +
            chunks.join(', '),
        values: params
    }
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
