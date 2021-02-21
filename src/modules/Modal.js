import {Component} from 'react';
import { FaTimes, FaCaretRight, FaCaretLeft} from "react-icons/fa";
import '../styles/tags.css';
import '../styles/modal.css';
import '../styles/topnav.css';

export default class Modal extends Component {
    prevImg = () => {
        var src = this.props.imgSource.split('/');
        var final = src.pop().split('.')[0];
        final -= 1;
        if (final === 0)
            final = 4;
        this.props.setImgSource(src.join('/') + `/${final}.png`);
    }
    nextImg = () => {
        var src = this.props.imgSource.split('/');
        var final = parseInt(src.pop().split('.')[0]);
        final += 1;
        if (final === 5)
            final = 1;
        this.props.setImgSource(src.join('/') + `/${final}.png`);
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
                    <img src={this.props.imgSource} className="d-img-card" style={{width:"100%", height:"auto"}} alt="Hero"/>
                </div>
                <div className="next hvr-shutter-out-vertical-square hvr-shutter-out-vertical" onClick={this.nextImg}><FaCaretRight/></div>
            </div>
        </div>
        );
    }
}