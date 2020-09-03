//~~ IMPORTS ~~

// code to build and initialize DB goes here
const {
  client
  // other db methods 
} = require('./index');

//~~ FUNCTIONS ~~
async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS link_tags;
      DROP TABLE IF EXISTS tags;
      DROP TABLE IF EXISTS links;
    `);
    console.log("Finished dropping tables!");
    // build tables in correct order
    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE links (
        id SERIAL PRIMARY KEY,
        url VARCHAR(255) UNIQUE NOT NULL,
        count INTEGER,
        date TIMESTAMP,
        comment TEXT
      );
    `);

    await client.query(`
      CREATE TABLE tags (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
      );z
  `);

    await client.query(`
      CREATE TABLE link_tags (
        id SERIAL PRIMARY KEY,
        "linkId" INTEGER REFERENCES links(id),
        "tagId" INTEGER REFERENCES tags(id)
      );
    `);

    console.log("Finished building tables!");
  } catch (error) {
    throw error;
  }
}

// async function populateInitialData() {
//   try {
//     // create useful starting data
//   } catch (error) {
//     throw error;
//   }
// }

// async function testDB() {
//   try {

//   } catch (error) {

//   }
// }

buildTables()
  // .then(populateInitialData)
  // .then(testDB)
  .catch(console.error)
  .finally(() => client.end());