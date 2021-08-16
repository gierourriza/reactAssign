import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./css/Destination.css";
class Destination extends Component {
    render() {
        return (
            <div  id="selectdestination" className="destination">
                <div className="selectPlace">
                    <h1>DESTINATION</h1>
                        <Link to="/cebu"><h3>Cebu</h3></Link>
                        <Link to="/bohol"><h3>Bohol</h3></Link>
                        <Link to="/subic"><h3>Subic</h3></Link>
                        <Link to="/sur"><h3>Ilocos Sur</h3></Link>
                        <Link to="/norte"><h3>Ilocos Norte</h3></Link>
                </div>
            </div>
        );
    };
};
export default Destination;