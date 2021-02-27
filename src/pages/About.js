import React from 'react';
import '../styles/styles.css';
import WorkPercentage from "../modules/WorkPercentage"
import LogoFull from '../modules/LogoFull'

export default class About extends React.Component {
    componentDidMount() {
        this.props.setBodyPadding();
    }
    render() {
        return (        
            <section className="d-body">
            <div className="d-card-wrapper">
            <div className="d-card">
            <LogoFull/>
                <div className="d-card-text-container">
                    <div className="d-card-title-container">
                        <h1 className="p header d-card-title">Hi!</h1>
                    </div>
                    <div className="d-card-title-container">
                        <li>
                        <a className="p d-card-list d-card-list-overview hvr-shutter-out-vertical" href={`/`}>
                            About me
                        </a>
                        </li>
                        <li>
                        <a className="p d-card-list d-card-list-overview hvr-shutter-out-vertical" href={`/`}>
                            CV
                        </a>
                        </li>
                        </div>
                    <div className="p p-body d-card-description"></div>
                    </div>
            </div></div>
            </section>
        );
    }
}
