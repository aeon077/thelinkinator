//~~ IMPORTS ~~
const { client } = require('./client');

//~~ FUNCTIONS ~~

//Gets a tag by a tagid.
async function getTagsById({ id }) {

}
//Creates the tags that are sent on a link post.
async function createTags(tagList) {
    if (tagList.length === 0) {
        return;
    }

    const insertValues = tagList.map(
        (_, index) => `$${index + 1}`).join('), (');

    const selectValues = tagList.map(
        (_, index) => `$${index + 1}`).join(', ');

    try {
        await client.query(`
        INSERT INTO tags(name)
        VALUES (${insertValues})
        ON CONFLICT (name) DO NOTHING;
        `, tagList);

        const { rows } = await client.query(`
        SELECT * FROM tags
        WHERE name
        IN (${selectValues});
        `, tagList);

        return rows;
    } catch (error) {
        throw error;
    }
}
//~~ EXPORTS ~~
module.exports = {
    createTags
}