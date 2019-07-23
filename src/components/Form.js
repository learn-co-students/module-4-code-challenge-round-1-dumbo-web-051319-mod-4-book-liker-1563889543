import React from "react";
import { runInThisContext } from "vm";

class Form extends React.Component {

  state = {
    title: "",
    img: "",
    author: ""
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  createBook = (e) => {
    e.preventDefault()
    this.props.handleNewBook(this.state)
  }

  render() {
    return <h1>
      <form onSubmit={this.createBook}>
        <input type="text" value={this.state.title} name="title" placeholder="title" onChange={this.handleChange} />
        <input type="text" value={this.state.author} name="author" placeholder="author" onChange={this.handleChange} />
        <input type="text" value={this.state.img} name="img" placeholder="image" onChange={this.handleChange}/>
        
        <input type="submit" value="Submit" />
      </form>
    </h1>;
  }
}

export default Form;
