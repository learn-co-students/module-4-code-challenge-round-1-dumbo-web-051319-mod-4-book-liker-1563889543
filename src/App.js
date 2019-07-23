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
        <Bookshelf bookShelf={this.state.bookShelf} addBookToShelf={this.addBookToShelf}/>
      </div>
    );
  }

  addBookToShelf = (book) =>   {
    this.setState({bookShelf: [...this.state.bookShelf, book]})
  }
}

export default App;
