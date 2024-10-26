import {Component} from 'react';
import { FaTimes, FaCaretRight, FaCaretLeft} from "react-icons/fa";
import '../styles/tags.css';
import '../styles/modal.css';
import '../styles/topnav.css';
import {AdvancedImage, placeholder} from '@cloudinary/react';

export default class Modal extends Component {
    prevImg = () => {
        var src = this.props.imageData.publicID.split('/');
        var imgIndex = parseInt(src[1].split('.')[0]) - 1;
        var folder = src[0];
        imgIndex -= 1;
        if (imgIndex === -1)
            imgIndex = 3;
        this.props.setImgSource(folder, imgIndex);
    }
    nextImg = () => {
        var src = this.props.imageData.publicID.split('/');
        var imgIndex = parseInt(src[1].split('.')[0]) - 1;
        var folder = src[0];

        console.log(imgIndex);
        imgIndex += 1;
        if (imgIndex === 4)
            imgIndex = 0;
        console.log(imgIndex);
        this.props.setImgSource(folder, imgIndex);
    }

    getDescr = () => 
    {
        if(this.props.imageData.publicID)
        {
            var src = this.props.imageData.publicID.split('/');
            var imgIndex = parseInt(src[1].split('.')[0]);
            var folder = src[0];
            var res = "";
    
            this.props.gameCollection.forEach(collection => {
                collection.projects.forEach(project => {
                    if(project.folderName === folder)
                    {
                        res = project.picsDescr[imgIndex-1];
                        return;
                    }
                })
            });

            this.props.projectCollection.forEach(collection => {
                collection.projects.forEach(project => {
                    if(project.folderName === folder)
                    {
                        res = project.picsDescr[imgIndex-1];
                        return;
                    }
                })
            });
        }

        return res;
    }

    render() {
        return (     
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="close-btn hvr-shutter-out-vertical-square hvr-shutter-out-vertical " onClick={this.props.closeModal}><FaTimes /></div>
                <div className="prev hvr-shutter-out-vertical-square hvr-shutter-out-vertical " onClick={this.prevImg}><FaCaretLeft/></div>
                <div className="modal-image">
                    {this.props.imageData &&
                    <AdvancedImage className="d-img-card"
                        id={"Modal"}
                        cldImg={ this.props.imageData}
                        plugins={[placeholder({mode: 'predominant-color'})]}
                        style={{width:"100%", height:"auto"}} alt={this.getDescr()}
                        />
                    }
                    <div className="p" style={{marginTop: "5px"}}>{this.getDescr()}</div>
                </div>
                <div className="next hvr-shutter-out-vertical-square hvr-shutter-out-vertical" onClick={this.nextImg}><FaCaretRight/></div>
            </div>
        </div>
        );
    }
}