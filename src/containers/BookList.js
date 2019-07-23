import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  makeBookComponents = () => {
    return this.props.books.map(book => {
      return <Book key={book.id} book={book} handleBookClick={this.props.handleBookClick}/>
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBookHandler={this.props.addBookHandler}/>
        <ul>{this.makeBookComponents()}</ul>
      </div>
    );
  }
}

export default BookList;
