// importing path and router dependencies for this routes file
const path = require("path");
const router = require("express").Router();
// importing both the book and google routes to the index file so we can import the api folder on one line in other files
const bookRoutes = require("./books");
const googleRoutes = require("./google");
// this will add /books to the start of all the routes in the bookRoutes folder
// happens before the /api is added in routes/index.js so these routes will all be /api/books
router.use("/books", bookRoutes);
// adds /google to all routes in the googleRoutes folder (these will all be /api/google)
router.use("/google", googleRoutes);
// exports router so we can access the content of this file in other files
module.exports = router;
