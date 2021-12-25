import {Component} from 'react';
import '../styles/tags.css';
import TagFilter from "../modules/TagFilter";

export default class OverviewCard extends Component {
    /* render() {
        return (
            <div className="d-card-wrapper">
            <div className="d-card">
                {this.props.projectCollection.map(projCollections => {
                return (
                    <div className="d-card-text-container" key={this.props.projectCollection.indexOf(projCollections)}>
                    <>
                    <h1 className="p header d-card-title"> {projCollections.title} </h1>
                    {
                        projCollections.projects.map((proj) => {
                        return (
                            <div className="d-card-title-container" key={proj.key}>
                            <li><a className="p d-card-list d-card-list-overview hvr-shutter-out-vertical" href={`#${proj.key}`}>{proj.name} 
                            <sup style={{fontSize:"px"}}> ({proj.date})
                                </sup></a></li>
                                <div className="d-card-tags-container" style={{marginTop: "0px", marginLeft: "25px"}}>
                                {proj.tags.map((tag)=>{
                                    return(
                                        <div className={`p d-card-tag-overview ${tag}`} key={tag}></div>
                                    )
                                })}
                                </div>
                            </div>
                        )})
                    }
                    </>
                    </div>
                    )
                })}
            </div></div>
        );
    } */

    containsTag = (tags, filter) =>
    {
        if(filter.length <= 0)
            return true;
        var containsTag = false;
        tags.forEach(t => {
            containsTag |= filter.includes(t);
        });
        return containsTag;
    }

    /* Sorted Collections */
    renderCollection(projCollection, styling){
        var filteredProjects = projCollection.projects.filter((p) => this.containsTag(p.tags, this.props.filter))
        return (
            <div className="d-card-text-container" key={this.props.projectCollection.indexOf(projCollection)}> 
            <>
            <h1 className="p header d-card-title" style={styling}> {projCollection.title} </h1>
            {
                filteredProjects.map((proj) => {
                return (
                    <div className="d-card-title-container" key={proj.key}>
                    <li><a className="p d-card-list d-card-list-overview hvr-shutter-out-vertical" href={`#${proj.key}`}>{proj.name} 
                    <sup style={{fontSize:"px"}}> ({proj.date})
                        </sup></a></li>
                        <div className="d-card-tags-container" style={{marginTop: "0px", marginLeft: "25px"}}>
                        {proj.tags.map((tag) => {
                            return(
                                <div className={`p d-card-tag-overview ${tag}`} key={tag}></div>
                            )
                        })}
                        </div>
                    </div>
                )})
            }
            </>
            </div>
            )
    }

    render() {
        return (
            <div className="d-card-wrapper" style={{flexFlow: "column"}}>
            <div className="d-card">
            {/* Client Games and Personal Games*/}
            <div className="d-card-vertical">
                {this.renderCollection(this.props.projectCollection[0])} {/* Client Games*/}
                {this.renderCollection(this.props.projectCollection[1], {marginTop: "60px"})} {/* Personal Games*/}
            </div>
            {/* ZHdK Games*/}
            {this.renderCollection(this.props.projectCollection[2])} {/* ZHdK Games*/}
            </div>
            <TagFilter onFilterToggle={()=> this.props.onFilterToggle()} onFilterChange={(string, bool)=> this.props.onFilterChange(string, bool)} filterExpanded={this.props.filterExpanded} filter={this.props.filter}/>
            </div>
        );
    }
}