
import React, { Component } from "react";
import logo from "..assets/quilt_logo.png";

class Header extends Component {
    //static props = {}
        //no props needed just going to display our logo
    render() {
        return (
        <header style={{
            backgroundColor: '#1E1E1E',
            padding: '20px',
            textAlign: 'center',
            display: "flex",
            
        }}>
            <img
            src={logo}
            alt="Recyclable Quilt Logo"
            style={{
                height: "auto", // adjust size as needed
                width: "auto",
            }}
        />
        </header>
        );
    }
    }
export default Header;

