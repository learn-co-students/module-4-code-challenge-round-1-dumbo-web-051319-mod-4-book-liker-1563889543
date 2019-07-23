import React from "react";


class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
    // console.log(e.target.value)
  }



  render() {
    return <form onSubmit={this.props.handleBookSubmit}>
    <h4>Add A Book! 📚</h4>
    <label>Title:
    <input
    name="title"
    type="text"
    value={this.state.title} onChange={this.handleChange}
        />
    </label>
    <br />
    <label>Author:
    <input type="text"
    name="author"
    value={this.state.author}
    onChange={this.handleChange}
    />
    </label>
    <br />
    <label>ImgURL:
    <input type="text"
    name="img"
    value={this.state.img}
    onChange={this.handleChange}
    /></label>
    <input type="submit" value="Submit" />
    </form>
    ;
  }
}

export default Form;
