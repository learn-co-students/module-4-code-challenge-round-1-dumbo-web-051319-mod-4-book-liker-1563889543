import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  getBooks = () => {
    return this.props.initialBooks.map(book => <Book
      key={book.id} title={book.title} author={book.author} img={book.img} />
    )
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>Books!!{this.getBooks()}
        </ul>
      </div>
    );
  }
}

export default BookList;
