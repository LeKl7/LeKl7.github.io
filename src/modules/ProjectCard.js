import {Component} from 'react';
import '../styles/tags.css';
import Arrows from './Arrows'
import ClickableImage from '../modules/ClickableImage';
import QuickLinks from '../modules/QuickLinks';
import WorkPercentage from "../modules/WorkPercentage"
import {Video} from 'cloudinary-react';

export default class ProjectCard extends Component {
    getCollaborationString = () => {
        let str = "Collaboration with: ";
        this.props.project.collaborators.map(c => {
            str += c.name;
            if(!this.props.project.collaborators.indexOf(c, 0) === this.props.project.collaborators.length -1)
                str += ", ";
            return str;
        });
        return str;
    };

    render() {
        return (
            <div className="d-card-wrapper">
            <div className="d-card">
            {/* Image Container */}
                <div className="d-card-img-container" id={`imgContainer${this.props.project.key}`}>
                            {/* Video */}
                        {/* <video className="d-card-img-main d-card-img" loop="loop" autoPlay muted controls>
                            <source src={`${process.env.PUBLIC_URL}/assets/videos/${this.props.project.name}.mp4`} type="video/mp4"/></video> */}
                        <Video className="d-card-img-main d-card-img" autoPlay muted controls webkit-playsinline="true" playsInline cloudName="lorenzkleiser" publicId={`https://res.cloudinary.com/lorenzkleiser/video/upload/videos/${this.props.project.folderName}.mp4`}/>
                        <div className="d-card-img-screenshots-container">
                            <ClickableImage folder={this.props.project.folderName} imgName={"1.png"} onImgClick={(string) => this.props.onImgClick(string)}/>
                            <ClickableImage folder={this.props.project.folderName} imgName={"2.png"} onImgClick={(string) => this.props.onImgClick(string)}/>
                            <ClickableImage folder={this.props.project.folderName} imgName={"3.png"} onImgClick={(string) => this.props.onImgClick(string)}/>
                            <ClickableImage folder={this.props.project.folderName} imgName={"4.png"} onImgClick={(string) => this.props.onImgClick(string)}/>
                        </div>
                </div>
                {/* Text Container */}
                <div className="d-card-text-container" id={`textContainer${this.props.project.key}`}>
                    <div className="d-card-title-container">
                        <h1 className="p header d-card-title">{this.props.project.name} 
                        <sup style={{fontSize:"20px"}}> ({this.props.project.date})
                            </sup></h1>
                        <div className="d-card-tags-container">
                        {this.props.project.tags.map((tag)=>{
                            return(
                                <div className={`p d-card-tag ${tag}`} key={tag}></div>
                            )
                        })}
                        </div>
                    </div>
                    {/* Project Description */}
                    <div className="p p-body d-card-description">
                        {this.props.project.desctiption.map((p)=>{
                            return(
                                <div style={{marginBottom:"13px"}} key={this.props.project.desctiption.indexOf(p, 0)}>{p}</div>
                            )
                        })}
                        {/* Collaborator info */}
                        {this.props.project.collaborators != null &&
                        <div className="p-oblique" style={{marginBottom:"13px"}}>
                            Collaboration with: 
                            {this.props.project.collaborators.map(c => {
                                return (
                                    c.href != null ?
                                        <a className="hvr-shutter-out-vertical hvr-shutter-out-vertical-square" href={c.href} target="_blank" rel='noreferrer'
                                        style={{verticalAlign: "top", marginLeft: "10px"}} key={this.props.project.collaborators.indexOf(c)}> {c.name} </a>
                                        :
                                        <p style={{verticalAlign: "top", marginLeft: "10px", display: "inline"}} key={this.props.project.collaborators.indexOf(c)}> {c.name} </p> 
                                );
                            })}
                        </div>}
                    </div>
                    {/* Tasks */}
                    <div style={{display: "flex", flexFlow:"row"}}>
                    <ul className="d-card-ul">
                    {this.props.project.tasks.map((task)=>{
                            return(
                                <li className={`p d-card-list`} key={this.props.project.tasks.indexOf(task, 0)}>{task}</li>
                            )
                    })}
                    </ul>
                    {this.props.project.percentage &&
                    <WorkPercentage perc={this.props.project.percentage} id={this.props.project.key}/>
                    }
                    </div>
                    {/* Quick Links Right */}
                    {this.props.project.quickLinks != null &&
                        <QuickLinks links={this.props.project.quickLinks}/>
                    }
                </div>
            </div>
            <Arrows curProjIndex={this.props.project.key} isLast={this.props.isLast}/>
            </div>
        );
    }
}