import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state={
    books: [],
    selectedBooks: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(books => this.setState({ books: books }))
  }

  handleClickedBooks = (bookid) => {
    const clickedBook = this.state.books.find(book => book.id === bookid)
    console.log(clickedBook)

    const updatedSelectedBooks = [...this.state.selectedBooks, clickedBook]
    console.log(updatedSelectedBooks)

    this.setState({ selectedBooks: updatedSelectedBooks });
  }

  removeOneBook = (bookid) => {
    const updatedSelectedBooks = this.state.selectedBooks.filter(book => book.id !== bookid)
    this.setState({ selectedBooks: updatedSelectedBooks });
  }

  addABook = (newBook) => {
    const updatedBooks = [...this.state.books, newBook]
    this.setState({ books:updatedBooks  });
  }

  render() {
    console.log("this is the books from fetch", this.state.books)
    
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClickedBooks={this.handleClickedBooks} addABook={this.addABook}/>
        <Bookshelf selectedBooks={this.state.selectedBooks} removeOneBook={this.removeOneBook} />
      </div>
    );
  }
}

export default App;
