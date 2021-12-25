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

    renderDownButton = () => {
        if (!this.props.isLast)
            return <a className="nav-arrow hvr-shutter-out-vertical hvr-shutter-out-vertical-square" href={`#${this.getNextHref()}`}><FaCaretDown/></a>
        else
            return <div className="nav-arrow" style={{filter: "opacity(0.1)"}}><FaCaretDown/></div>
    }

    render() {
        return (
        <div className="nav-arrow-container">
        <a className="nav-arrow hvr-shutter-out-vertical-square hvr-shutter-out-vertical" href={`#${this.getPrevHref()}`}><FaCaretUp/></a>
        <div className="p d-card-text-container rotate" style={{justifyContent: "center", flex: "none"}}>{this.props.sectionName}</div>
        {this.renderDownButton()}
        </div>
        );
    }
}