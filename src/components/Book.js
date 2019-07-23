import React from "react";

const Book = props => {
  return (
    <div onClick={event => (props.handleClick(event, props.data))}>
      <h2>{props.data.title}</h2>
      <img src={props.data.img} alt={props.data.title}/>
    </div>
  );
};

export default Book;
