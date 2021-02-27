import React from 'react';
import '../styles/topnav.css';
import {FaSun, FaMoon} from 'react-icons/fa'

export default class DarkLightMode extends React.Component {
    render() {
        return (
            <>
            <div id="dark-light-button" onClick={this.props.changeMode} style={this.props.style} className="topnav-social hvr-shutter-out-vertical-square">
                {this.props.darkMode? <FaSun/> : <FaMoon/>}
            </div>
          </> 
        );
    }
};