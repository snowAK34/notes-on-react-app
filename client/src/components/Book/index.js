// import react so JSX is able to be used
import React from "react";
// importing named components ListItem from the List component folder and Row & Col named components from the Grid components folder
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// importing the css stylesheet within this same Book component folder to apply the styling for this component
import "./style.css";
// defining a functional component and passing it props of title, subtitle, authors, link, description, and image for book data, and also the button as props as well because it contains the function from the parent component and this way that function can be accessed
function Book({ title, subtitle, authors, link, description, image, Button }) {
  // returns the imported ListItem component as well as its containing children (must return a single containing component in JSX)
  return (
    <ListItem>
      {/* each ListItem when rendered will have 3 rows as children */}
      <Row className="flex-wrap-reverse">
      {/* the first row has 2 columns, and the col components are being passed sizes as props to the col component in the grid folder */}
        <Col size="md-8">
          {/* title prop is passed into the h3 tags */}
          <h3 className="font-italic">{title}</h3>
          {/* subtitle prop is passed into the h5 tags */}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
          {/* the link is passed to a view button */}
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        {/* authors is passed on the second row of the ListItem */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        {/* the third row will have the image in its first column and book description in the second column */}
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}
// exporting this component to be able to use it in other files of the application
export default Book;
