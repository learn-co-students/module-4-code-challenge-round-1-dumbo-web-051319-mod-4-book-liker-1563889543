import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul><li>{this.props.title}, {this.props.img}</li></ul>
    </div>
  );
};

export default Bookshelf;
