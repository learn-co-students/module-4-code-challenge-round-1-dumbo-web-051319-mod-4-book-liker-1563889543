import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [{
            id: 0,
            title: "",
            author: "",
            img: ""
          }],
    ownedBooks: [{
            id: 0,
            title: "",
            author: "",
            img: ""
          }],
  }
  componentDidMount(){
    this.fetchBooks()
      .then(books => this.setState({books: books}))
  }
  fetchBooks = () => {
    return fetch("http://localhost:3005/books")
      .then(rsp => rsp.json())
  }

  addNDeleteBook = (event) => {
    let ownedBooks = [...this.state.ownedBooks]
    let ownedTitles = ownedBooks.map(book => book.title)
    console.log(ownedTitles);
    if (event.currentTarget.dataset.own === "false") {
      const currentBook = this.state.books.find(book => book.title.toString() === event.currentTarget.dataset.title)
      ownedBooks = [...this.state.ownedBooks, currentBook]
      this.setState({ownedBooks: ownedBooks})
    } else if (event.currentTarget.dataset.own === "true"){
      ownedBooks = this.state.ownedBooks.filter(book => book.title.toString() !== event.currentTarget.dataset.title)
      this.setState({ownedBooks: ownedBooks})
    }
  }

  addBooks = (event) => {
    event.preventDefault()
    const addNewBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      img: event.target.img.value
    }
    const currentBookList = [...this.state.books, addNewBook]
    this.setState({books: currentBookList})
  }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addNDeleteBook={this.addNDeleteBook} addBooks={this.addBooks}/>
        <Bookshelf ownedbooks={this.state.ownedBooks} addNDeleteBook={this.addNDeleteBook}/>
      </div>
    );
  }
}

export default App;
