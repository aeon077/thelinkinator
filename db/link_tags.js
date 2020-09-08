//~~ IMPORTS ~~
const { client } = require('./client');

//~~ FUNCTIONS ~~
//Creates a link_tags join row to connect the link with its tags.
async function createLinkTag(linkId, tagId) {
    try {
        await client.query(`
        INSERT INTO link_tags("linkId", "tagId")
        VALUES ($1, $2)
        ON CONFLICT ("linkId", "tagId") DO NOTHING;
    `, [linkId, tagId]);

    } catch (error) {
        throw error;
    }
}

//Add created tags to a link.
async function addTagsToLink(linkId, tagList) {
    try {
        const links = await Promise.all(tagList.map(
            tag => createLinkTag(linkId, tag.id))
        );

        return links;
    } catch (error) {
        throw error;
    }
}
//~~ EXPORTS ~~
module.exports = {
    addTagsToLink
}