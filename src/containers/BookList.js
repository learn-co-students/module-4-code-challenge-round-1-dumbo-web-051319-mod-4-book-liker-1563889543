import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  displayBooks = () => {
    return this.props.books.map(bookObj => {
      return <Book 
        book={bookObj}
        key={bookObj.id}
        handleClick={this.props.handleClick}
      />
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleNewBook={this.props.handleNewBook}/>
        <ul>{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
