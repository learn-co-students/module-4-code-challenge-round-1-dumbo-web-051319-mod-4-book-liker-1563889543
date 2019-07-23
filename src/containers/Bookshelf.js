import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {
  // console.log("from bookshelf", props.displayBookShelf)


  return (
    <div>
      <h1>Book Shelf</h1>
        <ul>
            {props.displayBookShelf.map((book) => {
              return <Book
                    key={book.id}
                    title={book.title}
                    cover={book.img}/>})}
        </ul>
    </div>
  );
};

export default Bookshelf;

// DISPLAYING COVER IMAGE
// I know I need img src={book.img}, but I'm not quite sure how to render it within a list T-T
// Tried:   const cover = () => {
  //   return <img src={props.displayBookShelf.img} alt='bookcover'/>
  // }


// ITS BREAKING MY CODE. Get to you later. onClick={() => props.handleClick(props)}
