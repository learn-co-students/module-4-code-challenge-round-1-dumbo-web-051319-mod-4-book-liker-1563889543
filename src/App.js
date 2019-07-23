import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    allBooks: [],
    myShelf: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allBooks: data
      })
    })
  }

  addBook = (event, data) => {
    if(!this.state.myShelf.includes(data)) {
      this.setState({
        myShelf: [data, ...this.state.myShelf]
      })
    } else {
      alert("📖 You already added this book 📖")
    }
  }

  takeAwayBook = (event, data) => {
    let array = this.state.myShelf
    let newArray = array.filter(book => !(book.id === data.id))
    this.setState({
      myShelf: newArray
    })
  }

  makeBook = (bookObj) => {
    this.setState({
      allBooks: [bookObj, ...this.state.allBooks]
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList makeBook={this.makeBook} data={this.state.allBooks} addBook={this.addBook}/>
        <Bookshelf data={this.state.myShelf} takeAwayBook={this.takeAwayBook}/>
      </div>
    );
  }

}

export default App;
