import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  displayBookList = () => {
    return this.props.sendBookData.map((book, index) => {
      return <Book key={index} {...book} favoriteBook={this.props.handleClick}/>
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook}/>
        <ul>{this.displayBookList()}</ul>
      </div>
    );
  }
}

export default BookList;
