import React from 'react';
import '../styles/styles.css';
import {Image} from 'cloudinary-react';

export default class About extends React.Component {
    getKey(collection, item) {
        var key = 1;
        for (let collectionI = 0; collectionI < collection.length; collectionI++) {
            const curCol = collection[collectionI];
            for (let projectI = 0; projectI < curCol.points.length; projectI++) {
                const proj = curCol.points[projectI];
                if(proj === item)
                    return key;
                key += 1;
            }
        }
        return -1;
    }

    componentDidMount() {
        this.props.setBodyPadding();
        window.scrollTo(0, 0);
    }

    render() {
        this.tagStyle = {
            marginBottom: "0px", marginLeft : "0.3em", paddingTop: "0px", paddingBottom: "0px"
        }
        return (        
            <section className="d-body">
            <div className="d-card-wrapper">
            <div className="d-card">
                <div className="d-card-img-container" style={{alignSelf: "center"}}>
                    <Image className="d-card-img"
                        id={`${this.props.folder}_${this.props.imgName}`}
                        cloudName="lorenzkleiser"
                        publicId={`https://res.cloudinary.com/lorenzkleiser/image/upload/ProfilePicture`}
                        />
                </div>
                <div className="d-card-text-container">
                    <div className="d-card-title-container">
                        <h1 className="p header d-card-title">About me
                        <sup style={{fontSize:"20px", marginLeft: "10px"}}>
                            He / Him
                        </sup>
                        </h1>
                    </div>
                    <div className="d-card-text-container">
                        <div className="p p-body d-card-description" style={{lineHeight: "1.8"}}>
                            <div style={{marginBottom:"13px"}}>
                                I’m a Swiss game developer who is a bit too involved in too many insanely cool projects.
                            </div>
                            <div style={{marginBottom:"13px"}}>
                                Half of my time I get to work on «Herdling» with the incredible people at 
                                <a href="https://www.okomotive.ch/" style={{margin: "0 0.1em 0 0.1em", padding: "0 0.1em 0 0.1em", lineHeight: "initial"}} className="hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
                                Okomotive
                                </a>
                                , the other half I am working on two projects of my own: «Tom the postgirl» with 
                                <a href="https://www.oopsiedaisiesstudio.com/" style={{margin: "0 0.1em 0 0.1em", padding: "0 0.1em 0 0.1em", lineHeight: "initial"}} className="hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
                                Oopsie Daisies
                                </a>
                                and «Projected Dreams» with 
                                <a href="https://flawberrystudio.com/" style={{margin: "0 0.1em 0 0.1em", padding: "0 0.1em 0 0.1em", lineHeight: "initial"}} className="hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
                                Flawberry Studio
                                </a>
                                .
                            </div>
                            <div style={{marginBottom:"13px"}}>
                                I get inspired whilst working with other people, as everybody's mind is unique.
                                My greatest pleasure is juicing up interactions with<div className={`p d-card-tag techart`} style={this.tagStyle}></div> 
                                and polishing the shit out of them.                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
            <div className="d-card-wrapper">
            <div className="d-card">
                <div className="d-card-text-container">
                    <div className="d-card-title-container">
                    <h1 className="p header d-card-title">{this.props.data.data[0].title}</h1>
                    </div>

                    <div className="d-card-text-container">
                    <ul className="p p-body d-card-description timeline" style={{lineHeight: "3"}}>
                        {this.props.data.data[0].points.map((point) => {
                            var key = this.getKey(this.props.data.data, point);
                            return(
                                <li key={key} className="timeline-event">
                                    <div style={{display:"inline", fontWeight: "bold", marginBottom: "10px"}}>
                                    {point.name}
                                    </div>
                                    <sup style={{display:"inline", fontSize:"20px", marginLeft: "10px"}}>
                                    {point.dates}
                                    </sup>
                                    <div style={{display:"inline", fontWeight: "bold", marginLeft: "1em"}}>
                                    ○
                                    </div>
                                    <div style={{display:"inline", fontStyle: "italic", marginLeft: "1em"}}>
                                    {point.location}
                                    </div>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                    </div>
            </div>
            </div>
            </section>
        );
    }
}
