import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let makeBooks = () => {
    return props.data.map(book => <Book key={book.id} data={book} handleClick={props.takeAwayBook}/>)
  }
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{makeBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
