import React from 'react';
import OverviewCard from '../modules/OverviewCard'
import ProjectCard from '../modules/ProjectCard'
import '../styles/topnav.css';

export default class Projects extends React.Component {
    componentDidMount() {
        this.props.setBodyPadding();
    }
    render() {
        return (        
            <>
            <section className="d-body" id="0">
                <OverviewCard projectCollection={this.props.projectCollection} 
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
                        return (
                            <section className="d-body" id={project.key} key={project.key}>
                            <ProjectCard project={project} key={project.key} onImgClick={(string) => this.props.onImgClick(string)} sectionName={collection.title}
                                isFirst={(collection.projects.indexOf(project) === 0)} isLast={(collection.projects.indexOf(project) === collection.projects.length-1) && (this.props.projectCollection.indexOf(collection) === this.props.projectCollection.length-1)}
                            />
                            </section>
                    )})
                )
            })}
            </>
        );
    }
}
