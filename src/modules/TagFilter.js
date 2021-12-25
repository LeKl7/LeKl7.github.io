import React from 'react';
import {FaTimes} from 'react-icons/fa';
import '../styles/styles.css';
import '../styles/animation.css';

export default class TagFilter extends React.Component {

    getClass = () => {
        console.log(this.props.filterExpanded);
        return this.props.filterExpanded? "p p-body d-card-description hvr-shutter-out-vertical-focused" 
        : "p p-body d-card-description hvr-shutter-out-vertical hvr-shutter-out-vertical-focused";
    }
    renderClose = (bool) => {
        if(bool) return <FaTimes style={{margin: "0px 0px 0px 4px", verticalAlign: "bottom"}}/>
        else return (<></>);
    }

    renderTag = (tag) => {
        return (<div className={`p ${this.props.filter.length > 0 && this.props.filter.includes(tag) ? "d-card-tag" : "d-card-tag-overview"} ${tag}`} style={{fontSize: "15px"}} key={tag} onClick={() => this.props.onFilterChange(tag)}></div>);
    }
    
    getAllTags = () => { return ["concept", "storytelling", "game-design", "mechanics", "sound", "coding", "visuals", "game-jam", "extension"]}

    render() {
        return (
            <div className="tag-filter-container" style={{marginRight: "15px"}}>
            <div className={`p nav-text ${this.props.filterExpanded? "" : "hrv-shutter-out-vertical-focused"} hvr-shutter-out-vertical`}
            style={{marginLeft: "5px", marginRight: "15px"}}
            onClick={() => this.props.onFilterToggle()}>
            Filter Tags
            {this.renderClose(!this.props.filterExpanded)}
            </div>
            {/* Tag filtering */}
            {
                this.getAllTags().map((tag) => {
                return(
                    !this.props.filterExpanded && this.renderTag(tag)
                )}
            )}
            </div>
        );
    }
}