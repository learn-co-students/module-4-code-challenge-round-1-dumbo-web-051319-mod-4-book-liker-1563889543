import React from "react";


class Book extends React.Component {
// const Book = props => {


handleClick = () => {
console.log("click")
}




render(){

// const letsMove = this.state.onBookList ? this.state.

  return (
    <div>
      <h2>{this.props.title}</h2>
      <img onClick={this.handleClick} src={this.props.img}/>
    </div>
    );
  };
}

export default Book;
