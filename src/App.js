import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    favoriteBooks: []
  }

   bookClickHandler = (book) => {
     // debugger /
     this.setState({
       favoriteBooks: [...this.state.favoriteBooks, book]
     })
  }

  handleBookSubmit = (e) => {
    e.preventDefault()
    console.log("it me handleBookSubmit")

  }

 //  bookClickHandler = (book) => {
 //    // debugger
 //    if (event.target.parentElement.parentElement.parentElement.className === "book-list"){
 //    this.setState({
 //      favoriteBooks: [...this.state.favoriteBooks, book]
 //    })}
 // }

componentDidMount(){
  fetch("http://localhost:3005/books")
  .then(res => res.json())
  .then(bookJsonData => this.setState({
    books: bookJsonData
  }))
}

  render() {
    console.log(this.state)
    return (
      <div className="book-container">
        <BookList books={this.state.books}
       bookClickHandler={this.bookClickHandler}
       handleBookSubmit={this.handleBookSubmit}/>

        <Bookshelf favoriteBooks={this.state.favoriteBooks}
        bookClickHandler={this.bookClickHandler} />
      </div>
    );
  }
}

export default App;
