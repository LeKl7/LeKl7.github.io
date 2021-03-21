import React from 'react';
import '../styles/styles.css';
import {Image} from 'cloudinary-react';

export default class About extends React.Component {
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
                                I’m a Swiss developer currently studying Game Design at the ZHdK in Zürich and Informatics at the FernUni in Hagen.
                            </div>
                            <div style={{marginBottom:"13px"}}>
                                My greatest fascination lies within the possibility of 
                                <div className={`p d-card-tag coding`} style={this.tagStyle}></div>.
                                The process of creation through an abstract but strictly logical language, in a digital space without real world limitations.
                            </div>
                            <div style={{marginBottom:"13px"}}>
                                I get inspired whilst working with other people, as everybodies mind is unique.
                                <div className={`p d-card-tag game-design`} style={this.tagStyle}></div> 
                                is my passion.
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
            </section>
        );
    }
}
