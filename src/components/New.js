// create react component with state
import React, { Component } from 'react';

export default class TextForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textLength: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
      textLength: event.target.value.length
    });
  }

  render() {
    return (
      <div className="mb-3 container my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleChange}></textarea>
        <p>{this.state.textLength}</p>
      </div>
    );
  }
}
