import React, { Component } from "react";
import logo from "../assets/quilt_logo.png";

class Header extends Component {
    //static props = {}
        //no props needed just going to display our logo
    render() {
        return (
        <header className="header-fluid">
            <img
                src={logo}
                alt="Recyclable Quilt Logo"
                className="logo-fluid"
            />
        </header>
    );
  }
}

export default Header;
