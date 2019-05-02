// import react so JSX is able to be used
import React from "react";
// defining a named component called Container, which can take two props, fluid and children, and exporting that so we can import it in other files in the app
export function Container({ fluid, children }) {
  // returns a single container div as a component
  // a ternary operator is used to determine if it will be a fluid container or not
  // if passed a fluid prop, the value will be truthy and fluid is added to the className, if falsy, the string is empty so nothing is added to className
  // component will have all children that are included within the component where it is rendered, those are passed in between the container component's div tags
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}
// defining and exporting a named functional component called Row with also takes two props
export function Row({ fluid, children }) {
  // returns single row div as component
  // same ternary operator as above to determine whether the row will add fluid to the className or not (is a Bootstrap class, but is className in JSX because class is reserved keyword)
  // inbetween row div tags will be all children that are rendered inside the row component when it is imported and rendered in the other component files
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}
// exporting a functional component named Col which takes size and children as props
export function Col({ size, children }) {
  // returns a single column div as its component
  return (
    <div
    // these functions are taking the size prop that was passed in and putting in a format for the bootstrap className to read (splits the string, maps it to a col prefix and joins the string)
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
    {/* children contained within col component when rendered in the other file will be contained inside the div as indicated here with the children prop */}
      {children}
    </div>
  );
}
