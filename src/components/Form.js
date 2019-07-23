import React from "react";

class Form extends React.Component {
  render() {
    return (
      <h1>
        <form action="index.html" method="post" onSubmit={event => this.props.addBooks(event)}>
          <input type="text" name="title" value={this.props.title} onChange={this.props.onInputChange} placeholder="Title"/>
          <input type="text" name="author" value={this.props.author} onChange={this.props.onInputChange} placeholder="Author"/>
          <input type="text" name="img" value={this.props.img} onChange={this.props.onInputChange} placeholder="Img"/>
          <input type="submit" value="Subimt"/>
        </form>
      </h1>
    )
  }
}

export default Form;
