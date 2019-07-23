import React from "react";

class Form extends React.Component {

  state = {
      title: "",
      author: "",
      image: ""
  }

  handleSubmit = (e) => {
    // debugger
  }

  // handleChange = (e) => {
  //   // debugger
  //   // let key = e.target.placeholder
  //   // let value = this.state.key + e.target.value
  //   this.setState({
  //       e.target.placeholder: e.target.value
  //     }
  // )
    // debugger
  // }

  render() {
    // debugger
    return (
      <div>
      <h1>Add New Book </h1>;
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.title} onChange={this.handleChange} placeholder="title"/>
        <input value={this.state.author} onChange={this.handleChange} placeholder="author"/>
        <input value={this.state.image} onChange={this.handleChange} placeholder="image"/>
      </form>
      </div>
    )
  }

}

export default Form;
