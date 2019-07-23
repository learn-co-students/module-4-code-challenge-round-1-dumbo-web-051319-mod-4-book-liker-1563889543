import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  makeBooks = () => {
    return this.props.books.map((book, idx) => {
      return <Book data={book} key={book.id} addBookToShelf={this.props.addBookToShelf}/>
    })
    // debugger
  }


  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.makeBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
