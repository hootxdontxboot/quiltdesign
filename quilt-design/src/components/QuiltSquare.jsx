//Individual Square
import React, { Component } from "react";

class QuiltSquare extends Component{
    render () {
        const {color, size, onClick } = this.props;
        return ( 
            <div
            onClick={onClick}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                border: '3px solid white',
            }}>
            </div>
        )
    }

}
export default QuiltSquare;