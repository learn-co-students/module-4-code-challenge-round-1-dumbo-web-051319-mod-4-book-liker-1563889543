import React from "react";

class Form extends React.Component {

  state = {
    author: "",
    img: "",
    title: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewBookToTheList(this.state)
  }
  
  
  render() {
    // console.log(this.state)
      return (
        <form onSubmit={this.handleSubmit}>
          
          <input type='text' value={this.state.author} name='author' onChange={this.handleChange} placeholder='author' />
          <input type='text' value={this.state.img} name='img' onChange={this.handleChange} placeholder='Image' />
          <input type='text' value={this.state.title} name='title' onChange={this.handleChange} placeholder='Title' />
          <input type="submit" value="Submit" />
        </form>
      );
  }
}

export default Form;
