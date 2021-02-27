import React from 'react';
import '../styles/logoFull.css';

import {ReactComponent as LogoOuterGray} from '../assets/svgs/LogoOuterGray.svg';
import {ReactComponent as LogoInnerGray} from '../assets/svgs/LogoInnerGray.svg';
import {ReactComponent as LogoProfile} from '../assets/svgs/LogoProfile.svg';


export default class LogoFull extends React.Component {
    render() {
        return (
            <div className="logo-full-container">
                <div className="logo-full-container-inner">
                <LogoOuterGray className="logo-full logo-full-outer"/>
                <LogoInnerGray className="logo-full logo-full-inner"/>
                <LogoProfile />            
                </div>
            </div>
        );
    }
};