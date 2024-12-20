import React from 'react';
import {FaItchIo, FaVideo, FaFileAlt, FaSteam } from 'react-icons/fa';
import '../styles/styles.css';
import '../styles/animation.css';

export default class QuickLinks extends React.Component {

    getSymbol = (label) => {
        switch(label) {
            case "Download": return (<FaItchIo style={{margin: "0px 4px"}}/>);
            case "Steam": return (<FaSteam style={{margin: "0px 4px"}}/>);
            case "Play": return (<FaItchIo style={{margin: "0px 4px"}}/>);
            case "Trailer": return (<FaVideo style={{margin: "0px 4px"}}/>);
            case "Showcase": return (<FaVideo style={{margin: "0px 4px"}}/>);
            case "Gameplay": return (<FaVideo style={{margin: "0px 4px"}}/>);
            case "Documentation": return (<FaFileAlt style={{margin: "0px 4px"}}/>);
            default: return (<>no</>)
        }
    }
    getStyle = () => {
        return this.props.left? {} : {textAlign: "end"};
    }

    render() {
        return (
            <div className="quick-links-container">
            {this.props.links.map(l => {
                return (
                   <div className="p p-body p-oblique" style={this.getStyle()} key={this.props.links.indexOf(l)}>{l.label}: 
                   <a className="hvr-shutter-out-vertical hvr-shutter-out-vertical-square" href={l.href} target="_blank" rel='noreferrer'
                    style={{verticalAlign: "none", marginLeft: "10px"}}>{this.getSymbol(l.label)}</a></div> 
                );
            })}
            </div>
        );
    }
}