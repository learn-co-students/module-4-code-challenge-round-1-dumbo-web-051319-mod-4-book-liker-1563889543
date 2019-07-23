import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {


  function renderBookShelf(props) {
    let booksForShelf = props.bookShelf.map((book, idx) => {
        return <Book data={book} key={book.id} addBookToShelf={props.addBookToShelf}/>
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
