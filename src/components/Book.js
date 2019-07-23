import React from "react";

const Book = props => {
  // debugger
  function handleClick (e) {
    let book = {
      title: e.target.parentElement.firstChild.innerText,
      author: e.target.parentElement.id,
      img: e.target.src
    }
    let container = e.target.parentElement.parentElement.parentElement.firstChild.innerText
    if(container === "Book Shelf") {
      // debugger
      props.removeFromShelf(book)
    } else {
      props.addBookToShelf(book)
    }
  }

  return (
    <div id={props.data.author}>
      <h2>{props.data.title}</h2>
      <img alt={props.data.title} src={props.data.img} onClick={handleClick}/>
    </div>
  );
};

export default Book;
