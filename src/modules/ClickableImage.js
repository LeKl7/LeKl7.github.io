import React from 'react';
import '../styles/styles.css';
import {Image} from 'cloudinary-react';
const imageSource = `${process.env.PUBLIC_URL}/assets/imgs`;


export default class ClickableImage extends React.Component {
    render() {
        return (
            <>
{/*             <img className="d-card-img"
                id={`${this.props.folder}_${this.props.imgName}`}
                src= {`${imageSource}/${this.props.folder}/${this.props.imgName}`} 
                alt={`${this.props.folder}_${this.props.imgName}`}
                onClick={() => this.props.onImgClick(`${imageSource}/${this.props.folder}/${this.props.imgName}`)}
                /> */}
                <Image className="d-card-img"
                id={`${this.props.folder}_${this.props.imgName}`}
                cloudName="lorenzkleiser"
                publicId={`https://res.cloudinary.com/lorenzkleiser/image/upload/${this.props.folder}/${this.props.imgName}`}
                onClick={() => this.props.onImgClick(`https://res.cloudinary.com/lorenzkleiser/image/upload/${this.props.folder}/${this.props.imgName}`)}
                />
          </> 
        );
    }
};
/*                 publicId={`${this.props.folder}/${this.props.imgName}`}
 */