// import axios so we can use it when we make calls to the google API
const axios = require("axios");
// imported the models folder because we are making a .find() call to the Book collection of the mongo database
const db = require("../models");

// exporting this object so we can access it's method elsewhere in the app
module.exports = {
  // definies a findAll method
  findAll: function(req, res) {
    // building the query to hit the api in this manner with params because that is according to the google books documentation
    const { query: params } = req;
    axios
      // .get call with axios will read the api and return the data it finds based on the parameters passed in the getBooks route (client/src/utils/API.js)
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      // in the promise function, the following information is filtered out from the API data response: title, link, authors, description, & images (links and a thumbnail)
      .then(results =>
        results.data.items.filter(
          result =>
          // the data is defined this way because that is how it will come from the API; have to map into volumeInfo to get to the data wanted
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // this is another .then promise function
      .then(apiBooks =>
        // database call to Book collection with .find() mongoose method, reads all results in the Book collection so we know what ids are already in the database
        db.Book.find().then(dbBooks =>
          // .filter is an array method being called on the response from the google API call
          apiBooks.filter(apiBook =>
            // will return an array with all the books where the book is not already in the database (the googleId in database doesn't match the id of the book from the API call)
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      // the book data is returned in json format
      .then(books => res.json(books))
      // if there's an error, that is returned with a 422 status header
      .catch(err => res.status(422).json(err));
  }
};
