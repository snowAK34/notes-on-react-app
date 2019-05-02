// import React to be able to use JSX in this file
import React from "react";
// object deconstruction to import parts of the react-router-dom
// react router helps set up our routes cleanly- rest of components will live on these routes
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing all of the pages components for the router to use to route to those components
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
// importing the nav component
import Nav from "./components/Nav";

// defining a functional component called App
function App() {
  // this component returns the react router with containing components
  return (
    <Router>
      <div>
        {/* nav component contained at the top of the application component */}
        <Nav />
        {/* switch is a react router defined tag */}
        <Switch>
          {/* the root path will route to the Home component, exact path so rendering won't just append to current page */}
          <Route exact path="/" component={Home} />
          {/* the path /saved will route to the Saved component, exact path so won't just append to current page and will render exactly what is contained in Saved instead */}
          <Route exact path="/saved" component={Saved} />
          {/* sets up a catchall to the NoMatch component (not exact path so it will catch anything not exactly defined in the other routes) */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
// export the component to use where it is imported in index.js
export default App;
