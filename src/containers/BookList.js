import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  makeBooks = () => {
    return this.props.data.map(book => <Book key={book.id} data={book} handleClick={this.props.addBook}/>)
  }
  render () {
    return (
      <div>
        <Form makeBook={this.props.makeBook}/>
        <h1>Book Shelf</h1>
        <ul>{this.makeBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
