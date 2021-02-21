import React from 'react';
import '../styles/styles.css';
import {FaGithub,FaTwitter,FaLinkedinIn} from 'react-icons/fa';

export default class SocialMedia extends React.Component {
    render() {
        return (
            <div id="topnav-social-container" style={this.props.style}>
            <a href="#1" className="topnav-social hvr-shutter-out-vertical-square">
            <FaGithub />
            </a>
            <a href="https://www.twitter.com" className="topnav-social hvr-shutter-out-vertical-square">
            <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" className="topnav-social hvr-shutter-out-vertical-square">
            <FaLinkedinIn/>
            </a>
            </div>
        );
    }
}