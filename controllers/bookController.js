// importing the models folder, possible because of the index.js file, which imports the api folder, and the index.js file in that folder imports our two route files books.js and google.js
const db = require("../models");

// we are exporting all of these functions that we are defining in the bookController file
module.exports = {
  // defining a function called findAll that has two parameters, req & res
  findAll: function(req, res) {
    // this runs a .find call on the Book collection in our mongo database; .find is a read method in mongoose
    // we are not specifying a particular book, so it will grab data on all of the books in the Book collection
    db.Book.find(req.query)
      // the data from the database query will be returned in this promise method in json format
      .then(dbBook => res.json(dbBook))
      // if there's an error, that error will be returned with a 422 status header
      .catch(err => res.status(422).json(err));
  },
  // a function called findById is defined with two parameters, req & res
  findById: function(req, res) {
    // findById queries the mongo database for one book from the Book collection
    // the id of the book wanted is grabbed from the route with req.params.id
    db.Book.findById(req.params.id)
      // the response with the data is returned with the .then promise function in json format
      .then(dbBook => res.json(dbBook))
      // if there's an error, that is returned with a 422 status header
      .catch(err => res.status(422).json(err));
  },
  // defining a function called create
  create: function(req, res) {
    // mongoose .create method to add a new entry to the Book collection in the mongo database
    // the data that is getting saved in from the new book is passed in req.body (possible because of the middleware in server.js)
    db.Book.create(req.body)
      // the data of the new book saved after hitting the database is returned in json format
      .then(dbBook => res.json(dbBook))
      // if there's an error, it's returned with a 422 status header
      .catch(err => res.status(422).json(err));
  },
  // defining an update function
  update: function(req, res) {
    // mongoose .findOneAndUpdate function run to update a particular book in the Book collection
    // the book will update where the id matches the one pulled from the route with req.params.id
    // req.body is an object that contains the data to be updated
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      // updated book information is returned in the promise .then function, returned in json format
      .then(dbBook => res.json(dbBook))
      // if there's an error, it's returned wtih 422 status header
      .catch(err => res.status(422).json(err));
  },
  // define a function called remove
  remove: function(req, res) {
    // uses the .findById function from mongoose to query the correct book to match the id from the route (mapped to with req.params.id)
    db.Book.findById(req.params.id)
      // in the promise function after findById, the .remove mongoose function is called to remove that particular book from the database
      .then(dbBook => dbBook.remove())
      // in the promise function after .remove, the deleted book information is sent back in json format
      .then(dbBook => res.json(dbBook))
      // if there's an error, it's sent with a header status of 422
      .catch(err => res.status(422).json(err));
  }
};
