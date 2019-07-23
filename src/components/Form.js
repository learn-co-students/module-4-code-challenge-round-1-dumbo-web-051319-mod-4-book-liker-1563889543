import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    img: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBookHandler(this.state)
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleImgUrl = (e) => {
    this.setState({
      img: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Add Book</h1>
        <form onSubmit={this.handleSubmit} >
          <label>Title: </label>
          <input onChange={this.handleTitle} type="text" name="title" />
          <label>Img: </label>
          <input onChange={this.handleImgUrl} type="text" name="img" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Form;
