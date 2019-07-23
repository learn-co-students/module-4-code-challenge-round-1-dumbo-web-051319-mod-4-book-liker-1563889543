import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

handleSubmit = (e) => {
  e.preventDefault()
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
  this.props.addBook(this.state)
}
  render() {
    return <div onSubmit={this.handleSubmit}>
              <input type="text" placeholder="title" name="title" onChange={this.handleChange} value={this.state.title}/>
              <input type="text" placeholder="author" name="author" onChange={this.handleChange} value={this.state.author}/>
              <input type="text" placeholder="img" name="img" onChange={this.handleChange} value={this.state.img}/>
              <input type="submit" />
          </div>;
  }
}

export default Form;
