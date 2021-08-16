import React, { Component } from 'react';
import "./css/Navbar.css";
class Navbar extends Component {
    render() {
        return (
            <div id="home" className="container">
                <div className="logo">
                    <span>BYAHERO <i className="bicycle icon"/></span>
                    <div className="selection">
                        <a href="#home"><button id="home">Home</button></a>
                        <a href="#selectdestination"><button id="destination">Destinations</button></a>
                        <a href="#myAdventure"><button id="photos">Photos</button></a>
                    </div>
                </div>
            </div>
        );
    };
};
export default Navbar;