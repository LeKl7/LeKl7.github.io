import {Component} from 'react';
import { FaTimes, FaCaretRight, FaCaretLeft} from "react-icons/fa";
import '../styles/tags.css';
import '../styles/modal.css';
import '../styles/topnav.css';
import {Image} from 'cloudinary-react';

export default class Modal extends Component {
    prevImg = () => {
        var src = this.props.imgSource.split('/');
        var imgIndex = src.pop().split('.')[0];
        imgIndex -= 1;
        if (imgIndex === 0)
        imgIndex = 4;
        this.props.setImgSource(src.join('/') + `/${imgIndex}.png`);
    }
    nextImg = () => {
        var src = this.props.imgSource.split('/');
        var imgIndex = parseInt(src.pop().split('.')[0]);
        imgIndex += 1;
        if (imgIndex === 5)
        imgIndex = 1;
        this.props.setImgSource(src.join('/') + `/${imgIndex}.png`);
    }

    getDescr = () => 
    {
        var src = this.props.imgSource.split('/');
        var imgIndex = parseInt(src.pop().split('.')[0]);
        var folder = src.pop();
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

        return res;
    }

    render() {
        document.onkeypress = function (e) {
            e = e || window.event;
            console.log(e.key);
        };
        return (     
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="close-btn hvr-shutter-out-vertical-square hvr-shutter-out-vertical " onClick={this.props.closeModal}><FaTimes /></div>
                <div className="prev hvr-shutter-out-vertical-square hvr-shutter-out-vertical " onClick={this.prevImg}><FaCaretLeft/></div>
                <div className="modal-image">
                    {/* <img src={this.props.imgSource} className="d-img-card" style={{width:"100%", height:"auto"}} alt="Hero"/> */}
                    <Image cloudName="lorenzkleiser" publicId={this.props.imgSource} className="d-img-card" style={{width:"100%", height:"auto"}} alt={this.getDescr()}/>
                    <div className="p" style={{marginTop: "5px"}}>{this.getDescr()}</div>
                </div>
                <div className="next hvr-shutter-out-vertical-square hvr-shutter-out-vertical" onClick={this.nextImg}><FaCaretRight/></div>
            </div>
        </div>
        );
    }
}