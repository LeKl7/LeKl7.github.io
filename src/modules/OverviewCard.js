import {Component} from 'react';
import '../styles/tags.css';
import TagFilter from "../modules/TagFilter";

export default class OverviewCard extends Component {
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
    getKey(collection, item) {
        var key = 1;
        for (let collectionI = 0; collectionI < collection.length; collectionI++) {
            const curCol = collection[collectionI];
            for (let projectI = 0; projectI < curCol.projects.length; projectI++) {
                const proj = curCol.projects[projectI];
                if(proj === item)
                    return key;
                key += 1;
            }
        }
        return -1;
    }
    modifyVar(obj, value) {
        obj.valueOf = () => value;
    }
    /* Sorted Collections */
    renderCollection(isAnyActive, projCollection, styling){
        var filteredProjects = projCollection.projects.filter((p) => this.containsTag(p.tags, this.props.filter))
        this.modifyVar(isAnyActive, isAnyActive.valueOf() + filteredProjects.length);
        return (
            filteredProjects.length === 0 ? <></> :
            <div className="d-card-text-container" key={this.props.projectCollection.indexOf(projCollection)}> 
            <>
            <h1 className="p header d-card-title" style={styling}> {projCollection.title} </h1>
            {
                filteredProjects.map((proj) => {
                var key = this.getKey(this.props.projectCollection, proj);
                return (
                    <div className="d-card-title-container" key={key}>
                    <li><a className="p d-card-list d-card-list-overview hvr-shutter-out-vertical" href={`#${key}`}>{proj.name} 
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
        // eslint-disable-next-line no-new-wrappers
        var clientActive = new Number(0); //Create an object boolean! so that it can be passed into the function as a reference.
        // eslint-disable-next-line no-new-wrappers
        var isAnyActive = new Number(0); //Create an object boolean! so that it can be passed into the function as a reference.
        
        return (
            <div className="d-card-wrapper" style={{flexFlow: "column"}}>
            <div className="d-card" ref={ (divElement) => { this.divElement = divElement } }>
                {/* Client Games and Personal Games*/}
                <div className="d-card-vertical" > {/* Order them vertically */}
                    {this.renderCollection(clientActive, this.props.projectCollection[0])} {/* Client Games*/}
                    {this.modifyVar(isAnyActive, clientActive.valueOf())}
                    {this.renderCollection(isAnyActive, this.props.projectCollection[1], clientActive.valueOf() > 0 ? {marginTop: "60px"} : {})} {/* Personal Games*/}
                </div>
                {/* ZHdK Games*/}
                {this.renderCollection(isAnyActive, this.props.projectCollection[2])} {/* ZHdK Games*/}
            {isAnyActive.valueOf() === 0 &&
                <p className="p d-card-list d-card-list-overview">No match.</p>
            }
            </div>
            <TagFilter onFilterToggle={()=> this.props.onFilterToggle()} 
            onFilterChange={(string, bool)=> {this.props.onFilterChange(string, bool)}} 
            filterExpanded={this.props.filterExpanded} filter={this.props.filter}/>
            </div>
        );
    }
}