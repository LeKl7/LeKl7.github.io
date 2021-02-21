import React from 'react';
import '../styles/styles.css';
import SocialMedia from '../modules/SocialMedia';
import {FaEnvelope} from 'react-icons/fa';

export const Contact = () => (
    <section className="d-body">
        <div className="d-card-wrapper">
        <div className="d-card">
            <div className="d-card-text-container">
                <div className="d-card-title-container">
                    <h1 className="p header d-card-title">Contact me </h1>
                </div>
                <div className="p p-body d-card-description">
                <div style={{marginBottom:"13px"}}>Feel free to write me an email: 
                <a href="https://www.linkedin.com" className="topnav-social hvr-shutter-out-vertical-square">
                <FaEnvelope/> </a> </div>
                </div>
                <SocialMedia style={{alignSelf: "flex-end"}}/>
                </div>
        </div></div>
    </section>
)