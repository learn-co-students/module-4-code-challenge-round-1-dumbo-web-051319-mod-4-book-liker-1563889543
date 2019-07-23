import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const generateBooks = () => {
    return props.bookshelf.map((book,i) => {
      return <Book key={i} {...book} onBookClick={props.onBookClick}/>
      })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{generateBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
