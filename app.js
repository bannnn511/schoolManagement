"use strict";
exports.__esModule = true;
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
// log request to the console
app.use(logger('dev'));
// parse request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// default catch-all route
require('./server/routes.ts')(app);
app.get('*', function (req, res) {
    res.status(200).send({ message: 'Welcome' });
});
module.exports = app;
