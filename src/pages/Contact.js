import React from 'react';
import '../styles/styles.css';
import MarkdownStyle from '../styles/markdownStyles.css';
import SocialMedia from '../modules/SocialMedia';
import {FaEnvelope} from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import markdownText from '../assets/markdownPages/markdownTest.md';

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = { terms: null }
      }
    componentDidMount() {
        this.props.setBodyPadding();
        window.scrollTo(0, 0);
        fetch(markdownText).then((response) => response.text()).then((text) => {
            this.setState({ terms: text })
          })
    }
    render() {
        this.onClick = () => {
            window.open('mailto:lenz.kleiser@bluewin.ch?');
        }
        return (        
            <section className="d-body">
            <div className="d-card-wrapper">
            <div className="d-card">
                <div className="d-card-text-container">
                    <div className="d-card-title-container">
                        <h1 className="p header d-card-title">Contact me </h1>
                    </div>
                    <div className="p p-body d-card-description">
                    <div style={{marginBottom:"13px"}}>Feel free to write me an email or reach out through social media.:
                    <div onClick={this.onClick} className="topnav-social hvr-shutter-out-vertical-square" target="_blank" rel='noreferrer'>
                    <FaEnvelope style={{marginRight: "10px"}}/>lenz.kleiser@bluewin.ch</div> </div>
                    </div>
                    <SocialMedia style={{alignSelf: "flex-end"}}/>
                    </div>
            </div></div>
        </section>
        );
    }
}
