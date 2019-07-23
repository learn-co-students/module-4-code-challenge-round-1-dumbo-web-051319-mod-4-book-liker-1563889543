import React from "react";

class Form extends React.Component {
  render() {
    return <h1>{
      <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="search"
          type="text"
        />
      </div>
      </form>
  /*create form*/}</h1>;
  }
}

export default Form;
