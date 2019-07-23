import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  render(){
    const bookInShelf = this.props.bookAdd.map((oneBook, i) => {
        return <Book key={oneBook.id} {...oneBook}/>
    })
    // return bookInShelf

    // removeBook =()=>{
    //
    //
    // }

    // console.log(this.props.bookAdd);
  return (
    <div onClick = {this.removeBook}>

      <h1>Book Shelf</h1>
      <ul>{bookInShelf}</ul>
    </div>
    );
  }
};

export default Bookshelf;
