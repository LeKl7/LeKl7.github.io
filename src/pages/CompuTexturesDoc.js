import React from 'react';
import '../styles/topnav.css';
import ReactMarkdown from 'react-markdown'
import Markdown from 'markdown-to-jsx';
import articleMd from '../assets/markdownPages/CompuTexturesDocumentation.md'

export default class CompuTexturesDoc extends React.Component {
    constructor(props) {
        super(props)
        this.state = { md: '' }
    }
    componentWillMount() {
        fetch(articleMd)
          .then((res) => res.text())
          .then((md) => {
            this.setState({ md })
          })
      }
    componentDidMount() {
    }
    

    render() {
        const MarkdownComponents = {
            // Convert Markdown img to next/image component and set height, width and priority
            // example: ![AltText {priority}{768x432}](...
            p: paragraph => {
              const { node } = paragraph
              
              if (node.children[0].tagName === "img") {
                const image = node.children[0]
                const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "")
                const isPriority = image.properties.alt?.toLowerCase().includes('{priority}')
                const metaWidth = image.properties.alt.match(/{([^}]+)x/)
                const metaHeight = image.properties.alt.match(/x([^}]+)}/)
                const width = metaWidth ? metaWidth[1] : "768"
                const height = metaHeight ? metaHeight[1] : "432"
                
                return (
                  <img
                    src={image.properties.src}
                    width={width}
                    height={height}
                    className="postImg"
                    alt={alt}
                    priority={isPriority}
                  />
                )
              }
              return <p>{paragraph.children}</p>
            },
          }

        return (
            <section className="d-body">
            <div className="d-card-wrapper">
            <div className="d-card maxScreenSize">
                <Markdown children={this.state.md}/>
                {/* <ReactMarkdown
                children={this.state.md}
                components={MarkdownComponents}
                /> */}
            </div></div>
            </section>
        );
    }
}
