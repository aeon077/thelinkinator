//~~ IMPORTS ~~
const { client } = require('./client');
const { createTags } = require('./tags');
const { addTagsToLink } = require('./link_tags');

//-- Database Functions --
const { } = - require('./index');

//~~ FUNCTIONS ~~
//Gets all links in the table. Useful for default, non-filtered state of links.
async function getAllLinks() {
    try {
        const { rows: linkIds } = await client.query(`
            SELECT id
            FROM links;
        `);

        const links = await Promise.all(linkIds.map(
            link => getLinkById(link.id)
        ));

        return links;
    } catch (error) {
        throw error;
    }
}

//Gets a specific link given a url.
async function getLinkByURL({ url }) {
    try {
        console.log("URL :", url);
        const { rows: [link] } = await client.query(`
            SELECT id
            FROM links
            WHERE url=$1;
        `, [url]);

        console.log(link);

        const retrievedLink = await getLinkById(link.id);

        return retrievedLink;
    } catch (error) {
        throw error;
    }
}

async function getLinkByID({ url }) {
    try {
        const { rows: [{ id }] } = await client.query(`
            SELECT id
            FROM links
            WHERE url=$1;
        `, [url]);

        const link = await getLinkById(id);

        return link;
    } catch (error) {
        throw error;
    }
}

//Create a new link.
async function createLink({ url, comment, tags = [] }) {
    try {

        const { rows: [link] } = await client.query(`
            INSERT INTO links(url, comment)
            VALUES ($1, $2)
            ON CONFLICT (url) DO NOTHING
            RETURNING *;
        `, [url, comment]);


        const tagList = await createTags(tags);

        if (tagList) {
            await addTagsToLink(link.id, tagList);
        }

        newLink = await getLinkById(link.id);

        return newLink;
    } catch (error) {
        throw error;
    }
}

//Gets a link by a passed id. Adds tags to the link object. Creates the final link response object.
async function getLinkById(linkId) {
    try {
        const { rows: [link] } = await client.query(`
        SELECT *
        FROM links
        WHERE id=$1;
        `, [linkId]);

        if (!link) {
            throw {
                name: "LinkNotFoundError",
                message: "Could not find a link with that linkId."
            };
        }

        const { rows: tags } = await client.query(`
        SELECT tags.*
        FROM tags
        JOIN link_tags ON tags.id=link_tags."tagId"
        WHERE link_tags."linkId"=$1;
        `, [linkId]);

        link.tags = tags;

        return link;
    } catch (error) {
        throw error;
    }
}

//Update link with the passed parameters. Used for editing links.
async function updateLink({ id, fields = {} }) {
    try {
        if (fields.tags) {
            const newTags = fields.tags;
            delete fields.tags;

            const tagsList = await createTags(newTags);
            await addTagsToLink(id, tagsList);
        }

        const setString = Object.keys(fields).map(
            (key, index) => `"${key}"=$${index + 1}`
        ).join(', ');

        const { rows } = await client.query(`
        UPDATE links
        SET ${setString}
        WHERE id=${id}
        RETURNING *;
        `, Object.values(fields));

        return rows;
    } catch (error) {
        throw error;
    }
}
//~~ EXPORTS ~~
module.exports = {
    getAllLinks,
    getLinkByURL,
    createLink,
    updateLink
}