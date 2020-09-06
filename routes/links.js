//~~ IMPORTS ~~
const linksRouter = require('express').Router();

//-- Database Functions --
const { getAllLinks } = require('../db/index');

//~~ MIDDLEWARE ~~
//GET Routes
//Get all links.
linksRouter.get("/", async (req, res, next) => {
    try {
        const links = await getAllLinks();

        res.send({
            links
        });
    } catch ({ name, message }) {
        next({ name, message })
    }
})
//~~ EXPORTS ~~
module.exports = linksRouter;