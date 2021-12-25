import React from 'react';
import '../styles/styles.css';
import {Image} from 'cloudinary-react';


export default class ClickableImage extends React.Component {
    render() {
        return (
            <>
            <div className="d-card-img">
                <Image className="d-card-img"
                id={`${this.props.folder}_${this.props.imgName}`}
                cloudName="lorenzkleiser"
                publicId={`https://res.cloudinary.com/lorenzkleiser/image/upload/${this.props.folder}/${this.props.imgName}`}
                onClick={() => this.props.onImgClick(`https://res.cloudinary.com/lorenzkleiser/image/upload/${this.props.folder}/${this.props.imgName}`)}
                />
            </div>
          </> 
        );
    }
};