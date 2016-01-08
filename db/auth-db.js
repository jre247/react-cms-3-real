var pg = require('pg');
var _ = require('underscore-node');
var Promise = require("node-promise").Promise;
var connectionString = process.env.DATABASE_URL || 'postgres://jevans:jj1108jj@localhost:5432/wedding';

exports.getUserRoles = function(userId){
    var results = [];
    var promise = new Promise();

    try{
        pg.connect(connectionString, function(err, client, done) {
            if(err) {
                processError(done, err);
            }

            userId = parseInt(userId);
            var query = client.query("select * from wedding_user_role where is_active = true And user_id = $1", [userId]);
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

var processError = function(done, err){
  done();
  console.log(err);
  throw err;
}
