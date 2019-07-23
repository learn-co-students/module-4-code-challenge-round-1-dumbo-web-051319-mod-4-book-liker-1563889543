import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookshelf: []
  }

  componentDidMount() {
    fetch(`http://localhost:3005/books`)
    .then(res => res.json())
    .then(bookData => {
      this.setState({books: bookData})
      })
  }

  handleBookClick = (e) => {
    const bookId = e.target.id
    bookId === "temp" ? this.addToBookshelf(bookId) : this.addToBookshelf(+bookId)
  }

  addToBookshelf = (id) => {
    const existingBook = this.state.bookshelf.find(book => {return book.id === id})
    if(existingBook) {
      this.removeFromBookshelf(existingBook)
    } else {
      const newShelfBook = this.state.books.find(book => {return book.id === id})

      // fetch(`http://localhost:3005/books/${id}`)
      // .then(res => res.json())
      // .then(book => {
        this.setState({bookshelf: [...this.state.bookshelf, newShelfBook]})
        // })
    }
  }

  removeFromBookshelf = (existingBook) => {
    const newBookshelf = this.state.bookshelf.filter(book => {return book !== existingBook})
    this.setState({bookshelf: newBookshelf})
  }

  handleNewBook = (newBook) => {
    this.setState({books: [newBook, ...this.state.books]})
  }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} onBookClick={this.handleBookClick} onNewBook={this.handleNewBook}/>
        <Bookshelf bookshelf={this.state.bookshelf} onBookClick={this.handleBookClick}/>
      </div>
    );
  }
}

export default App;
