import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {


  function renderBookShelf(props) {
    let booksForShelf = props.bookShelf.map((book, idx) => {
        // debugger
        return <Book data={book} key={idx} addBookToShelf={props.addBookToShelf} removeFromShelf={props.removeFromShelf}/>
      })
      // debugger
      return booksForShelf
    }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBookShelf(props)}</ul>
    </div>
  );
};

export default Bookshelf;
