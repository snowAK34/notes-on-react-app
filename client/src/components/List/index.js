// import react so JSX is able to be used
import React from "react";
// import css stylesheet that is also located in List component folder to apply styling specific to the List component
import "./style.css";

// This component exports both the List and ListItem components
// the List is a functional component that takes as props the children contained within the List component where it is rendered 
export const List = ({ children }) => (
  <ul className="list-group">
  {/* the children that were passed as props go in between the unordered list tags here */}
    {children}
  </ul>
);
// the ListItem is a functional component that takes as props the children contained within the ListItem component where it is rendered in the other files
export function ListItem({ children }) {
  // returns a single listitem component that contains the children passed as props inbetween its <li> tags
  return <li className="list-group-item">{children}</li>;
}
