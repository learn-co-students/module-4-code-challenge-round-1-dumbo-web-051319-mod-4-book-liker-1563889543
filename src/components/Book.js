import React from "react";

const Book = props => {
  return (
    <div data-title={props.bookData.title} data-own={props.own} onClick={event => props.addNDeleteBook(event)}>
      <h2>{props.bookData.title}</h2>
      <img src={props.bookData.img} alt={props.bookData.title}/>
    </div>
  );
};

export default Book;
