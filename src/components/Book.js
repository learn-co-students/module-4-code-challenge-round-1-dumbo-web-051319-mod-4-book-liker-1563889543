import React from "react";

const Book = (props) => {

  return (
    <div onClick={() => {props.favoriteBook(props)}}>
      <h2>{props.title}</h2>
      <img src={props.img} alt='bookcover'/>
    </div>
  );
};

export default Book;
