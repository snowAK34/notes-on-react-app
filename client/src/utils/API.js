// import axios so we can use it for our front end routes 
import axios from "axios";

// exports these methods to access them from other files in the app
export default {
  // defines a getBooks method; takes one parameter
  getBooks: function(q) {
    // returns a .get method call to the api/google route, adding a title parameter, passed into the function call
    // this hits the route defined on the back end of the app (routes folder)
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // defines a method named getSavedBooks
  getSavedBooks: function() {
    // returns a .get call to the /api/books route defined in the routes folder on the back end
    return axios.get("/api/books");
  },
  // defines a method called deleteBook which takes one parameter
  deleteBook: function(id) {
    // returns a call to the /api/books route with a delete method, passing the id parameter in the route so it can be grabbed by req.params.id
    return axios.delete("/api/books/" + id);
  },
  // defines a method called saveBook which takes one parameter
  saveBook: function(bookData) {
    // returns a post call to the /api/books route, passing in the bookData to be posted to the database
    return axios.post("/api/books", bookData);
  }
};
