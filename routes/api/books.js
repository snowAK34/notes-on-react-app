// sets and instance of the express router to the variable router that we can use for the routes below
const router = require("express").Router();
// imports the bookController file so we have access to the functions defined in the book controller
const bookController = require("../../controllers/bookController");

// these are the methods set to the route /api/books (these prefixes coming from the 2 index.js files), which function is called will depend on the method
router.route("/")
  // with the get method at the /api/books, the findAll function from the book controller will be called
  .get(bookController.findAll)
  // with a post method call at the /api/books route, the create function from bookController will be called
  .post(bookController.create);

  // these are the methods linked to the route /api/books/:id, where id will be a book id that can be grabbed with req.params.id
router
  .route("/:id")
  // a get call will route to the findbyId method in bookController.js
  .get(bookController.findById)
  // a put call will route to the update method in bookController.js
  .put(bookController.update)
  // a delete call will cause the remove method in bookController.js to be called
  .delete(bookController.remove);
// router is exported so we can access the routes in this file elsewhere in the application
module.exports = router;
