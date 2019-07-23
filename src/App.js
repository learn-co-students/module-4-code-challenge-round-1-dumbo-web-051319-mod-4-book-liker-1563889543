import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state ={
    bookList: []
  }

  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(res => res.json())
    .then(bookData => this.setState({bookList: bookData}) )

  }


  render() {

    return (
      <div className="book-container">
        <BookList booklist={this.state.bookList} />
        <Bookshelf />
      </div>
    );
  }
}

export default App;
