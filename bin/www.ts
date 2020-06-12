/* eslint-disable no-console */
const http = require('http');
const app = require('../app');
require('dotenv');

console.log('fsdfdfd');
const port = parseInt(process.env.PORT, 10) || 3000;
console.log(process.env.PORT);
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
