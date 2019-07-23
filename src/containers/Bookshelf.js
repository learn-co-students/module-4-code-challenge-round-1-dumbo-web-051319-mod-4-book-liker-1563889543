// import React from "react";
import React, { Component } from 'react';
import Book from "../components/Book";

// const Bookshelf = props => {

//   const displaySelectedBooks = this.props.selectedBooks.map(book => { 
//     return (
//       <div key={book.id} onClick={this.handleClick} id={book.id}>
//         <li> {book.title}</li>
//         <img src={book.img}/>
//       </div>
//   )}
//   )


//   return (
//     <div>
//       <h1>Book Shelf</h1>
//       <ul>{displaySelectedBooks}</ul>
//     </div>
//   );
// };

// export default Bookshelf;

class Bookshelf extends Component {

  handleRemove =(event) =>{
    
    let bookid = parseInt(event.target.parentElement.id)
    this.props.removeOneBook(bookid)
  } 

  render() { 
    
    const displaySelectedBooks = this.props.selectedBooks.map(book => { 
    return (
      <div key={book.id} onClick={this.handleRemove} id={book.id}>
        <h2> {book.title}</h2>
        <img src={book.img}/>
      </div>
  )}
  )

    return (  
      <div>
      <h1>Book Shelf</h1>
      <ul>{displaySelectedBooks}</ul>
    </div>
    );
  }
}
 
export default Bookshelf;
