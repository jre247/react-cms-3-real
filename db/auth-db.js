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

exports.saveUserRoles = function(userId, userRoles){
    var results = [];
    var promise = new Promise();

    try{
        pg.connect(connectionString, function(err, client, done) {
            if(err) {
                processError(done, err);
            }

            userId = parseInt(userId);
            client.query("update wedding_user_role set is_active = false where user_id = $1", [userId]);

            client.query(buildBulkInsertStatement(userId, userRoles));

            done();

            promise.resolve();
        });
    }
    catch(ex){
        console.log('Exception running query with psql: ' + ex);
    }

    return promise;
}

var buildBulkInsertStatement = function(userId, rows) {
    var params = []
    var chunks = []
    _.each(rows, function(roleId){
        var valueClause = [];
        params.push(userId);
        valueClause.push('$' + params.length);
        params.push(roleId);
        valueClause.push('$' + params.roleId);
        chunks.push('(' + valueClause.join(', ') + ')');
        valueClause.push('$' + true);
        chunks.push('(' + valueClause.join(', ') + ')');
    });
    return {
        text: 'INSERT INTO wedding_user_role(user_id, role_id, is_active) VALUES ' +
            chunks.join(', '),
        values: params
    }
}


var processError = function(done, err){
  done();
  console.log(err);
  throw err;
}
