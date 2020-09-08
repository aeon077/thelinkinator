//~~ IMPORTS ~~
const linksRouter = require('express').Router();

//-- Database Functions --
const { getAllLinks, createLink } = require('../db/index');

//~~ MIDDLEWARE ~~

linksRouter.use((req, res, next) => {
    console.log("A request is being made to /links");

    next();
});
//GET Routes
//Get all links.
linksRouter.get("/", async (req, res, next) => {
    try {
        const links = await getAllLinks();

        res.send({
            status: 201,
            name: "SuccessfullyRetrieved",
            message: "All links were successfully retrieved!",
            links
        })
    } catch ({ name, message }) {
        next({ name, message })
    }
})

//POST Routes
//Create a new link.
linksRouter.post("/", async (req, res, next) => {
    const { url, comment, tags } = req.body;

    //Check if url was included in request.
    if (!url) {
        next({
            status: 400,
            name: "InvalidEntry",
            message: "No title was provided."
        });
    } else {
        try {
            //Create link data object to send to database.
            const linkData = {};
            linkData.url = url.toLowerCase();
            linkData.comment = comment;
            linkData.tags = tags;

            const newLink = await createLink(linkData);

            if (!newLink) {
                next({
                    status: 500,
                    name: "InternalServiceError",
                    message: "The link failed to create."
                });
            } else {
                res.send({
                    status: 201,
                    name: "SuccessfullyCreated",
                    message: "The link was successfully created!",
                    newLink
                })
            }
        } catch (error) {
            next(error);
        }
    }
})
//~~ EXPORTS ~~
module.exports = linksRouter;