import React from 'react';
import '../styles/styles.css';
import {FaTwitter, FaLinkedinIn, FaItchIo} from 'react-icons/fa';
import { PiButterflyFill } from "react-icons/pi";

export default class SocialMedia extends React.Component {
    render() {
        return (
            <div id="topnav-social-container" style={this.props.style}>
            <a href="https://bsky.app/profile/lenzkleiser.bsky.social" className="topnav-social hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
            <PiButterflyFill />
            </a>
            <a href="https://twitter.com/LenzKleiser" className="topnav-social hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
            <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/lorenzkleiser" className="topnav-social hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
            <FaLinkedinIn/>
            </a>
            <a href="https://lenzkleiser.itch.io/" className="topnav-social hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
            <FaItchIo/>
            </a>
            </div>
        );
    }
}