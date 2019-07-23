import React, { Component } from "react";
import Book from "../components/Book";

class Bookshelf extends Component {

  genBooks = () => {
    return this.props.ownedbooks.map(book => <Book key={"my book" + book.title} bookData={book} own="true" addNDeleteBook={this.props.addNDeleteBook} />)
  }



  render(){
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{this.genBooks()}</ul>
      </div>
    );
  }
};

export default Bookshelf;
