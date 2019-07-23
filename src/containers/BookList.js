import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  render() {

    const displayBooks = this.props.books.map(book => 
      <Book {...book} key={book.id} handleClickedBooks={this.props.handleClickedBooks} />
    )

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addABook={this.props.addABook}/>
        <ul>{displayBooks}</ul>
      </div>
    );
  }
}

export default BookList;
