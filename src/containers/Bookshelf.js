import React from "react";
import Book from "../components/Book";


class Bookshelf extends React.Component {

addBook= () => {

  return this.props.book.map(singleBook=> {
    return <Book
    className= 'addedBook'
    handleRemove={this.props.handleRemove}
    key={singleBook.id}
    data={singleBook}/>
  })
}

render(){

  return(
    <div>
      <h1>Book Shelf</h1>
      <ul>
      {this.addBook()}
      </ul>
    </div>
  );
}};

export default Bookshelf;
