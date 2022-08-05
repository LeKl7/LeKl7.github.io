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
                        <h1 className="p header d-card-title">About me</h1>
                    </div>
                    <div className="d-card-text-container">
                        <div className="p p-body d-card-description" style={{lineHeight: "1.8"}}>
                            <div style={{marginBottom:"13px"}}>
                                I’m a Swiss developer currently studying Game Design at the ZHdK in Zürich and computer science at the distance learning university Hagen.
                            </div>
                            <div style={{marginBottom:"13px"}}>
                                My greatest fascination lies within the possibilities of 
                                <div className={`p d-card-tag coding`} style={this.tagStyle}></div>.
                                The process of creation through an abstract but strictly logical language, in a digital space without real world limitations.
                            </div>
                            <div style={{marginBottom:"13px"}}>
                                I get inspired whilst working with other people, as everybody's mind is unique.
                                <div className={`p d-card-tag game-design`} style={this.tagStyle}></div> 
                                is my passion.
                            </div>
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
