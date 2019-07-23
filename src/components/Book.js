import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {

  state = {
    clicked: false
  }

  handleClick = (e) => {
    console.log(e.target);
  }

  render () {
    return (
      <div onClick={this.handleClick} >
        <h2>{this.props.title}</h2>
        <img src={this.props.img} alt={this.props.title}></img>
      </div>
    );
  }
}

export default Book;
