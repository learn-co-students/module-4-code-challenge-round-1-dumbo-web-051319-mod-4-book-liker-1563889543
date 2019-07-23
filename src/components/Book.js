// import React from "react";

// const Book = props => {
//   console.log(props)
//   return (
//     <div key={props.id} onClick={this.props.handleClick}>
//       <h2>{props.title}</h2>
//       <img src={props.img} alt="bookpic"/>
//     </div>
//   );
// };

// export default Book;

import React, { Component } from 'react';

class Book extends Component {

  handleClick = () => {
    this.props.handleClickedBooks(this.props.id)
  }

  render() { 
    return (
    <div key={this.props.id} onClick={this.handleClick}>
      <h2>{this.props.title}</h2>
      <img src={this.props.img} alt="bookpic"/>
    </div>
  );
  }
}
 
export default Book;