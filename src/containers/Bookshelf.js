import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.booksOnShelf.map(book => <li key={book.id}><Book {...book} clickHandler={props.removeFromShelf}/></li>)}</ul>
    </div>
  );
};

export default Bookshelf;
