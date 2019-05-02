// importing react to be able to use JSX
import React from "react";
// importing the names components col, row, and container from the grid component file
import { Col, Row, Container } from "../components/Grid";
// importing the jumbotron component
import Jumbotron from "../components/Jumbotron";
// defining a functional component called NoMatch
function NoMatch() {
  // returns a bootstrap container component (coming from the grid component folder) and its containing children
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        {/* when the app routes to NoMatch (the catch-all from the App.js routes) the jumbotron displays a 404 page not found message with an eye roll emoji */}
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
// exporting this functional component, which is how the react router can access it through importing in the other file
export default NoMatch;
