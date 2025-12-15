//These are the reusable buttons that will update grid size
import React, { Component } from "react";
import './ControlButton.css';

class ControlButton extends Component {
  render() {
    const { label, onClick, isPrimary, disabled } = this.props;
    return (
      <button 
        className={`control-button ${isPrimary ? 'primary' : ''}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
}

export default ControlButton;