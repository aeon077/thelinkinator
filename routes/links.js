//~~ IMPORTS ~~
const linksRouter = require('express').Router();

//-- Database Functions --
const { getAllLinks, getLinkByURL, createLink, updateLink } = require('../db/index');

//~~ MIDDLEWARE ~~

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
        });
    } catch (error) {
        next(error);
    }
})

//Get specific link using a url parameter.
linksRouter.get("/:url", async (req, res, next) => {
    try {
        const { url } = req.params;

        url = url.toLowerCase();
        const link = await getLinkByURL({ url });

        res.send({
            status: 201,
            name: "SuccessfullyRetrieved",
            message: "The link was successfully retrieved!",
            link
        });
    } catch (error) {
        next(error);
    }
})

//POST Routes
//Create a new link.
linksRouter.post("/", async (req, res, next) => {
    let { url, comment, tags } = req.body;

    try {
        //Check if url was included in request.
        if (!url) {
            console.log("HI");
            next({
                status: 400,
                name: "InvalidEntry",
                message: "No url was provided."
            });
        } else {
            //Converts url to proper format if it is not.
            if (!url.includes('https://')) {
                url = 'https://' + url;
            }

            url = url.toLowerCase();

            //find url by name to see if it exsists already
            const retrievedLink = await getLinkByURL({ url });
            if (retrievedLink) {
                next({
                    status: 400,
                    name: "InvalidEntry",
                    message: "The url provided already exists."
                });
            } else {
                //Create link data object to send to database.
                const linkData = {};

                linkData.url = url;
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
            }
        }
    } catch (error) {
        next(error);
    }
})

//UPDATE Routes
//Updates a link.
linksRouter.patch('/:linkId', async (req, res, next) => {
    const { url, count, comment, tags } = req.body;
    const { linkId } = req.params;

    if (!linkId) {
        next({
            status: 400,
            name: "InvalidEntry",
            message: "No valid linkId was provided."
        });
    } else {
        try {
            const updateObject = {};
            updateObject.id = linkId;
            updateObject.fields = [];

            if (url) {
                updateObject.fields.url = url;
            }
            if (count) {
                updateObject.fields.count = count;
            }
            if (comment) {
                updateObject.fields.comment = comment;
            }
            if (tags) {
                updateObject.fields.tags = tags;
            }

            const updatedLink = await updateLink(updateObject);

            if (updateLink) {
                res.send({
                    status: 201,
                    name: "SuccessfullyUpdated",
                    message: "The link was successfully updated!",
                    updatedLink
                });
            }

        } catch (error) {
            next(error);
        }
    }
})
//~~ EXPORTS ~~
module.exports = linksRouter;