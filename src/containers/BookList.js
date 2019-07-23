import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  state = {
    title: "",
    author: "",
    img: ""
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    if (event.target.name === "title") {
      this.setState({title: event.target.value})
    } else if (event.target.name === "author") {
      this.setState({author: event.target.value})
    } else if (event.target.name === "img") {
      this.setState({img: event.target.value})
    }

  }

  genBooks = () => {
    return this.props.books.map(book => <Book key={book.title} bookData={book} own="false" onChange={this.state} addNDeleteBook={this.props.addNDeleteBook} onInputChange={this.onInputChange}/>)
  }
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBooks={this.props.addBooks}/>
        <ul>{this.genBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
