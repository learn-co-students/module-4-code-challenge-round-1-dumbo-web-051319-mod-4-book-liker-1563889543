import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";


class App extends Component {

  state = {
    mybooklist:[],
    mybookshelf:[]
  }


  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then (response => response.json())
    .then (bookData => this.setState ({
      mybooklist:bookData
    }));
  }




  // onClick(e){
  // const newBookShelf =
  //    this.setState({
  //      mybookshelf: {
  //           title:book.title
  //           img:book.img
  //           }
  //    })
  //  }

  render() {
    return (
      <div className="book-container">
        <BookList book={this.state.mybooklist}/>
        <Bookshelf bookshelf={this.state.mybookshelf}/>
      </div>
    );
  }
}

export default App;
