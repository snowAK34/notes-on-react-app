// import react so JSX is able to be used and using object deconstruction to pull out the react component class, then when extending the defined class with component, it doesn't need mapeed to with React.Component and instead can just type Component
import React, { Component } from "react";
// imports Link, deconstructed from the react-router-dom so we can use that for our routing here in the nav
import { Link } from "react-router-dom";
// imports the stylesheet within the nav component folder to apply the styling specific to the nav component
import "./style.css";
// defines a class component extending the component class from react to access its built in functions (componentDidMount, componentWillUnmount, render())
class Nav extends Component {
  // sets the initial state; open is initially set to false and the width is set to the current inner width of the window
  state = {
    open: false,
    width: window.innerWidth
  };
  // updateWidth is a custom function of the Nav component that updates the nav component state
  updateWidth = () => {
    // an object named newState is created that will contain values to change the current state to later in the function
    const newState = { width: window.innerWidth };
    // this will set the value for an open key to false in the newState object to false if both the value of open in the current state is true AND the width value in the newState object is greater than 991
    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }
    // this updates the state with the values we have set in the created newState object
    this.setState(newState);
  };
  // declare a custom function for this class named toggleNav which will just change the current state of the state's open property
  toggleNav = () => {
    // this sets open in the state to NOT the current state; so whatever it was (true/false), it will change to the other value
    this.setState({ open: !this.state.open });
  };
  // componentDidMount is a built in function that we received when we imported the deconstructed component from react and extended the nav class
  // it will run when the nav component is rendered
  componentDidMount() {
    // adds an event listener to the window that runs the updateWidth function from this class when the window is resized
    window.addEventListener("resize", this.updateWidth);
  }
  // componentWillUnmount is also a built in function from React.Component that runs right before a component is unmounted or destroyed
  componentWillUnmount() {
    // removes the event listener we had on the window resize that also runs the updateWidth function
    window.removeEventListener("resize", this.updateWidth);
  }
  // also built in function from the extend Component class that renders to the dom what is being returned in this function
  render() {
    // returns the nav element with all of its contained children
    return (
      // className is set with the bootstrap classes for nav; class is a reserved keyword in JS so for JSX we use className
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/* this Link component from the react router will route to the root path "/" if "Google Books" in this component is clicked */}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        {/* this button opens the nav by calling the toggleNav method on the cutton click which changes the state of the nav's open property */}
        <button
          onClick={this.toggleNav}
          // the other attributes below come from bootstrap navbar attributes
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* using a ternary operator so that if the current state of the open property of the nav is true, nothing will be added to the navbar-collapse class (empty string) and if the property is currently false, it will add collapse to the string to collapse the navbar */}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            {/* link component of the react-router-dom rendered here */}
              <Link
              // when clicked, will run the toggleNav method of this Nav class
                onClick={this.toggleNav}
                // using a ternary operator, if the route is currently the root, the link will be set to active, otherwise if the pasthname is not equal to root, the className is simply "nav-link"
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                // this link routes to the root
                to="/"
              >
              {/* text for the link to the root is "Search" */}
                Search
              </Link>
            </li>
            <li className="nav-item">
            {/* another router link component rendered here in this next list item div */}
              <Link
              // when this link is clicked, it calls the toggleNav method for this class which changes the state of the open property in the state of the nav class
                onClick={this.toggleNav}
                // if the path to the current active window is the /saved page, this link will be set with an active class, but if the current route is not /saved, the class will simply be "nav-link" without the active class added; also determined with a ternary operator
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                // this link connects to the /saved route
                to="/saved"
              >
              {/* text displayed for this link is "Saved" */}
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
// exporting this component to be able to use it in other files of the application
export default Nav;
