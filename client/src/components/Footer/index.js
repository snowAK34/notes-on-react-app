// import react so JSX is able to be used
import React from "react";
// defining a functional component named Footer (is not passed any props)
function Footer() {
  // returns its single component of a footer
  return (
    <footer>
      <hr />
      <p className="pull-right">
        {/* footer has a font awesome icon and the text "Proudly built using React.js" */}
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}
// exporting this component to be able to use it in other files of the application
export default Footer;
