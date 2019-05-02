// importing react along with the component class, deconstructed to already that that separated from the react object and component when we extend the class does not need to be mapped to with react.component
import React, { Component } from "react";
// importing the jumbotron, card, book, and footer components from their respective files so they can be used here for rendering on the Saved page
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
// importing the API front end file so those routes are avaiable to access
import API from "../utils/API";
// importing the named components from the grid and list component folders
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
// defining a class component named Saved and extending the Component react class to use its built in methods (this time not just render() but also componentDidMount())
class Saved extends Component {
  // defining the initial state with an empty array called books
  state = {
    books: []
  };
  // a built in method that will run when this component (Saved class) is rendered to the page
  componentDidMount() {
    // when the Saved class component first renders, the getSavedBooks method in this class is called
    this.getSavedBooks();
  }
  // this is a custom method for this class called getSavedBooks
  getSavedBooks = () => {
    // this will run the getSavedBooks method from the API.js file, which was imported at the top of the page
    API.getSavedBooks()
      // after that async function returns a response, the state is updated
      .then(res =>
        // this books array in the state is set so that it will contain the data received from the getSavedBooks function
        this.setState({
          books: res.data
        })
      )
      // if there is an error, it will be logged in the console
      .catch(err => console.log(err));
  };
  // this is a custom function for the Saved class called handleBookDelete and it takes one parameter
  handleBookDelete = id => {
    // this calls the deleteBook function from the API file and passes it the book id in the parameter so it will know what book to remove
    // when the function returns a response, then the getSavedBooks function for this class is called so the state of the books array will be current with what is saved
    API.deleteBook(id).then(res => this.getSavedBooks());
  };
  // render() is a build in method from the extended component class that will render its child components and update with the state to render to the virtual dom, which can compare to the actual dom and update components as relevent
  render() {
    // returns the container component with all of its children
    return (
      // container, row, and col are all named components from the grid component folder
      <Container>
        <Row>
          {/* col is passed a size as props */}
          <Col size="md-12">
            {/* jumbotron is rendered with its containing children, which gives a header for the page */}
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          {/* card component is rendered here, being passed a title and icon as props */}
            <Card title="Saved Books" icon="download">
            {/* ternary operator is determining what children will be rendered in the card component */}
              {this.state.books.length ? (
                // if the length of the current state of the books array is not zero & thus is truthy, the list component will be rendered
                <List>
                  {/* each item in the current books array will be mapped to the book component */}
                  {this.state.books.map(book => (
                    <Book
                      // the book id is saved as a key
                      key={book._id}
                      // the following 6 lines of data are pulled from each book object in the books array for the books we have saved and passed as props to the book component
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      // authors is first joined to a single string instead of an array of strings
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      // the button is also passed as props so the handleBookDelete function from this class can be used by the book child component
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                // if the current state books array has no length & thus is a falsy value, the card will instead display the text "No Saved Books"
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
// exporting this component so we can import it in the app file so the router can route to the saved page
export default Saved;
