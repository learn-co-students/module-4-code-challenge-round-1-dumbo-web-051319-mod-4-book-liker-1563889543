import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  constructor(){
    super();
    this.state = {
      img: '',
      title: '',
    };
  }

  fetchBooksList(){
    fetch('http://localhost:3005/books')
    .then(results => {
      return results.json();
      .then(data => {
        let bookInfo = data.results.map(books) => {
          return (
            <div key={books.results}>
            <img src={books.img} />
            <p>{books.title}</p>
            </div>
          )
        }

      })
      this.setState({img: img})
      this.setState({title: title})
    })

  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>
        <li>{this.state.title}, {this.state.img}</li>
      </ul>
    
      </div>
    );
  }
}

export default BookList;
