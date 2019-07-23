import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelf: []
  }


  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(res => res.json())
      .then((booksJson) => this.setState({
        books: booksJson
      }))
  }

  addNewBookToTheList = (newBook) => {
    console.log(newBook);
    this.setState({
      books: [...this.state.books, newBook]
    })
    
  }

  addBookToShef = (book) => {
    // console.log(book)

    // this.state.shelf.filter(singleBook => singleBook.title === book.title )

    this.setState({
      shelf: [...this.state.shelf, book]
    })
  }

  deleteBookFromShelf = (book) => {
    console.log(book);
    this.setState({
      shelf: delete this.state.shlef[book]
    })
  }

  render() {
    // console.log(this.state.shelf)
    return (
      <div className="book-container">
        <BookList addBookToShef={this.addBookToShef} addNewBookToTheList={this.addNewBookToTheList} data={this.state.books}/>
        <Bookshelf deleteBookFromShelf={this.deleteBookFromShelf} data={this.state.shelf}/>
      </div>
    );
  }
}

export default App;
