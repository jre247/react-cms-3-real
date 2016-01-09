var pg = require('pg');
var _ = require('underscore-node');
var Promise = require("node-promise").Promise;
var connectionString = process.env.DATABASE_URL || 'postgres://jevans:jj1108jj@localhost:5432/wedding';

exports.findById = function(userId){
    var results = [];
    var promise = new Promise();

    try{
        pg.connect(connectionString, function(err, client, done) {
            if(err) {
                processError(done, err);
            }

            userId = parseInt(userId);
            var query = client.query("select * from wedding_user where is_active = true And id = $1", [userId]);
            // Stream results back one row at a time
            query.on('row', function(row) {
                results.push(row);
            });

            query.on('end', function() {
                done();
                promise.resolve(results[0]);
            });
        });
    }
    catch(ex){
        console.log('Exception running query with psql: ' + ex);
    }

    return promise;
}

exports.findByEmail = function(email){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        var query = client.query("select * from wedding_user where is_active = true And email = $1", [email]);
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            done();
            promise.resolve(results[0]);
        });
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}


exports.getAllUsers = function(email){
    var results = [];
    var promise = new Promise();

    try{
        pg.connect(connectionString, function(err, client, done) {
            if(err) {
                processError(done, err);
            }

            var query = client.query("select * from wedding_user where is_active = true");
            // Stream results back one row at a time
            query.on('row', function(row) {
                results.push(row);
            });

            query.on('end', function() {
                done();
                promise.resolve(results);
            });
        });
    }
    catch(ex){
        console.log('Exception running query with psql: ' + ex);
    }

    return promise;
}

exports.createUser = function(newUser){
    var promise = new Promise();

    try{
        pg.connect(connectionString, function(err, client, done) {
            if(err) {
                processError(done, err);
            }

            var queryText = "insert into wedding_user(first_name, last_name, email, password, is_active) values ($1, $2, $3, $4, $5) RETURNING *";
            var queryParams = [newUser.firstName, newUser.lastName, newUser.email, newUser.password, true];

            client.query(queryText, queryParams, function(err, result) {
                if(err){
                    promise.reject(err);
                }
                else {
                    var newUserFromDb = result.rows[0];
                    done();

                    promise.resolve(newUserFromDb);
                }
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
