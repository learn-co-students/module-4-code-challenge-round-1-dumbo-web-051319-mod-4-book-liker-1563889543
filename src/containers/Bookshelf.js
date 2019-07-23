import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  console.log("bookshelf")
  const favBooks = props.favoriteBooks.map(book => {
    return <Book book={book} key={book.id}/>
  })

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{favBooks}</ul>
    </div>
  );
};

export default Bookshelf;
