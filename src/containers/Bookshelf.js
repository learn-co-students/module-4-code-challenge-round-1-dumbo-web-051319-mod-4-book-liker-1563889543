import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.chosenBooks.map(bookObj => {
        return <Book handleClick={props.handleClick} book={bookObj}/>
      })}
      </ul>
    </div>
  );
};

export default Bookshelf;
