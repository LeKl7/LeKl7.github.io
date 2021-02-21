import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import '../styles/topnav.css';
import Logo from './Logo';
import SocialMedia from '../modules/SocialMedia';

class NavItem extends React.Component {
    render() {
        return (
            <div className="nav-item">
            <Link to={this.props.path} 
                className={`p nav-text ${this.props.isactive? "hrv-shutter-out-vertical-focused" : ""} ${this.props.css} hvr-shutter-out-vertical`} 
                onClick={() => this.props.onPathChange(this.props.path)}>
            {this.props.name}
            </Link>
            </div>
        );
    }
}

class TopNav extends React.Component {
    render() {
        const { items, activePath } = this.props.routes;
        return (
            <div id="topnav-container" className={`${this.props.navExpanded ? "topnav-container-expanded" :""}`}>
                    <Link className="logo-container" to="/" onClick={() => this.props.onPathChange("/")}>
                        <div className="logo-container-inner">
                        <Logo />
                        </div>
                    </Link>
                <div id={`topnav`} className={`${this.props.navExpanded ? "topnav-expanded" :""}`}>
                    <div id={`topnav-routes-container`} className={`${this.props.navExpanded ? "topnav-routes-container-expanded" :""}`}>
                    <button className="p icon" onClick={this.props.onNavExpand}>&#9776;</button>
                    {
                        items.map((item) => {
                            return (
                                <NavItem path={item.path} name={item.name} css={item.css} onPathChange={(path)=>this.props.onPathChange(path)} isactive={item.path === activePath} key={item.key}/>
                            )
                        })
                    }
                    </div>
                    <SocialMedia />
                </div>
            </div>
        );
    }
}

export default class RoutedTopNav extends React.Component {
    render() {
        const RouterTopNav = withRouter(TopNav);
        return (
            <RouterTopNav routes={this.props.routes} onPathChange={(path)=> this.props.onPathChange(path)} onNavExpand={()=>this.props.onNavExpand()} navExpanded={this.props.navExpanded}></RouterTopNav>
        );
    }
}