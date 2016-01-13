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

        var query = client.query("select * from page where is_active = true");
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

exports.findByName = function(pageUrl){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        var query = client.query("select * from page where is_active = true And url = $1", [pageUrl]);
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
          var page = processQueryEnd(done, results[0]);

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
