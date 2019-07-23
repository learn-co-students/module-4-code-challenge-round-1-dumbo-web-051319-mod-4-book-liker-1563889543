import React from "react";

const Book = props => {
  // debugger
  function handleClick (e) {
    let book = {
      title: e.target.parentElement.firstChild.innerText,
      author: e.target.parentElement.id,
      img: e.target.src
    }
    // debugger
    props.addBookToShelf(book)
  }

  return (
    <div id={props.data.author}>
      <h2>{props.data.title}</h2>
      <img alt={props.data.title} src={props.data.img} onClick={handleClick}/>
    </div>
  );
};

export default Book;
