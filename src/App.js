import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import { runInThisContext } from "vm";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount = () => {
    fetch(`http://localhost:3005/books`)
    .then(res => res.json())
    .then(jsonBooks => this.setState({ books: jsonBooks}))
  }

  handleClick = (bookObj) => {
    if (!this.state.bookShelf.includes(bookObj)) {
      this.setState({ bookShelf: [bookObj, ...this.state.bookShelf]})
    }
  }

  handleNewBook = (bookObj) => {
    let newBook = {
      title: bookObj.title,
      img: bookObj.img, 
      author: bookObj.author
    }
    this.setState({
      books: [newBook, ...this.state.books]
    })
  }

  removeBook = (bookObj) => {
    // need the index of the bookObj to splice the bookObj out..//
    let shelfArray = [...this.state.bookShelf]
    let book = shelfArray.find(book => book === bookObj)
    let index = shelfArray.indexOf(book)
    shelfArray.splice(index, 1)

    this.setState({ bookShelf: shelfArray })
  }

  render() {
    return (
      <div className="book-container">
        <BookList handleNewBook={this.handleNewBook} handleClick={this.handleClick} books={this.state.books} />
        <Bookshelf handleClick={this.removeBook} chosenBooks={this.state.bookShelf}/>
      </div>
    );
  }
}

export default App;
