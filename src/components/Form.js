import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.makeBook(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Make A Book!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder="title" name="title" value={this.state.title}/>
          <input type="text"  onChange={this.handleChange} placeholder="author" name="author" value={this.state.author}/>
          <input type="text" onChange={this.handleChange} placeholder="image url" name="img" value={this.state.img}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Form;
