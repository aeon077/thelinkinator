//~~ IMPORTS ~~

//-- Client --
const { client } = require('./client');
const {
  getAllLinks,
  getLinkByURL,
  createLink
} = require('./index');

//~~ FUNCTIONS ~~
//Connects to database and begins running initial functions.
async function rebuildDB() {
  try {
    client.connect();

    await buildTables();
    await populateInitialData();

  } catch (error) {
    console.log("Error rebuilding database.");
    throw error;
  }
}

//Rebuilds the initial database state.
async function buildTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS link_tags;
      DROP TABLE IF EXISTS tags;
      DROP TABLE IF EXISTS links;
    `);
    console.log("Finished dropping tables!");

    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE links (
        id SERIAL PRIMARY KEY,
        url VARCHAR(255) UNIQUE NOT NULL,
        count INTEGER,
        date TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
        comment TEXT
      );
    `);

    await client.query(`
      CREATE TABLE tags (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
      );
  `);

    await client.query(`
      CREATE TABLE link_tags (
        id SERIAL PRIMARY KEY,
        "linkId" INTEGER REFERENCES links(id),
        "tagId" INTEGER REFERENCES tags(id)
      );
    `);

    console.log("Sucessfully finished building tables!");
  } catch (error) {
    console.log("Error building tables.");
    throw error;
  }
}

//Creates initial data ot be used for tutorials and database testing.
async function populateInitialData() {
  try {
    console.log("Creating initial link...");

    const initialLink = await createLink({ url: "https://Linkinator.com" });

    console.log("Successfully created initial link: \n", initialLink)

    console.log("Successfully finished creating initial data!");
  } catch (error) {
    console.log("Error creating initial data.");
    throw error;
  }
}

//Tests database functions to verify functionality.
async function testDB() {
  try {
    console.log("Running tests of database functions...");

    console.log("Testing getAllLinks...");
    const allLinks = await getAllLinks();
    console.log("Successfully ran getAllLinks: \n", allLinks);

    console.log("Testing getLinkByURL...");
    const link = await getLinkByURL({ url: "https://Linkinator.com" });
    console.log("Successfully ran getLinkByURL: \n", link);

    console.log("Successfully finished running tests of database functions!");
  } catch (error) {
    console.log("Error testing database functions.");
    throw error;
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());