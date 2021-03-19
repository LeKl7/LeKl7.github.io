import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Topnav from './modules/Topnav';
import Modal from './modules/Modal';
import Home from './pages/Home';
import About from './pages/About';
import { NoMatch } from './pages/NoMatch';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: this.props.path,
            items: [
                {
                path: '/about',
                name: 'About',
                css: '',
                key: 2
                },
                {
                path: '/projects',
                name: 'Projects',
                css: '',
                key: 3
                },
                {
                path: '/contact',
                name: 'Contact',
                css: '',
                key: 4
                }
            ],
            windowWidth: window.innerWidth,
            navExpanded: false,
            modalOpen: false,
            modalImgSource: "",
            darkMode: true
        } 
        this.projectCollection =[
            {
                title: "ZHdK Projects",
                projects: [
                    {
                    name: "Heels 'n Feels",
                    folderName: "heelsnfeels",
                    date: "2020",
                    tags: ["mechanics", "coding"],
                    desctiption: [`Heels ‘n Feels is a queer, kinda furry visual novel with mini games about the perils of heelying too close to the sun. If you know that heelys are way cooler than skateboards and love to read a shit-ton of dialogue, then this games is for you!`,
                    `This game was created by 18 game design students in two weeks for one of our class modules. The art style and music was partially inspired by a mix of all things 80s and 2000s.`,
                    `Enter a world of chaos and confusion while trying to get rid of a corpse, that might kind of be your fault. But do try to bond with your friends as well, before you all have to go your separate ways.`],
                    tasks: ["Two minigame mechanics", "System programming", "Dialogue programming"],
                    collaborators: [{name: "First year GameDesign students"}],
                    quickLinks:[{label: "Download", href:"https://sk8terboii.itch.io/heels-n-feels"}, {label: "Trailer", href:"https://www.youtube.com/watch?v=9jPSSWCKI5Y&feature=emb_title&ab_channel=BackpainGames"}],
                    key: 0
                    },
                    {
                    name: "Hangry Frogs - On Ice",
                    folderName: "hangryfrogs",
                    date: "2020",
                    tags: ["concept", "coding", "sound"],
                    desctiption: [`As soon as winter dawns, the fierce fight for the last food begins.`,
                    `In this 2 player game hangry frogs duel each other for the last, already frozen, fly on the icy lake. The frog can be rotated by the joystick. To interact with the world, its tongue can be stuck out with a button press.`,
                    `Play with your family, friends or  frenemies and find out who is  the better (hangry) frog!`],
                    tasks: ["Level Design", "Entire programming", "Sondtracks", "Sound Effects"],
                    percentage: 50,
                    collaborators: [{name: "@lunaelaine", href:""}],
                    quickLinks:[{label: "Download", href:"https://lenzkleiser.itch.io/hangry-frogs-on-ice"}, {label: "Trailer", href:"https://www.youtube.com/watch?v=cFMsNZKugJg&feature=emb_title"}],
                    key: 1
                    }, {
                    name: "Too MUCH!",
                    folderName: "toomuch",
                    date: "2020",
                    tags: ["mechanics", "coding"],
                    desctiption: [`Do you ever feel overwhelmed by too much affection? I know, happens to me all the time too! Slap your obnoxious punter away before they can reach your heart and trap it forerver.`,
                    `In this project, I created a game given the theme "I have nothing, if I don't have you". It was programmed in Processing.`],
                    tasks: ["Programming in Processing"],
                    percentage: 100,
                    key: 2
                    },
                    {
                    name: "Send NEWS!",
                    folderName: "sendnews",
                    date: "2020",
                    tags: ["storytelling", "coding", "sound"],
                    desctiption: [`This project deals with the digital and volatile interactions as well as the news overflow during the corona pandemic.`,
                    `In the background, both visually and auditive, there's constant news about corona in 25 different languages. Only by interacting with others, as distant and mediated as they may seem, you can silence the intense stream of bad news. At least just for a moment`,
                    `"Send NEWS!" is a realtime chat application, playable in the browser, in which up to 10 people can talk to each other.`],
                    tasks: ["Text shader", "Game programming", "Webserver setup", "Sound Design"],
                    percentage: 50,
                    collaborators: [{name: "@lunaelaine", href:""}],
                    key: 3
                    }, 
                ]
            },
            {
                title: "Personal Projects",
                projects: [{
                    name: "Planethesis",
                    folderName: "planethesis",
                    date: "2020",
                    tags: ["concept", "coding", "game-design", "game-jam"],
                    desctiption: [`A war is raging between Church and Science, but only one party can come through as victorious! Decide whether the world will follow the holy path alongsit or trust in the works of Galileo Galilei.`, 
                    `Choose your stand and don’t let the other side take over the Universe!`],
                    tasks: ["Developement of concept", "Coding of the entire project"],
                    percentage: 33,
                    collaborators: [{name: "@manolo", href:"https://manolowi.itch.io/"}, {name:"@luatschia", href:"https://lulatschia.itch.io/"}],
                    quickLinks:[{label: "Download", href:"https://lulatschia.itch.io/planethesis"}, {label: "Trailer", href:"https://www.youtube.com/watch?v=Dd6DzHlILEk&feature=emb_title&ab_channel=TheKleiserBros"}],
                    key: 4
                    }]
            }
        ]
        this.defaultBodyPadding = 0;
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.setHeight(this.props.path);
        const isLight = document.documentElement.style.getPropertyValue('--main-color') !== ""
        && document.documentElement.style.getPropertyValue('--main-color')  !== "#111";
        if(isLight)
            this.setState({darkMode: false}, this.forceUpdate());
    };

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    };
    componentDidUpdate() {
    }


    getHeight = () => {
        let height = 0;
        this.projectCollection.map( pc => 
            pc.projects.map(p => height += 1)
        )
        return height;
    }
    setHeight = (path) => {
        const rootElement = document.getElementById('root');
        const height = path === "/projects" ? this.getHeight() + 1 : 1;
        rootElement.style.minHeight = `${(height*100).toString()}vh`;
    }
    onPathChange = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
        this.setHeight(path);
    }
    /* Navbar functions */
    handleResize = (e) => this.setState({ windowWidth: window.innerWidth });

    setBodyPaddig = (expanded) => {
        const body = document.querySelector('.d-body');
        if(body) body.style.paddingTop = (expanded ?? this.state.navExpanded) ? '120px' : "75px";
    }
    onNavExpand = () => {
        this.setBodyPaddig(!this.state.navExpanded);
        this.setState({navExpanded: !this.state.navExpanded});
    };
    /* Modal functions */
    openModal = (imgSource) => {
        const modal = document.getElementById("myModal");
        modal.style.display = "flex";
        this.setState({modalOpen: true, modalImgSource: imgSource});
    };
    closeModal = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
        this.setState({modalOpen: false, modalImgSource: ""});
    };
    setImgSource = (string) => {
        this.setState({modalImgSource: string});
    };
    /* Dark Light Mode */
    changeMode = () => {
        document.documentElement.style.setProperty('--main-color', !this.state.darkMode? "#111" : "#e4e3e3");
        document.documentElement.style.setProperty('--secondary-color', !this.state.darkMode? "#e4e3e3":"#111");
        this.setState({darkMode: !this.state.darkMode});
        this.forceUpdate();
    }
    render() {
        return (
        <Router>
            <div>
            {/*  <!-- Including Font Awesome --> */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
                <Topnav routes={this.state} onPathChange={this.onPathChange} onNavExpand={this.onNavExpand} navExpanded={this.state.navExpanded} windowWidth={this.state.windowWidth} darkMode={this.state.darkMode} changeMode={this.changeMode}/>
            </div>  
            <Modal imgSource={this.state.modalImgSource} openModal={this.openModal} closeModal={this.closeModal} setImgSource={(e) => this.setImgSource(e)}/>
            <Switch>
                <Route exact path="/" render={()=><Home setBodyPadding={this.setBodyPaddig}/>}/>
                <Route path="/about" render={()=><About setBodyPadding={this.setBodyPaddig}/>} navExpanded={this.state.navExpanded}/>
                <Route path="/projects" render={()=><Projects projectCollection={this.projectCollection} navExpanded={this.state.navExpanded} setBodyPadding={this.setBodyPaddig} onImgClick={(string) => this.openModal(string)}/>} />
                <Route path="/contact" render={()=><Contact setBodyPadding={this.setBodyPaddig}/>} navExpanded={this.state.navExpanded}/>
                <Route component={NoMatch} />
            </Switch>
        </Router>
        );
    }
}

export default function RoutedApp (props) {
    const path = useLocation().pathname;
    return <App path={path}></App>;
};