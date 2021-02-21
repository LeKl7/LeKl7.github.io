import React from 'react';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa';
import '../styles/styles.css';
import '../styles/animation.css';

export default class Arrows extends React.Component {

    getPrevHref= () => {
        let current = this.props.curProjIndex;
        return current - 1;
    }
    getNextHref= () => {
        let current = this.props.curProjIndex;
        return current + 1;
    }

    render() {
        return (
        <div className="nav-arrow-container">
        <a className="nav-arrow hvr-shutter-out-vertical-square hvr-shutter-out-vertical" href={`#${this.getPrevHref()}`}><FaCaretUp/></a>
        {!this.props.isLast &&
            <a className="nav-arrow hvr-shutter-out-vertical hvr-shutter-out-vertical-square" href={`#${this.getNextHref()}`}><FaCaretDown/></a>
        }
        </div>
        );
    }
}