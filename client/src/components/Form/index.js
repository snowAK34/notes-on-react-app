// import react so JSX is able to be used
import React from "react";
// defining a functional component named form which can take three props, q, and the functions handleInputChange and handleFormSubmit
function Form({ q, handleInputChange, handleFormSubmit }) {
  // returns form element and its containing children
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          // this is how the value of the input is set to the current state of q from the Home class component(passed in as props)
          value={q}
          placeholder="Ready Player One"
          name="q"
          // as the text input changes, this is how we are able to trigger the handleInputChange function from the parent component that was passed down with the props so it could be accessed from this child component
          // this function is updating q in the state as the text is changing in the input field
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
        // this button has been passed the handleFormSubmit function from the parent component so it will be triggered on the button click in the form child component
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}
// exporting this component to be able to use it in other files of the application
export default Form;
