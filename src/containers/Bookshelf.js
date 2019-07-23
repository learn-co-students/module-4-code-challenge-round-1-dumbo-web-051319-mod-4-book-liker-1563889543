import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {



////cant pass data from sibling to sibling so have to move function up!
handleBookMove = () => {

}

  render() {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{this.state}</ul>
    </div>
    );
  };
}

export default Bookshelf;
