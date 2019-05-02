// import React so we can use JSX (<App />)
import React from "react";
// import reactDOM to be able to render the code to the html with ReactDOM.render
import ReactDOM from "react-dom";
// import the .App file that will contain the front end code that will be rendered in the root div of the html file
import App from "./App";
// imports service worker file that allows loading from cache for quicker rendering on revisit
import registerServiceWorker from "./registerServiceWorker";
// renders the App file content to the root div of the html file on the document
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
