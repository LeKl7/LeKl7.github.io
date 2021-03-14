import React from 'react';
import '../styles/styles.css';
import LogoFull from '../modules/LogoFull'

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
                      Hi! I'm Lorenz. I primarily do 
                      <div className={`p d-card-tag coding`} style={{marginLeft : "0.3em"}}></div> 
                      and 
                      <div className={`p d-card-tag game-design`} style={{marginLeft : "0.3em"}}></div> 
                      .
                    </div>
                    </div>
            </div>
            </section>
        );
    }
}
