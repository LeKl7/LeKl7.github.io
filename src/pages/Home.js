import React from 'react';
import '../styles/styles.css';
import LogoFull from '../modules/LogoFull'
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";

export default class Home extends React.Component {
    componentDidMount() {
      this.props.setBodyPadding();
      this.updateLogoSize();
    }
    updateLogoSize = () => {
        //Calculate Logo Size
        this.desiredSize = Math.floor(window.innerHeight / 1.5);
        if(this.desiredSize > window.innerWidth / 1.2) {
          this.desiredSize = Math.floor(window.innerWidth / 1.2);
        }
        document.documentElement.style.setProperty('--logo-size-big', `${this.desiredSize}px`);
    }
    componentDidUpdate() {
      this.updateLogoSize();
    }
    render() {
        return (        
            <section className="d-body">
            <div className="d-card-wrapper" style={{flexFlow : "column", marginBottom: "3%", marginTop: "3%"}}>
            <LogoFull/>
                <div className="d-card-text-container">
                    <div className="p p-body d-card-description" style={{alignSelf : "center", marginLeft: "0px"}}>
                      Hi! I'm 
                      <Link to={"/about"} 
                      className="hvr-shutter-out-vertical hvr-shutter-out-vertical-square" style={{marginBottom: "4px", marginLeft: "5px"}} 
                      onClick={() => this.props.onPathChange("/about")}> Lorenz </Link>
                      . I primarily do 
                      <div className={`p d-card-tag coding`} style={{marginLeft : "0.3em"}}></div> 
                      and 
                      <div className={`p d-card-tag game-design`} style={{marginLeft : "0.3em"}}></div> 
                      .
                    </div>
                    <div className="p p-body d-card-description" style={{alignSelf : "center", marginLeft: "0px"}}>
                      Check out my 
                      <Link to={"/games"} 
                      className="hvr-shutter-out-vertical hvr-shutter-out-vertical-square" style={{marginBottom: "4px", marginLeft: "5px", marginRight:"5px"}} 
                      onClick={() => this.props.onPathChange("/games")}>games</Link>
                      and 
                      <Link to={"/projects"} 
                      className="hvr-shutter-out-vertical hvr-shutter-out-vertical-square" style={{marginBottom: "4px", marginLeft: "5px"}} 
                      onClick={() => this.props.onPathChange("/projects")}>projects</Link>
                      !
                    </div>
                  </div>
            </div>
            </section>
        );
    }
}
