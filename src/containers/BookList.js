import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    console.log(this.props.handleBookSubmit);
    // debugger
    const allBooks = this.props.books.map(book => {
      return <Book book={book} key={book.id} bookClickHandler={()=>this.props.bookClickHandler(book)}/>
    })
    // console.log("it me all books")
    // console.log(allBooks)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form bookClickHandler={this.props.bookClickHandler}
        handleBookSubmit={this.props.handleBookSubmit}/>
        <ul>{allBooks}</ul>
      </div>
    );
  }
}

export default BookList;
