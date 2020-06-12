const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

export {};
// log request to the console
app.use(logger('dev'));

// parse request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// default catch-all route
require('./server/routes.ts')(app);

app.get('*', (req, res) => {
  res.status(200).send({ message: 'Welcome' });
});

module.exports = app;
