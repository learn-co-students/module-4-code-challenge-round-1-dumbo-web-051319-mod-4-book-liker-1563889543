import React from "react";

class Form extends React.Component {

  state={
    bookName: '',
    bookImg: ''
  }


  handleChange = () => {
    // callback from above?
    this.setState({bookName: this.props.value}, console.log(this.state.bookName))
  }
  handleImg =() => {
    // call back function is needed to send this back up for handleImg?
    this.setState({bookImg: this.props.value}, console.log(this.state.bookImg))
  }
  handleSubmit =(event) => {
    event.preventDefault()
  }

  render() {
    console.log(this.props.newBook)


    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Book Name:
          <input type="text" value={this.props.value} onChange={this.handleChange} />
        </label>
        <label>
          Book Img:
          <input type="text" value={this.props.value} onChange={this.handleImg} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    )
  }
}

export default Form;
