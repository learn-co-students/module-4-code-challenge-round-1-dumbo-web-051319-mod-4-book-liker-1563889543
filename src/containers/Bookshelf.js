import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  console.log(props);
  const mapOverbooks = () => {
    return props.data.map((book) => <Book deleteBookFromShelf={props.deleteBookFromShelf} book={book}/>)
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{mapOverbooks()}</ul>
    </div>
  );
};

export default Bookshelf;
