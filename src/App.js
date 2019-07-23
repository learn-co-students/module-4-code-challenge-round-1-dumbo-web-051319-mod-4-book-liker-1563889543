import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [
      {
   "id": 0,
   "title": "",
   "author": "",
   "img": ""
      }
    ],
    bookShelf:     [{
     "id": 0,
     "title": "",
     "author": "",
     "img": ""
   }]
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(res => res.json())
        .then(json => this.setState({books: json}))
  }

  render() {
    return (
      <div className="book-container" >
        <BookList books={this.state.books} addBookToShelf={this.addBookToShelf} />
        <Bookshelf bookShelf={this.state.bookShelf} addBookToShelf={this.addBookToShelf} removeFromShelf={this.removeFromShelf}/>
      </div>
    );
  }

  addBookToShelf = (book) =>   {
    this.setState({bookShelf: [...this.state.bookShelf, book]})
  }

  removeFromShelf = (book) => {
    let newShelf = [...this.state.bookShelf]
    // debugger
    let filtered = newShelf.filter((bookOnShelf) => {
      // console.log(book)
      // debugger
      return book.title != bookOnShelf.title
    })
      // console.log(this.state.book)
      this.setState({bookShelf: filtered})
      // debugger
  }

}

export default App;
