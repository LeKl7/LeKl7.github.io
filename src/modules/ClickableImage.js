import React from 'react';
import '../styles/styles.css';
import {AdvancedImage, placeholder} from '@cloudinary/react';

export default class ClickableImage extends React.Component {
    render() {
        return (
            <>
            <div className="d-card-img">
                <AdvancedImage className="d-card-img"
                id={`${this.props.imageData.publicID}`}
                cldImg={ this.props.imageData}
                onClick={() => this.props.onImgClick(this.props.imageData)}
                plugins={[placeholder({mode: 'predominant-color'})]}
                //plugins={[lazyload(), placeholder({mode: 'predominant-color'})]}
                />
            </div>
          </> 
        );
    }
};