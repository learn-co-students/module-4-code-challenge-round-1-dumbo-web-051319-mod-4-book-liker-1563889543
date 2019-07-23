import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    bookList: [],
    bookAdd:[]
  }

  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(res => res.json())
    .then(bookData => {
      this.setState({bookList: bookData})
    })
  }

  handleBookAdd =(book)=>{
    console.log(this.state);
    this.setState({bookAdd: [...this.state.bookAdd, book]})
  }

  // removeBook= (bookId)=>{
  //   this.setState
  //   // console.log(bookId);
  //   // const bookShelfArray = this.state.bookAdd.map(book => {
  //   //   if (book.id == bookId){
  //   //
  //   //   }
  //   // })
  //
  // }

  render() {
    // console.log(this.state);
    return (
      <div className="book-container">
        <BookList bookList={this.state.bookList} bookAdd={this.handleBookAdd}/>
        <Bookshelf bookAdd={this.state.bookAdd} />
      </div>
    );
  }
}

export default App;
// removeBook={this.removeBook}
