// input controls if setting grid before 
import React, { Component } from "react";

class DimensionInput extends Component {

    handleChange = (e) => {
        const value = parseInte(e.target.value) || 0;
        this.props.onChange(value);
    }
  render() {
    return (
      <input
        type="number"
        min="1"
        max="10"
        value={this.props.value || ''}
        onChange={this.handleChange}

      />
    );
  }
}
export default DimensionInput;