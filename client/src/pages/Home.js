// imports react, using object deconstruction to pull out component so we don't have to type React.Component when extending the class
import React, { Component } from "react";
// imports the components from their different folders to render in this file
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
// imports the API routes from the front end
import API from "../utils/API";
// imports the named components in the Grid and List component folders
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
// defines a class component named home and extends the react component class to access its build in methods, such as render()
class Home extends Component {
  // defines the initial state, setting books to an empty array, q to an empty string, and message to the string "Search For A Book to Begin"
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };
// this is a custom function for the Home class
  handleInputChange = event => {
    // pulls out the name and value of the target of the event (in this case the form where this function is called onChange)
    const { name, value } = event.target;
    // updates the state with the new value of the named target (dynamically because name is in square brackets instead of naming the element explicitly)
    this.setState({
      [name]: value
    });
  };
// defines a custom function for the Home class named getBooks
  getBooks = () => {
    // this calls the getBooks function from the API file and passes it the value currently held by q in the state, which will be the query passed into the getBooks function as the parameter
    API.getBooks(this.state.q)
      // as part of a promise function, the books array is updated in the state with the data from the api call
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      // if there isn't a response, .catch will update the state with books as an empty array and the message that no new books were found
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };
// custom function for the Home class called handleFormSubmit
  handleFormSubmit = event => {
    // this will prevent a page refresh on form submisstion
    event.preventDefault();
    // calls the getBooks function defined in this class
    this.getBooks();
  };
// custom function for Home class called handleBookSave, takes one parameter
  handleBookSave = id => {
    // uses built in .find method to find the book within the array of books that the current state is set to where the id matches the id that passed into the function as an argument
    // saves that book in a variable named book
    const book = this.state.books.find(book => book.id === id);
    // calls the saveBook function from the API.js file
    // what is passed into the saveBook function is an object built of the book's information with the values of the properties set to the data pulled from the google books API call
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
    // after the saveBook Async function is done, the promise function calls the getBooks function defined in this class Home
  };
// render is what will update the virtual DOM on load and as the state changes so that changes when the virtual dom compares to the actual dom will be updated in that component
// this is a built in method of a react component class
  render() {
    // the content placed inside this function is what is being returned by the render method
    return (
      // container is the wrapping div, can be important for the bootstrap layout, but also components render single elements, so there does have to be a containing div
      // the container is also a component within the grid component folder; it was imported as a named component
      <Container>
        {/* row and column are both named components from the grid component folder, imported at the top of the file and rendered here */}
        <Row>
          {/* column size is passed as props to the col child component from this Home parent */}
          <Col size="md-12">
          {/* jumbotron has its own component folder, imported at the top and rendered here */}
            <Jumbotron>
              {/* h1 and h2 are both children of the jumbotron component */}
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            {/* one card component rendered here; passed a title and icon as props */}
            <Card title="Book Search" icon="far fa-book">
            {/* form component has 2 functions passed as props: handleInputChange and handleFormSubmt, as well as the value held by q in the current state passed in props as well */}
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          {/* this is another rendition of the card component, this time with only a title passed as props and no icon */}
            <Card title="Results">
            {/* this is the start of a ternary operator that will read true if in the current state there are books in the books array, otherwise the empty array would have a length of zero which is a falsy value */}
              {this.state.books.length ? (
                // if this.state.books.length reads true, the list component is rendered
                <List>
                  {/* running .map on the books array will map each array item, in this case into the book component */}
                  {this.state.books.map(book => (
                    <Book
                    // the book component is given a key
                      key={book.id}
                      // the next 6 items are book data from the google books api that are passed as props to the book component
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      // authors is joined from an array of strings into a single string first
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      // the button is also passed as a prop, that way the class method handleBookSave can be passed down to the book child component from this parent class component
                      Button={() => (
                        <button
                        // on button click the button will call the handleBookSave method from this class, passing the book id, which was mapped to each item as the key
                          onClick={() => this.handleBookSave(book.id)}
                          // these are bootstrap classes, className is used since class is a reserved keyword in javascript
                          className="btn btn-primary ml-2"
                        >
                        {/* visual text on the button */}
                          Save
                        </button>
                      )}
                    />
                  ))}
                  {/* end of the list component */}
                </List>
              ) : (
                // if the current state of the books array length is zero (falsy), the this.state.message will display instead
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
// exporting this component, this is how we can access it with the react router
export default Home;
