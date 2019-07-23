import React from "react";

class Form extends React.Component {
  addBook = e => {
    e.preventDefault();
    console.log(e.target);
  }
  render() {
    return (
      <form onSubmit={this.addBook}>
  Title:
    <input type="text" name="title" />
  Author:
    <input type="text" name="author" />
  <input type="submit" value="Submit" />
</form>
    )
  }
}

export default Form;
