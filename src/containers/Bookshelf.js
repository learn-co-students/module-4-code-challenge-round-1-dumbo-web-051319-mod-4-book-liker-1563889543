import React, { Component } from "react";
import Book from "../components/Book";

class Bookshelf extends Component {

  makeBookComponents = () => {
    return this.props.books.map(book => {
      return <Book key={book.id} book={book} handleBookClick={this.props.handleBookClick}/>
    })
  }

  render() {
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{this.makeBookComponents()}</ul>
      </div>
    );
  }
}

export default Bookshelf;
