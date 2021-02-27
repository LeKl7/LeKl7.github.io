import React from 'react';
import '../styles/styles.css';

import {ReactComponent as LogoOuterBlack} from '../assets/svgs/LogoOuter.svg';
import {ReactComponent as LogoInnerBlack} from '../assets/svgs/LogoInner.svg';
import {ReactComponent as LogoOuterWhite} from '../assets/svgs/LogoOuterWhite.svg';
import {ReactComponent as LogoInnerWhite} from '../assets/svgs/LogoInnerWhite.svg';

export default class Logo extends React.Component {
    render() {
        return (
            this.props.darkMode? 
            <>
            <LogoOuterBlack className="logo logo-outer"/>
            <LogoInnerBlack className="logo logo-inner"/>
            </> 
            :
            <>
            <LogoOuterWhite className="logo logo-outer"/>
            <LogoInnerWhite className="logo logo-inner"/>
            </> 
        );
    }
};