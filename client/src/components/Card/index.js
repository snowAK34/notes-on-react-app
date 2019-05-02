// import react so JSX is able to be used
import React from "react";
// defining a functional component named Card that is able to recieve three props of icon, title, and children
function Card({ icon, title, children }) {
  // the function returns its containing div
  return (
    // classNames are bootstrap classes, class is a reserved keyword in js, so JSX uses className
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* icon and title props are passed here so they will show in the card header */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* card body will contain the child components and elements contained where card is rendered (in the Home and Saved class component files) */}
      <div className="card-body">{children}</div>
    </div>
  );
}
// exporting this component to be able to use it in other files of the application
export default Card;
