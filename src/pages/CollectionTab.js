import React from 'react';
import OverviewCard from '../modules/OverviewCard'
import ProjectCard from '../modules/ProjectCard'
import '../styles/topnav.css';

export default class CollectionTab extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.setBodyPadding();
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

    render() {
        return (   
            <>
            <section className="d-body" id="0">
                <OverviewCard 
                    projectCollection={this.props.projectCollection} 
                    key={0} 
                    onFilterToggle={()=> this.props.onFilterToggle()} 
                    onFilterChange={(string)=> this.props.onFilterChange(string)} 
                    filterExpanded={this.props.filterExpanded}
                    filter={this.props.filter}
                    />
            </section>
            {this.props.projectCollection.map(collection => {
                return (
                    collection.projects.map((project) => {
                        var key = this.getKey(this.props.projectCollection, project);
                        return (
                            <section className="d-body" id={key} key={key}>
                            <ProjectCard 
                                project={project} 
                                imageData = {this.props.imageData[this.props.projectCollection.indexOf(collection)][this.props.projectCollection[this.props.projectCollection.indexOf(collection)].projects.indexOf(project)]}
                                key={key} 
                                listID={key} 
                                onImgClick={(string) => this.props.onImgClick(string)} 
                                sectionName={collection.title}
                                isFirst={(collection.projects.indexOf(project) === 0)} 
                                isLast={(collection.projects.indexOf(project) === collection.projects.length-1) && (this.props.projectCollection.indexOf(collection) === this.props.projectCollection.length-1)}
                            />
                            </section>
                    )})
                )
            })}
            </>
        );
    }
}
