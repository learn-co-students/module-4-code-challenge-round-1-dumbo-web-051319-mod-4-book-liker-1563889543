import React from "react";


const Book = props => {


  // console.log("one book")
  // console.log(props)
  return (
    <div onClick={props.bookClickHandler}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} />
    </div>
  );
};

export default Book;
