//~~ IMPORTS ~~
const apiRouter = require('express').Router();
const linksRouter = require('./links');

//~~ MIDDLEWARE ~~

apiRouter.use('/links', linksRouter);

//-- Error Handler --
apiRouter.use((error, req, res, next) => {
  res.send(error);
});

//~~ EXPORTS ~~
module.exports = apiRouter;
