import React from "react";

class Form extends React.Component {

  state = {
    id: 'temp',
    title: '',
    author: '',
    img: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onNewBook(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      })
  }

  generateForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange}/>
      <input type="text" name="author" placeholder="author" value={this.state.author} onChange={this.handleChange}/>
      <input type="text" name="img" placeholder="image url" value={this.state.img} onChange={this.handleChange}/>
      <input type="submit" value="Submit" />
      </form>
      )
  }

  render() {
    return <h1>{this.generateForm()}</h1>;
  }
}

export default Form;
