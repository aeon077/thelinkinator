//~~ IMPORTS ~~
const apiRouter = require('express').Router();
const linksRouter = require('./links');

//~~ MIDDLEWARE ~~
apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.use('/links', linksRouter);

//-- Error Handler --
apiRouter.use((error, res) => {
  res.send(error);
});

//~~ EXPORTS ~~
module.exports = apiRouter;
