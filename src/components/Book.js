import React from "react";

class Book extends React.Component {
// state={
//   addBook: ''
// }

oneBookClick=()=>{
  this.props.bookAdd(this.props)
}


render() {
  return (
    <div onClick= {this.oneBookClick}>
      <h2>{this.props.title}</h2>
      <img src={this.props.img}/>
    </div>
  );
  }
}

export default Book;
