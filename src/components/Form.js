import React from "react";

class Form extends React.Component {

  state= {
    title: '',
    url:''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleForm(event,this.state.title,this.state.url)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }

  render() {
    return(
  <div>
  <form onSubmit={this.handleSubmit}>

  <h3>Create Book</h3>
  <input
  type="text"
  name="title"
  value={this.state.value}
  placeholder="title"
  onChange= {this.handleChange}/>

  <input
  type="text"
  name="url"
  value={this.state.url}
  placeholder='url'
  onChange= {this.handleChange}/>

  <input type="submit"/>
  </form>
  </div>
  )
  }
}

export default Form;
