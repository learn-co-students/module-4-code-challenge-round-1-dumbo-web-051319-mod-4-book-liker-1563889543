import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  mapOverbooks = () => {
    return this.props.data.map((book) => <Book addBookToShef={this.props.addBookToShef} book={book}/>)
  }

  render() {
    // console.log(this.mapOverbooks())
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addNewBookToTheList={this.props.addNewBookToTheList} />
        <ul>{this.mapOverbooks()}</ul>
      </div>
    );
  }
}

export default BookList;
