/* eslint-disable no-console */
const dotenv = require('dotenv');

dotenv.config();

require('colors');
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening on  ${PORT}`.bold);
});
