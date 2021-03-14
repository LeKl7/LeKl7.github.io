import React from 'react';
import '../styles/styles.css';
import {FaGithub,FaTwitter,FaLinkedinIn} from 'react-icons/fa';

export default class SocialMedia extends React.Component {
    render() {
        return (
            <div id="topnav-social-container" style={this.props.style}>
            <a href="https://www.github.com" className="topnav-social hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
            <FaGithub />
            </a>
            <a href="https://www.twitter.com" className="topnav-social hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
            <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" className="topnav-social hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
            <FaLinkedinIn/>
            </a>
            </div>
        );
    }
}