import React from "react";

const Book = props => {

  return (
    <div onClick={props.clickHandler}>
      <h2>{props.title}</h2>
      <img src={props.img} alt="" />
    </div>
  );
};

export default Book;
