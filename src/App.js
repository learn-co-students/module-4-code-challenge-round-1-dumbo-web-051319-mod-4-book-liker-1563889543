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
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(bookJson => this.setState({
      books: bookJson
    }))
  }

  addToBookShelf = (book) => {
    this.setState({
      bookshelf: [...this.state.bookshelf, book]
    })
  }

  removeFromBookShelf = (deletedBook) => {
    let x = 0
    x = this.state.bookshelf.findIndex(book => {
      return book.id === deletedBook.id
    })

    let arr = []
    arr = this.state.bookshelf
    arr.splice(x, 1)

    this.setState({
      bookshelf: arr
    })
  }

  addToBookLibrary = (newBook) => {
    // let x = 0
    // x = this.state.books.findIndex(book => {
    //   return book.id === newBook.id
    // })
    // if(x !== 0)

    newBook["id"] = this.state.books.length + 1
    this.setState({
      books: [...this.state.books, newBook]
    })
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleBookClick={this.addToBookShelf} addBookHandler={this.addToBookLibrary}/>
        <Bookshelf books={this.state.bookshelf} handleBookClick={this.removeFromBookShelf}/>
      </div>
    );
  }
}

export default App;
