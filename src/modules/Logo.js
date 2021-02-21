import React from 'react';
import '../styles/styles.css';

import {ReactComponent as LogoOuter} from '../assets/svgs/LogoOuter.svg';
import {ReactComponent as LogoInner} from '../assets/svgs/LogoInner.svg';

export default class Topbar extends React.Component {
    render() {
        return (
            <>
            <LogoOuter className="logo logo-outer"/>
            
            <LogoInner className="logo logo-inner"/>
          </> 
        );
    }
};