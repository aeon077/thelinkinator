//~~ IMPORTS ~~
//-- Client --
const { Client } = require('pg');
const DB_NAME = 'linkinator'
const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;
const client = new Client(DB_URL);

//~~ EXPORTS ~~
module.exports = {
    client,
    // db methods
}