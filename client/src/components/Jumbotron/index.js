// import react so JSX is able to be used
import React from "react";
// importing the stylesheet within the jumbotron component folder to apply the styles specific to the jumbotron component
import "./style.css";
// defining a functional component called jumbotron and passing it children as props
function Jumbotron({ children }) {
  // returns a single div component that is a bootstrap jumbotron and the children rendered within the jumbotron component in the other file will be placed here inside the div where the children prop is passed
  return <div className="jumbotron mt-4">{children}</div>;
}
// exporting this component to be able to use it in other files of the application
export default Jumbotron;
