import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state={
    data: [],
    book: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(rsp => rsp.json())
    .then(data => this.setState({data:data}))
  }

  handleAdd = (data) => {
    this.setState({
      book: [...this.state.book, data]
    })
  }

  arrayRemove= (arr, value)=> {
   return arr.filter(
     (ele) => {return ele === value;});
}

  handleRemove =(data) => {
    const id = data.id
    const removedBookArray = this.arrayRemove(this.state.book, id)
    this.setState({
      book: removedBookArray
    })
  }

  handleForm = (event,title,url) => {
    
  }

  render() {
    return (
      <div className="book-container">
        <BookList
        data={this.state.data} handleAdd={this.handleAdd}
        handleForm={this.handleForm}/>

        <Bookshelf
        data={this.state.data} book={this.state.book}
        handleRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
