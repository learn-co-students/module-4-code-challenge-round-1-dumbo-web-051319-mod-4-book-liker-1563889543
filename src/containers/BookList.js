import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  displayBooks=()=>{
    return this.props.bookList.map(oneBook => <Book key={oneBook.id} bookAdd={this.props.bookAdd} {...oneBook}/>)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
