import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    booksOnShelf: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books').then(resp => resp.json()).then(books => this.setState({ books }))
  }

  handleClick = e => {
    const selectedBook = e.target.parentNode.firstChild.innerText;
    e.target.parentNode.parentNode.parentNode.parentNode.className === 'book-list' ? (
      this.setState({
        booksOnShelf: [...this.state.booksOnShelf, this.state.books.find(book => book.title === selectedBook)]
      })) : (
        this.setState({
          booksOnShelf: this.state.booksOnShelf.splice(this.state.booksOnShelf.indexOf(this.state.booksOnShelf.find(book => book.title === selectedBook), 1))
        })
      )
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addToShelf={this.handleClick}/>
        <Bookshelf booksOnShelf={this.state.booksOnShelf} removeFromShelf={this.handleClick}/>
      </div>
    );
  }
}

export default App;
