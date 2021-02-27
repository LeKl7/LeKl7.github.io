import { render } from '@testing-library/react';
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
            <section className="d-body" id="-1">
                <OverviewCard projectCollection={this.props.projectCollection}/>
            </section>
            {this.props.projectCollection.map(collection => {
                return (
                    collection.projects.map((project) => {
                        return (
                            <section className="d-body" id={project.key} key={project.key}>
                            <ProjectCard project={project} key={project.key} onImgClick={(string) => this.props.onImgClick(string)} 
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
