//~~ IMPORTS ~~
//-- Client --
const { Client } = require('pg');
const DB_NAME = 'linkinator'
const DB_URL = process.env.DATABASE_URL || `postgres://${DB_NAME}`;
const client = new Client(DB_URL);

//~~ FUNCTIONS ~~

//~~ EXPORTS ~~
module.exports = {
  client,
  // db methods
}