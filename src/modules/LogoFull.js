import React from 'react';
import '../styles/logoFull.css';

import {ReactComponent as LogoProfile} from '../assets/svgs/LogoProfile.svg';
import {ReactComponent as LogoOuterBlack} from '../assets/svgs/LogoOuter.svg';
import {ReactComponent as LogoInnerBlack} from '../assets/svgs/LogoInner.svg';
import {ReactComponent as LogoOuterWhite} from '../assets/svgs/LogoOuterWhite.svg';
import {ReactComponent as LogoInnerWhite} from '../assets/svgs/LogoInnerWhite.svg';

export default class LogoFull extends React.Component {
    render() {
        return (
            <div className="logo-full-container">
                <div className="logo-full-container-inner">
                {this.props.darkMode? 
                    <><LogoOuterWhite className="logo-full logo-full-outer"/>
                    <LogoInnerWhite className="logo-full logo-full-inner"/></>
                    :
                    <><LogoOuterBlack className="logo-full logo-full-outer"/>
                    <LogoInnerBlack className="logo-full logo-full-inner"/></>
                }
                <LogoProfile className="logo-full-profile"/>            
                </div>
            </div>
        );
    }
};