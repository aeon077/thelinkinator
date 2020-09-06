//~~ EXPORTS ~~
//Exports all database functions. Only need to import this to have access to database.
module.exports = {
  ...require('./client'),
  ...require('./links'),
  ...require('./tags'),
  ...require('./link_tags')
}