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

        var query = client.query("select p.id, p.name, p.url, p.template_id, p.sort_order, t.name as template_name from page p join template t on p.template_id = t.id order by p.sort_order;");
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

exports.findById = function(pageId){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        var query = client.query("select * from page where id = $1;", [pageId]);
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

exports.delete = function(pageId){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        var query = client.query("delete from content where page_id = $1", [pageId]);
        query = client.query("delete from page where id = $1", [pageId]);

        done();

        promise.resolve();
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}

exports.create = function(newPage){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        var queryParams = [newPage.name, newPage.url, newPage.template_id, newPage.sort_order, true];
        var query = client.query("insert into page(name, url, template_id, sort_order, is_active) values ($1, $2, $3, $4, $5) RETURNING *", queryParams);

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

exports.updateSortingForPages = function(pages){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        _.each(pages, function(page){
          debugger;
          var queryParams = [page.sort_order, page.id,];
          var query = client.query("update page set sort_order = $1 where id = $2", queryParams);
        });

        done();
    });
  }
  catch(ex){
    console.log('Exception running query with psql: ' + ex);
  }

  return promise;
}

exports.update = function(page){
  var results = [];
  var promise = new Promise();

  try{
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          processError(done, err);
        }

        var queryParams = [page.name, page.url, page.template_id, page.id];
        var query = client.query("update page set name = $1, url = $2, template_id = $3 where id = $4", queryParams);

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
