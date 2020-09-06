//~~ IMPORTS ~~
const { client } = require('./client');

//~~ FUNCTIONS ~~
//Gets all links in the table. Useful for default, non-filtered state of links.
async function getAllLinks() {
    try {
        const { rows } = await client.query(`
            SELECT *
            FROM links;
        `);

        return rows;
    } catch (error) {
        throw error;
    }
}

//Gets a specific link given a url.
async function getLinkByURL({ url }) {
    try {
        const { rows: [link] } = await client.query(`
            SELECT *
            FROM links
            WHERE url=$1;
        `, [url]);

        return link;
    } catch (error) {
        throw error;
    }
}
//Create a link using 
async function createLink({ url }) {
    try {
        const { rows: [link] } = await client.query(`
            INSERT INTO links(url)
            VALUES ($1)
            ON CONFLICT (url) DO NOTHING
            RETURNING *;
        `, [url]);

        return link;
    } catch (error) {
        throw error;
    }
}
//~~ EXPORTS ~~
module.exports = {
    getAllLinks,
    getLinkByURL,
    createLink
}