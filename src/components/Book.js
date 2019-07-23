import React from "react";

class Book extends React.Component {

  handleClick = (e) => {
    this.props.onBookClick(e)
  }

  render() {

  return (
    <div className="book">
      <h2>{this.props.title}</h2>
      <img src={this.props.img} alt="oh no" id={this.props.id ? this.props.id : "temp"} onClick={this.handleClick}/>
    </div>
  )}
};

export default Book;
