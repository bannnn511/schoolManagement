/* eslint-disable no-console */
var dotenv = require('dotenv');
dotenv.config();
require('colors');
var app = require('./app');
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(("App is listening on  " + PORT).bold);
});
