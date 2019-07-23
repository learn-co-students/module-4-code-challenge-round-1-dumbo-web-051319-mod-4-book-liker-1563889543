import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const listOfBooks = this.props.booklist
    let indivBook =   listOfBooks.map(book =>
        <li key={book.id} >
            <h1>{book.title}</h1>
            <img src={book.img} />
        </li>
      )

    return (

      <div className="book-list">
        <h1>Book List</h1>
        <Form newBook={this.props}/>
        <ul>{
          indivBook
          }
        </ul>
      </div>
    );
  }
}

export default BookList;
