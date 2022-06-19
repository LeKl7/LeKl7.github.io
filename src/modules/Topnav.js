import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import '../styles/topnav.css';
import '../styles/topnavSmall.css';
import Logo from './Logo';
import SocialMedia from '../modules/SocialMedia';
import {FaBars,FaTimes} from 'react-icons/fa';
import DarkLightMode from '../modules/DarkLightMode';
import { LinkWithQuery } from '../modules/LinkWithQuery';

class NavItem extends React.Component {
    render() {
        return (
            <div className={`nav-item ${this.props.parCss}`}>
            <LinkWithQuery to={this.props.path} 
                className={`p nav-text ${this.props.isactive? "hrv-shutter-out-vertical-focused" : ""} ${this.props.css} hvr-shutter-out-vertical`} 
                onClick={() => this.props.onPathChange(this.props.path)}>
            {this.props.name}
            </LinkWithQuery>
            </div>
        );
    }
}

class TopNav extends React.Component {
    render() {
        const { items, activePath } = this.props.routes;
        return (
            <div id="topnav-container" className={`${this.props.navExpanded ? "topnav-container-expanded" :""}`}>
                {/* Logo */}
                <LinkWithQuery className="logo-container" to="/" onClick={() => this.props.onPathChange("/")}>
                    <div className="logo-container-inner">
                        <Logo darkMode={this.props.darkMode}/>
                    </div>
                </LinkWithQuery>
                <div id={`topnav`} className={`${this.props.navExpanded ? "topnav-expanded" :""}`}>
                {/* Routes */}
                <div id={`topnav-routes-container`}>
                    {
                        items.map((item) => {
                            return (
                                <NavItem path={item.path} name={item.name} css={item.css} onPathChange={(path)=>this.props.onPathChange(path)} isactive={item.path === activePath} key={item.key}/>
                            )
                        })
                    }
                    <DarkLightMode darkMode={this.props.darkMode} changeMode={this.props.changeMode} style={{ margin: "0px", marginLeft: "var(--topnav-item-margin)"}}/>
                    </div>
                {/* Social Media */}
                    <SocialMedia />
                </div>
            </div>
        );
    }
}

class TopNavSmall extends React.Component {
    render() {
        const { items, activePath } = this.props.routes;
        return (
            <>
            {/* Logo */}
            <LinkWithQuery className="logo-container" to="/" onClick={() => this.props.onPathChange("/about")}>
                <div className="logo-container-inner">
                <Logo darkMode={this.props.darkMode}/>
                </div>
            </LinkWithQuery>
            <div id="topnav-container">
                <div id={`topnav`}>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                <button className="p icon hvr-shutter-out-vertical-square" onClick={this.props.onNavExpand}> 
                {
                    this.props.navExpanded ? 
                    <FaTimes />:<FaBars />
                }
                </button>
                <DarkLightMode darkMode={this.props.darkMode} changeMode={this.props.changeMode}/>
                </div>
                {/* Social Media */}
                    {/* <SocialMedia /> */}
                </div>
                {/* Routes */}
                <div className={`d-card topnav-routes-container-small ${this.props.navExpanded ? "topnav-routes-container-small-expanded" :""}`}style={{background: "var(--main-color)", marginTop: "10px", marginLeft: "5%", marginRight: "5%"}}>
                {
                        items.map((item) => {
                            return (
                                <NavItem path={item.path} name={item.name} parCss={"nav-item-small"} css={item.css} onPathChange={(path)=>this.props.onPathChange(path)} isactive={item.path === activePath} key={item.key}/>
                            )
                        })
                    }
                </div>
            </div>
            </>
        );
    }
}

export default class RoutedTopNav extends React.Component {
    render() {
        const RouterTopNav = withRouter(TopNav);
        const RouterTopNavSmall = withRouter(TopNavSmall);
        return (
                this.props.windowWidth < 640 ? 
                <RouterTopNavSmall routes={this.props.routes} onPathChange={(path)=> this.props.onPathChange(path)} onNavExpand={()=>this.props.onNavExpand()} navExpanded={this.props.navExpanded} darkMode={this.props.darkMode} changeMode={this.props.changeMode}></RouterTopNavSmall>
                :
                <RouterTopNav routes={this.props.routes} onPathChange={(path)=> this.props.onPathChange(path)} onNavExpand={()=>this.props.onNavExpand()} navExpanded={this.props.navExpanded} darkMode={this.props.darkMode} changeMode={this.props.changeMode}></RouterTopNav>
        );
    }
}