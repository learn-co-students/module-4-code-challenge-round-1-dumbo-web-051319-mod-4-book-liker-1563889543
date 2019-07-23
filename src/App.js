import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    initialBooks: [],
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(jsonBooks =>
      this.setState({initialBooks: jsonBooks})
    )
  }

  render() {
    return (
      <div className="book-container">
        <BookList initialBooks= {this.state.initialBooks}/>
        <Bookshelf />
      </div>
    );
  }
}

export default App;

// My data wouldn't load
