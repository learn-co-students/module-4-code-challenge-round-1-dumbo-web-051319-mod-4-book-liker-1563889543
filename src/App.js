import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: [],
    newBook: ''
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
      .then(response => response.json())
      .then(bookData => {
        this.setState({
          books: bookData
        })
      })
  }

  favoriteBook = (faveBook) => {
    // console.log('it click')
    // console.log(faveBook)
    this.setState({
      bookShelf: [...this.state.bookShelf, faveBook]
    })
  }

  removeBook = (props) => {
    console.log('it click')
  }

  addBook = (bookObject) => {
      // console.log('changing')
      // console.log(bookObject)

      this.setState({
        books: [bookObject, ...this.state.books]   //LOL it adds all my changes to the books array
      })
  }


  render() {
    return (
      <div className="book-container">
        <BookList addBook={this.addBook} sendBookData={this.state.books} handleClick={this.favoriteBook}/>
        <Bookshelf displayBookShelf={this.state.bookShelf} handleClick={this.removeBook}/>
      </div>
    );
  }
}

export default App;

//NEED TO CHECK OUT: https://goshakkk.name/array-form-inputs/
//UGH LORENA why put a newBook in state and not use it in the addBook fn. poop
