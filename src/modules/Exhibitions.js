import React from 'react';
import {FaItchIo, FaVideo, FaFileAlt} from 'react-icons/fa';
import '../styles/styles.css';
import '../styles/animation.css';

export default class Exhibitions extends React.Component {

    getSymbol = (label) => {
        switch(label) {
            case "Download": return (<FaItchIo style={{margin: "0px 4px"}}/>);
            case "Play": return (<FaItchIo style={{margin: "0px 4px"}}/>);
            case "Trailer": return (<FaVideo style={{margin: "0px 4px"}}/>);
            case "Showcase": return (<FaVideo style={{margin: "0px 4px"}}/>);
            case "Gameplay": return (<FaVideo style={{margin: "0px 4px"}}/>);
            case "Documentation": return (<FaFileAlt style={{margin: "0px 4px"}}/>);
            default: return (<></>)
        }
    }
    getStyle = () => {
        return this.props.left? {} : {textAlign: "end"};
    }

    render() {
        return (
            <div className="exhibitions-container">
            <div className="p p-body p-oblique" style={{marginBottom: "0", marginRight: "18px"}}> Project was exhibited at:
            {this.props.exhibitions.map(l => {
                return (
                   <div style={{backgroundColor: "var(--secondary-color)", color: "var(--main-color)"}}>{l} 
                   {/* <a className="hvr-shutter-out-vertical hvr-shutter-out-vertical-square" href={l.href} target="_blank" rel='noreferrer'
                    style={{verticalAlign: "none", marginLeft: "10px"}}>{this.getSymbol(l.label)}</a> */}
                    </div> 
                );
            }
            )}
            </div>
            </div>
        );
    }
}