import React from 'react';
import OverviewCard from '../modules/OverviewCard'
import ProjectCard from '../modules/ProjectCard'
import '../styles/topnav.css';

export const Projects = (props) => (
    <>
    <section className="d-body" id="-1">
        <OverviewCard projectCollection={props.projectCollection}/>
    </section>
    {props.projectCollection.map(collection => {
        return (
            collection.projects.map((project) => {
                return (
                    <section className="d-body" id={project.key} key={project.key}>
                    <ProjectCard project={project} key={project.key} onImgClick={(string) => props.onImgClick(string)} 
                        isLast={(collection.projects.indexOf(project) === collection.projects.length-1) && (props.projectCollection.indexOf(collection) === props.projectCollection.length-1)}
                    />
                    </section>
            )})
        )
    })}
    </>
)
