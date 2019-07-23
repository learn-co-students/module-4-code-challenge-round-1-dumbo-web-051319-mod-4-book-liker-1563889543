import React from "react";

class Book extends React.Component {
  
  handleClick = (e) => {
    this.props.addBookToShef(this.props.book)
    // console.log()
    //   this.props.deleteBookFromShelf(this.props.book)
  }
  
  // mouthOverHandler = (e) => {
  // }
  
  render() {
    console.log(this.props);
    

    return (
      <div onMouseOver={this.mouthOverHandler} onClick={this.handleClick}>
        <h2>{this.props.book.title}</h2>
        <img src={this.props.book.img}></img>
      </div>
    );
  }
};

export default Book;
