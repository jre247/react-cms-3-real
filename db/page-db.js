var pg = require('pg');
var _ = require('underscore-node');
var Promise = require("node-promise").Promise;
var connectionConfig = require('../config/connection-config');
var connectionString = process.env.DATABASE_URL || connectionConfig.getConnectionString();

exports.findAll = function(pageUrl){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        var query = client.query("select p.id, p.name, p.url, p.template_id, t.name as template_name from page p join template t on p.template_id = t.id where p.is_active = true;");
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
          var page = processQueryEnd(done, results);

          promise.resolve(page);
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
