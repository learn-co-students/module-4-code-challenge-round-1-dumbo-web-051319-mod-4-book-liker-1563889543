import React from "react";

class Book extends React.Component {
  conditional = () => {
    if(this.props.className !== 'addedBook'){
      return <button onClick={()=> this.props.handleAdd(this.props.data)}>
      ADD
      </button>
    }
    if(this.props.className === 'addedBook'){
      return <button onClick={() => this.props.handleRemove(this.props.data)}>
      Remove!
      </button>
    }
  }

  render(){
  return (
    <div>

      <h2>{this.props.data.title}</h2>

      {<img src={this.props.data.img} alt='no img'/>}
      <br/>
      {this.conditional()}
    </div>
  );
};
}
export default Book;
