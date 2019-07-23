import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  grabBooks = () => {
  return this.props.data.map(book => {
    return <Book
    key={book.id}
    data={book}
    handleAdd={this.props.handleAdd} />

  })}

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleForm={this.props.handleForm}/>
        <ul>{this.grabBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
