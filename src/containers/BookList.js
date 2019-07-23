import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  generateBooks = () => {
    return this.props.books.map((book,i) => {
      return <Book key={i} {...book} onBookClick={this.props.onBookClick}/>
      })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form onNewBook={this.props.onNewBook}/>
        <ul>{this.generateBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
