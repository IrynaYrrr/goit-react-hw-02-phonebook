import React, { Component } from "react";

export class Filter extends Component {

  handleChange = evt => {
    const { value } = evt.target;
    this.props.onChange(value);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          placeholder="enter name"
          name="filter"
          onChange={this.handleChange}
        />
      </label>
    )
  }
}
