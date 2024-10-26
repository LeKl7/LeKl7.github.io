import React from 'react';
import '../styles/topnav.css';

export default class WorkPercentage extends React.Component {
    draw = () => 
    {
        var canvas = document.getElementById(`work-percentage-${this.props.id}`);
        if (canvas.getContext)
        {
            var ctx = canvas.getContext('2d'); 
            var X = canvas.width / 2;
            var Y = canvas.height / 2;
            var R = 20;
            ctx.beginPath();
            ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
            ctx.lineWidth = 2;
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(X, Y, R, -Math.PI/2, this.getAngleFromPerc(this.props.perc), false);
            ctx.lineTo(X, Y);
            ctx.lineWidth = 3;
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
            ctx.closePath();
            ctx.fill();
        }
    }

    getAngleFromPerc = (perc) => {
        return -Math.PI/2 + (3*Math.PI/2 + Math.PI/2) * (perc - 0) / (100 - 0);
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate() {
        this.draw();
    }

    render() {
        return (
            this.props.perc !== 0 &&
            <div className="work-percentage-container">
            <div className="p p-body d-card-description" style={{marginRight: "10px"}}>Overall contribution: </div>
            <canvas className="work-percentage" id={`work-percentage-${this.props.id}`} width="50px" height="50px"> </canvas>
            <div className="p p-body d-card-description" style={{marginLeft: "10px"}}>{this.props.perc}%</div>
          </div> 
        );
    }
};