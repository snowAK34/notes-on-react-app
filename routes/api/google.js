// imports express router and sets an instance of that router to a variable called router
const router = require("express").Router();
// imports the method exported from the googleController file
const googleController = require("../../controllers/googleController");

// the next two lines define the route for our following method as /api/google/ because of the /api added by routes/index.js and /google added by api/google.js
router
  .route("/")
  // when the above route is used with a .get method, it will call the function called findAll that is defined in the googleController file
  .get(googleController.findAll);
// router is exported so we can access this route definied in this file
module.exports = router;
