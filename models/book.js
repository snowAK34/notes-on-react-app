// imports mongoose since that will be used to set up a schema to define how a book will be saved in the database
const mongoose = require("mongoose");
// sets up a reference to the mongoose schema as a variable named Schema
const Schema = mongoose.Schema;

// defines a new schema and saves that to book schema so we can use that variable when we define the model below
const bookSchema = new Schema({
  // a field called title will hold a required value that is a string
  title: { type: String, required: true },
  // a field for saving a subtitle, also will be a string, but this isn't required
  subtitle: { type: String },
  // authors field will require a value and the authors will be saved as an array of strings
  authors: { type: [String], required: true },
  // link to the book is required and will be saved as a string
  link: { type: String, required: true },
  // book description is required and saved as a string
  description: { type: String, required: true },
  // image is saved as a string and is required to have a value
  image: { type: String, required: true },
  // googleId field is also required and saved as a string, but also must be a unique value in the collection
  googleId: { type: String, required: true, unique: true }
});
// defines the mongoose model by passing it a name and the schema as parameters, saved as a variable to export
const Book = mongoose.model("Book", bookSchema);
// exporting the model with the book variable to be able to access the model from other files in the application
module.exports = Book;
