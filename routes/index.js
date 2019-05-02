// imports path so we can use .join to build the route to index.html with _dirname
const path = require("path");
// imports the express router so we use router.use instead of app.use in the route file for separation of concerns
const router = require("express").Router();
// imports api folder and sets to apiRoutes variable, which is used in the next line of code
const apiRoutes = require("./api");
// tells the router to start routes in the api folder with /api
router.use("/api", apiRoutes);
// directs the router to use the one html page, where a root div is set up for the react components to be rendered in
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
// exporting the router to access from other files
module.exports = router;
