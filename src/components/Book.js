import React, { Component } from "react";


class Book extends Component {

  handleClick = () => {
    this.props.handleBookClick(this.props.book);
  }

  render(){
    return (
      <div onClick={this.handleClick}>
      <h2>{this.props.book.title}</h2>
      <img src={this.props.book.img} alt="book img" />
      </div>
    );
  }
};

export default Book;
