import React from "react";

class Form extends React.Component {

  state = {
    name: '',
    image: ''
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  handleImageChange = event => {
    this.setState({
      image: event.target.value,
    });
  }

  handleSubmt = event => {
    event.preventDefault()
    this.setState = ({
      name: event.target.name.value,
      image: event.target.name.value
    })

  }

  render() {
    return(
    <form onSubmit={event => this.handleSubmit(event)}>
    <label> Enter Name: </label>
    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />

    <label> Enter Image Link: </label>
    <input type="text" name="image" value={this.state.image} onChange={this.handleImageChange} />

    <button onSubmit ={this.handleSubmit}> Submit </button>
    </form>
    )
  }
}

export default Form;
