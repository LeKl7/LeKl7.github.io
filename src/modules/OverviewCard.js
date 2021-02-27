import {Component} from 'react';
import '../styles/tags.css';

export default class OverviewCard extends Component {
    render() {
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
    }
}