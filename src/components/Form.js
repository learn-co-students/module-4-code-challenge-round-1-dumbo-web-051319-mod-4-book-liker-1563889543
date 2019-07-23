import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img:''
  }

  handleChange = () => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit =(book) => {

    const newBook = {
      title: book.title,
      author: book.author,
      img: book.img
    }

    addABook(newBook);
  }
  render() {
    return (
      {<div>
        <h1>Enter a new book</h1>
        <form onSubmit={this.handleSubmit}>
          <input type=text name=title value={this.state.title}  onChange={this.handleChange}/>
          <input type=text name=author value={this.state.author}  onChange={this.handleChange}/>
          <input type=text name=img value={this.state.img}  onChange={this.handleChange}/>
          <button type=submit>Submit</button>
        </form>
      </div>}
    )
  }
}

export default Form;
