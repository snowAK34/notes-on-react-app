// top two lines import express and mongoose, depndencies we are using in the app
// express is a framework for node
const express = require("express");
// mongoose helps with easy connecting and interacting with a mongo database
// it is an object data modeling library
const mongoose = require("mongoose");
// import routes by importing routes folder, made possible because it contains an index.js file
const routes = require("./routes");
// sets an express instance to a variable so we can reference it without starting a new instance of express by retyping express() instead
const app = express();
// sets the port for the server to connect to; either one determined by the deployment environment or 3001 as localhost in the development environment
const PORT = process.env.PORT || 3001;
// the next two lines of code are middleware that make it possible for data to be parsed in JSON format when passed between front and back end
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// if in a production environment, the static files will be found in the build folder inside the client folder
// the build folder is made by the webpack bundler
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
// connects to mongo database called googlebooks with mongoose, using environment variable in production and localhost connection in development environment
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
// tells our server to start listening
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
