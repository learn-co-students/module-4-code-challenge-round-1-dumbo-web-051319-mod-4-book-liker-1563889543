import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    const bookLis = this.props.books.map( book => (
      <Book key={book.id} {...book}/>
    ))

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{bookLis}</ul>
      </div>
    );
  }
}

export default BookList;
