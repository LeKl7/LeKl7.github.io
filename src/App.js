import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Topnav from './modules/Topnav';
import Modal from './modules/Modal';
import Home from './pages/Home';
import About from './pages/About';
import { NoMatch } from './pages/NoMatch';
import Games from './pages/Games';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CompuTexturesDoc from './pages/CompuTexturesDoc';

class App extends Component {
    constructor(props) {
        super(props);
        /* This lists all the possible get requests. */
        this.state = {
            activePath: this.props.path,
            items: [
                {
                path: '/about',
                name: 'About',
                css: '',
                key: 0
                },
                {
                path: '/games',
                name: 'Games',
                css: '',
                key: 1
                },
                {
                path: '/projects',
                name: 'Projects',
                css: '',
                key: 2
                },
                {
                path: '/contact',
                name: 'Contact',
                css: '',
                key: 3
                }
            ],
            windowWidth: window.innerWidth,
            navExpanded: false,
            modalOpen: false,
            modalImgSource: "",
            filterOpen: false,
            filter: [],
            darkMode: true
        } 
        /* This lists all the games that can be viewed under the game tab. */
        this.gameCollection = [
            {
                title: "Client Games",
                projects: [{
                    name: "Ugly's Magic",
                    folderName: "uglysmagic",
                    video: true,
                    videoEmbedID: "Nnr_Eq-ufsQ",
                    picsDescr: ["Player collected a record (Screenshot).", "Installation from the side.", "Installation from the front.", "Advertisement brochure for the event."],
                    date: "2021",
                    tags: ["concept", "coding", "visuals"],
                    desctiption: [`This project is an hommage to the old 'Ugly' nightclub in Zürich. The former owner, Ulrich Steinle, approached me to make a game installation for his 50th anniversary exibition in Richterswil.`, 
                    `Bring people to the 'Ugly' with good music! You play as the 'U' from 'Ugly' to lure as many cars as possible into the nightclub before the morning.`,
                    `This installation was exhibited for one month.`],
                    tasks: ["Creation of the installation."],
                    percentage: 100,
                    quickLinks:[{label: "Trailer", href:"https://youtu.be/D4yMdezHH-U"},
                        {label: "Gameplay", href:"https://youtu.be/w3hPMI0cnWw"}],
                    key: 1
                    }]
            },
            {
                title: "Personal Games",
                projects: [{
                    name: "Planethesis",
                    folderName: "planethesis",
                    videoEmbedID: "Dd6DzHlILEk",
                    video: true,
                    picsDescr: ["Start Screen (Screenshot).", "Mid Game (Screenshot).", "Mid Game (Screenshot).", "Credits (Screenshot)."],
                    date: "2020",
                    tags: ["concept", "coding", "game-design", "game-jam"],
                    desctiption: [`A war is raging between Church and Science, but only one party can come through as victorious! Decide whether the world will follow the holy path alongsit or trust in the works of Galileo Galilei.`, 
                    `Choose your stand and don’t let the other side take over the Universe!`],
                    tasks: ["Developement of concept", "Coding of the entire project"],
                    percentage: 33,
                    collaborators: [{name: "@ManuelWirth", href:"https://www.manuelwirth.ch/"}, {name:"@lulatschia", href:"https://lulatschia.myportfolio.com/"}],
                    quickLinks:[{label: "Play", href:"https://lulatschia.itch.io/planethesis"}, {label: "Trailer", href:"https://www.youtube.com/watch?v=Dd6DzHlILEk&feature=emb_title&ab_channel=TheKleiserBros"}],
                    key: 2
                    },
                    {
                        name: "From Rag to Silk",
                        claim: "- Don't sew your fingers",
                        folderName: "ragtosilk",
                        videoEmbedID: "9PxdmKq58fs",
                        video: true,
                        picsDescr: ["Start Screen (Screenshot).", "Mid Game (Screenshot).", "Mid Game (Screenshot).", "Mid Game (Screenshot)."],
                        date: "2022",
                        tags: ["concept", "coding", "game-design", "game-jam"],
                        desctiption: [` A well-crafted dress makes all the difference in love. Help your customers in their pursuit of happiness.`, 
                        `From rag to silk is a skill game in which you have to operate a sewing machine. Speed and precision are the keys to success.`, 
                        `This game was created during 3 days of a game jam.`],
                        tasks: ["Developement of concept", "Coding of the entire project"],
                        percentage: 33,
                        collaborators: [{name: "@kathleenbohren1", href:"https://www.manuelwirth.ch/"}, {name:"@ryanbrandt"}],
                        quickLinks:[{label: "Play", href:"https://lenzkleiser.itch.io/fromragtosilk"}],
                        key: 3
                    },
                    {
                        name: "Projected Dreams",
                        folderName: "projecteddreams",
                        videoEmbedID: "eXk1VR7Tm_o",
                        video: true,
                        picsDescr: ["Start Screen (Screenshot).", "Mid Game (Screenshot).", "Mid Game (Screenshot).", "End screen (Screenshot)."],
                        date: "2022",
                        tags: ["concept", "visuals", "game-jam"],
                        desctiption: [` Fulfill the shadow girl's wishes by dragging the children's toys from the shelves and dropping them onto the table.`, 
                        `Recreate silhouettes close to the template in the spotlight to complete the level.`, 
                        `This game was created during 7 days of the Brackeys game jam.`],
                        tasks: ["Shaders", "Implementation of shadow matching mechanic"],
                        percentage: 25,
                        collaborators: [{name: "@aoyuna", href:"https://aoyuna.com/"}, {name:"@robinGood", href:"https://www.portfolio-robingood.com/"},
                            {name:"@lucaImesch", href:"https://tondar.itch.io/"}],
                        quickLinks:[{label: "Play", href:"https://aoyuna.itch.io/projected-dreams"}],
                        key: 4
                    }]
            },
            {
                title: "ZHdK Games",
                projects: [
                    {
                        name: "Heels 'n Feels",
                        folderName: "heelsnfeels",
                        video: true,
                        videoEmbedID: "g-did6fWnMw",
                        picsDescr: ["'Trunk Tetris' Minigame (Screenshot).", "Heelyin' (Screenshot).", "Dialogue Sequence (Screenshot).", "Dialogue Sequence (Screenshot)."],
                        date: "2020",
                        tags: ["mechanics", "coding"],
                        desctiption: [`Heels ‘n Feels is a queer, kinda furry visual novel with mini games about the perils of heelying too close to the sun. If you know that heelys are way cooler than skateboards and love to read a shit-ton of dialogue, then this games is for you!`,
                        `This game was created by 18 game design students in two weeks for one of our class modules. The art style and music was partially inspired by a mix of all things 80s and 2000s.`,
                        `Enter a world of chaos and confusion while trying to get rid of a corpse, that might kind of be your fault. But do try to bond with your friends as well, before you all have to go your separate ways.`],
                        tasks: ["Two minigame mechanics", "System programming", "Dialogue programming"],
                        collaborators: [{name: "First year GameDesign students"}],
                        quickLinks:[{label: "Download", href:"https://sk8terboii.itch.io/heels-n-feels"}, {label: "Trailer", href:"https://www.youtube.com/watch?v=9jPSSWCKI5Y&feature=emb_title&ab_channel=BackpainGames"}],
                        key: 5
                    },
                    {
                        name: "THAR",
                        claim: "- Secrets Underneath The Sand",
                        folderName: "thar",
                        videoEmbedID: "OXOAGnzHjcg",
                        video: true,
                        picsDescr: ["Title Screen.", "Controlling SMALL unit (Screenshot).", "Tutorial Slides (Screenshot).", "Shooting SMALL unit (Screenshot)."],
                        date: "2021",
                        tags: ["mechanics", "coding", "vrar"],
                        desctiption: [`THAR - Secrets beneath the sand.`,
                        `To survive the blazing heat of the Thar desert, take control over a robo and steer your way through the ancient ruins, solve puzzles and discover its secrets.`,
                        `THAR is a VR game created for the Oculus Quest 1 and 2.`],
                        tasks: ["Mechanics", "System programming", "Shaders"],
                        collaborators: [{name: "@lunaelaine", href:"https://luna-elaine.com/"}],
                        percentage: 50,
                        quickLinks:[/* {label: "Download", href:"https://sk8terboii.itch.io/heels-n-feels"}, */ //!Change Download!
                            {label: "Trailer", href:"https://youtu.be/tgOlhzYOIzU"},
                            {label: "Gameplay", href:"https://youtu.be/Mennis5pnaE"}
                        ], 
                        key: 6
                    },
                    {
                        name: "Sansù",
                        claim: "VS Lords of the meat",
                        folderName: "sansu",
                        videoEmbedID: "q1JuzaXRAFU",
                        video: true,
                        picsDescr: ["Title Screen.", "Math Attack (Screenshot).", "Walking (Screenshot).", "Credits."],
                        date: "2021",
                        tags: ["coding", "game-jam"],
                        desctiption: [`Sansū VS Lords of the meat is a hack'n'slash game, combined with a math fight mechanic. It was produced during an intern game jam (3 days) at the Zürich University of the Arts, with a team of 14 game design students.`],
                        tasks: ["System Programming"],
                        collaborators: [{name: "GameDesign Students"}],
                        quickLinks:[{label: "Download", href:"https://leapero.itch.io/sansu-vs-lords-of-the-meat"}, 
                            {label: "Trailer", href:"https://youtu.be/V6LqDupIPjg"},
                            {label: "Gameplay", href:"https://youtu.be/6iDEsS5UKgc"}],
                        key: 7
                    },
                    /* {
                        name: "Shattered Mind",
                        folderName: "shatteredmind",
                        video: true,
                        videoEmbedID: "wnqIk3laQlk",
                        picsDescr: ["Collecting an orb (Screenshot).", "Startscreen (Photo).", "Midgame (Screenshot).", "Midgame (Photo)."],
                        date: "2021",
                        tags: ["concept", "coding"],
                        desctiption: [`Descend into the darkness and keep your sanity. Tilt the device to steer down the elevator.`,
                        `This is a proof of concept prototype, which is played on a mobile device.`],
                        tasks: ["Entire programming"],
                        quickLinks:[{label: "Trailer", href:"https://youtu.be/Lojjd5JXkCs"}],
                        key: 7
                    }, */
                    {
                    name: "Hangry Frogs",
                    claim: "- On Ice",
                    folderName: "hangryfrogs",
                    video: true,
                    videoEmbedID: "wwUVa2WuMmk",
                    picsDescr: ["Main Menu (Screenshot).", "Intro Cutscene (Screenshot).", "Midgame (Screenshot).", "End Screen (Screenshot)."],
                    date: "2020",
                    tags: ["concept", "coding", "sound"],
                    desctiption: [`As soon as winter dawns, the fierce fight for the last food begins.`,
                    `In this 2 player game hangry frogs duel each other for the last, already frozen, fly on the icy lake. The frog can be rotated by the joystick. To interact with the world, its tongue can be stuck out with a button press.`,
                    `Play with your family, friends or  frenemies and find out who is  the better (hangry) frog!`],
                    tasks: ["Level Design", "Entire programming", "Sondtracks", "Sound Effects"],
                    percentage: 50,
                    collaborators: [{name: "@lunaelaine", href:"https://luna-elaine.com/"}],
                    quickLinks:[{label: "Download", href:"https://lenzkleiser.itch.io/hangry-frogs-on-ice"}, {label: "Trailer", href:"https://www.youtube.com/watch?v=cFMsNZKugJg&feature=emb_title"}],
                    key: 8
                    },
                    {
                    name: "Project Zagreus",
                    folderName: "projectzagreus",
                    video: true,
                    videoEmbedID: "C1-K_TAA1tQ",
                    picsDescr: ["Midgame (Screenshot).", "Midgame (Screenshot).", "Midgame (Screenshot).", "Leviathan (Artwork)."],
                    date: "2021",
                    tags: ["concept", "storytelling", "coding"],
                    desctiption: [`RRI Inc. is a company specialised in the investigation of shipwrecks and retrieving blackboxes for insurance and criminal investigation purposes. 
                    You have been working for the company for years, but never experienced a case like this one. An unknown ship has sunken under strange circumstances.`,
                    `Dive into the claustrophobic corridors of the sunken colossus to find out the truth. Experience one of your colleagues turning against you, while unknown creatures lurk in the dark abyss of the sea.`],
                    tasks: ["Story writing"],
                    percentage: 25,
                    collaborators: [{name: "@milkimoone", href:"https://www.instagram.com/milkimoone"},{name: "@AnjaSchrodin", href:"https://www.instagram.com/lyannjohnes"},{name: "@SamuelKnüsel", href:"https://jestercap.itch.io/"}, {name: "@RobinGood", href:"https://www.portfolio-robingood.com/"}],
                    quickLinks:[{label: "Download", href:"https://lenzkleiser.itch.io/project-zagreus"}],
                    key: 9
                    }, 
                ]
            },
        ]
        
        /* This lists all the games that can be viewed under the projects tab */
        this.projectCollection = [
            {
                title: "Unity Extensions",
                projects: [
                    {
                        name: "CompuTextures",
                        claim: "- Editor Texture Creator",
                        folderName: "computextures",
                        video: true,
                        videoEmbedID: "y5beGYa_Zns",
                        picsDescr: ["Marketing cover.", "Screenshot.", "Marketing image.", "Marketing image."],
                        date: "2021",
                        tags: ["coding", "extension"],
                        desctiption: [
                            `When doing procedural visuals you are in need of tileable textures. With this tool you will never have to search the internet again! Create and save textures within the Unity Editor.`, 
                            `Features include tileable 2D / 3D noise, which can be combined and modified to fit your needs. Afterwards, the textures can be saved as .png or as .asset files.`,
                            `It is available on the asset store.`],
                        tasks: ["A fully modular noise generator running on GPU", "2D and 3D texture management"],
                        percentage: 100,
                        quickLinks:[{label: "Download", href:"https://assetstore.unity.com/packages/slug/211761"}, 
                        {label: "Showcase", href:"https://youtu.be/y5beGYa_Zns"},
                        {label: "Documentation", href:"https://lorenzkleiser.notion.site/Documentation-CompuTextures-V1-0-9b0333a96d3d47d6b16ab19db302a53e"}],
                        key: 1
                    },
                    /* {
                        name: "Lazy Logging", // ! To be created!
                        folderName: "lazylogging",
                        date: "2021",                        
                        video: true,
                        videoEmbedID: "-",
                        picsDescr: ["", "", "", ""], 
                        tags: ["coding", "extension"],
                        desctiption: [
                            `...`, 
                            `...`],
                        tasks: ["Developement of a new console window"],
                        percentage: 100,
                        quickLinks:[{label: "Download", href:"https://lulatschia.itch.io/planethesis"}, {label: "Showcase", href:"https://www.youtube.com/watch?v=Dd6DzHlILEk&feature=emb_title&ab_channel=TheKleiserBros"}],
                        key: 2
                    } */
                ]
            },
            {
                title: "Personal Projects",
                projects: [{
                    name: "Website",
                    folderName: "website",
                    picsDescr: ["Endproduct, night mode.", "Endproduct, day mode.", "Code example.", "Mockup."],
                    video: false,
                    date: "2020",
                    tags: ["coding", "visuals"],
                    desctiption: [`This website was created with the React framework in JavaScript and is hosted by GitHub Pages. Everything was designed and programmed by myself.`],
                    tasks: ["Developement of visual concept", "Coding of the website", "Design adaptations for different screen sizes"],
                    percentage: 100,
                    key: 2
                    }]
            },
            {
                title: "ZHdK Projects",
                projects: [
                    {
                        name: "RooMe",
                        folderName: "roome",
                        video: true,
                        videoEmbedID: "jUKXTrbv8pc",
                        picsDescr: ["RooMe in action.", "Artifact saved on the device.", "Rendering of the RooMe.", "View of the device."],
                        date: "2021",
                        tags: ["concept", "coding"],
                        desctiption: [`We humans collect things. Things that remind us of something. Many of them are important to us, however we can not grasp them because they do not exist physically.`,
                        `Let's make the intangible tangible again. Through the embodiment and presence of data in a space, RooMe blurs the boundaries between physical and digital.`],
                        tasks: ["Split screen application setup", "Headtracking and parallax effect"],
                        quickLinks:[{label: "Trailer", href:"https://youtu.be/CbULpl8QXMw"}],
                        collaborators: [{name: "@janosch", href:"https://www.instagram.com/milkimoone"}],//TODO: Change
                        percentage: 25,
                        key: 3
                        
                    },
                    {
                        name: "Marble Escape",
                        folderName: "marbleescape",
                        video: true,
                        videoEmbedID: "e_rnvJBX6is",
                        picsDescr: ["Cover image.", "Package contents.", "One layer of the labyrinth.", "Black tiles."],
                        date: "2021",
                        tags: ["concept", "game-design"],
                        desctiption: [`Marble Escape is a competitive marble-racing boardgame through three layers of a labyrinth.`,
                        `Swap black tiles to change the labyrinth. Outsmart your opponent by blocking his way but opening the way to victory for yourself.`],
                        tasks: ["Concept of the boardgame", "Manufacturing of the prototype"],
                        quickLinks:[{label: "Gameplay", href:"https://youtu.be/mpNoDb7zD5c"}],
                        collaborators: [{name: "@milkimoone", href:"https://www.instagram.com/milkimoone"}],
                        percentage: 50,
                        key: 4
                    },
                    {
                        name: "Windturbine A25",
                        folderName: "windturbine",
                        video: true,
                        videoEmbedID: "QOEQxVFeGQw",
                        picsDescr: ["Cover image.", "Screenshot.", "Screenshot.", "Screenshot."],
                        date: "2021",
                        tags: ["visuals", "sound"],
                        desctiption: [`We were tasked to create an object in the style of the designer Dieter Rams.`,
                        `I created the Windturbine A25 in blender and made four animation clips inside Unity. Afterwards, I did the sound design. The full clip can be seen in the trailer.`],
                        quickLinks:[{label: "Trailer", href:"https://youtu.be/UZu22OHWTFE"}],
                        tasks: ["Modelling and texturing in Blender", "Animation in Unity", "Sounddesign"],
                        key: 5
                    },
                    /* {
                        name: "Heather Gray",
                        folderName: "heathergray",
                        video: true,
                        videoEmbedID: "QOEQxVFeGQw",
                        picsDescr: ["Cover image.", "Screenshot.", "Screenshot.", "Screenshot."],
                        date: "2021",
                        tags: ["visuals", "sound"],
                        desctiption: [`We were tasked to create an object in the style of the designer Dieter Rams.`,
                        `I created the Windturbine A25 in blender and made four animation clips inside Unity. Afterwards, I did the sound design. The full clip can be seen in the trailer.`],
                        quickLinks:[{label: "Trailer", href:"https://youtu.be/UZu22OHWTFE"}],
                        tasks: ["Modelling and texturing in Blender", "Animation in Unity", "Sounddesign"],
                        percentage: 100,
                        key: 5
                    }, */
                    {
                    name: "Too MUCH!",
                    folderName: "toomuch",
                    video: true,
                    videoEmbedID: "ypnxJu6msPA",
                    picsDescr: ["Midgame (Screenshot).", "Midgame (Screenshot).", "Underlying processing of movement (Screenshot).", "End screen (Screenshot)."],
                    date: "2020",
                    tags: ["mechanics", "coding"],
                    desctiption: [`Do you ever feel overwhelmed by too much affection? I know, happens to me all the time too! Slap your obnoxious punter away before they can reach your heart and trap it forerver.`,
                    `In this project, I created a game given the theme "I have nothing, if I don't have you". It was programmed in Processing.`],
                    tasks: ["Programming in Processing"],
                    key: 6
                    },
                    {
                    name: "Send NEWS!",
                    folderName: "sendnews",
                    video: true,
                    videoEmbedID: "1ZWumjEy5jU",
                    picsDescr: ["Midgame (Screenshot).", "Midgame (Screenshot).", "Midgame (Screenshot).", "Midgame with multiple connections (Screenshot)."],
                    date: "2020",
                    tags: ["storytelling", "coding", "sound"],
                    desctiption: [`This project deals with the digital and volatile interactions as well as the news overflow during the corona pandemic.`,
                    `In the background, both visually and auditive, there's constant news about corona in 25 different languages. Only by interacting with others, as distant and mediated as they may seem, you can silence the intense stream of bad news. At least just for a moment`,
                    `"Send NEWS!" is a realtime chat application, playable in the browser, in which up to 10 people can talk to each other.`],
                    tasks: ["Text shader", "Game programming", "Webserver setup", "Sound Design"],
                    percentage: 50,
                    collaborators: [{name: "@lunaelaine", href:"https://luna-elaine.com/"}],
                    key: 7
                    },
                ]
            },
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
        this.onFilterToggle();
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
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
        this.filterOpen = false;
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

    /* ---- Modal functions */
    openModal = (imgSource) => {
        const modal = document.getElementById("myModal");
        modal.style.display = "flex";
        this.setState({modalOpen: true, modalImgSource: imgSource, modalFocusedProject: imgSource});
    };
    closeModal = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
        this.setState({modalOpen: false, modalImgSource: ""});
    };
    setImgSource = (string) => {
        this.setState({modalImgSource: string});
    };

    /* ---- Dark Light Mode */
    changeMode = () => {
        document.documentElement.style.setProperty('--main-color', !this.state.darkMode? "#111" : "#e4e3e3");
        document.documentElement.style.setProperty('--secondary-color', !this.state.darkMode? "#e4e3e3":"#111");
        this.setState({darkMode: !this.state.darkMode});
        this.forceUpdate();
    }

    /* --- Tag Filtering Functions */
    onFilterToggle = () => {
        this.setState({filterOpen: !this.state.filterOpen});
        if(!this.state.filterOpen)
            this.setState({filter: []});
    }
    onFilterChange = (string) => {
        if(this.state.filter.length > 0 && this.state.filter.includes(string))
        {
            var newFilter = this.state.filter;
            newFilter.splice(this.state.filter.indexOf(string), 1);
            this.setState({filter: newFilter});
        }
        else
            this.setState({filter: this.state.filter.concat([string])});
    }

    render() {
        return (
        <Router > {/*basename='lekl7.github.io'*/}
            <div>
            {/*  <!-- Including Font Awesome --> */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
                <Topnav routes={this.state} onPathChange={this.onPathChange} onNavExpand={this.onNavExpand} navExpanded={this.state.navExpanded} windowWidth={this.state.windowWidth} darkMode={this.state.darkMode} changeMode={this.changeMode}/>
            </div>  
            
            <Modal imgSource={this.state.modalImgSource} openModal={this.openModal} closeModal={this.closeModal} setImgSource={(e) => this.setImgSource(e)} gameCollection={this.gameCollection} projectCollection={this.projectCollection}/>
            
            <Switch>
                <Route exact path="/" render={()=><Home setBodyPadding={this.setBodyPaddig} onPathChange={this.onPathChange}/>}/>
                <Route path="/about" render={()=><About setBodyPadding={this.setBodyPaddig}/>} navExpanded={this.state.navExpanded}/>
                <Route path="/games" render={()=><Games 
                    projectCollection={this.gameCollection} 
                    navExpanded={this.state.navExpanded} 
                    setBodyPadding={this.setBodyPaddig} 
                    onImgClick={(string) => this.openModal(string)} 
                    onFilterToggle={() => this.onFilterToggle()} 
                    onFilterChange={(string)=> this.onFilterChange(string)} 
                    filterExpanded={this.state.filterOpen}
                    filter={this.state.filter}
                    />}/>
                <Route path="/projects" render={()=><Projects 
                    projectCollection={this.projectCollection} 
                    navExpanded={this.state.navExpanded} 
                    setBodyPadding={this.setBodyPaddig} 
                    onImgClick={(string) => this.openModal(string)} 
                    onFilterToggle={() => this.onFilterToggle()} 
                    onFilterChange={(string)=> this.onFilterChange(string)}  
                    filterExpanded={this.state.filterOpen}
                    filter={this.state.filter}
                    />}/>
                <Route path="/contact" render={()=><Contact setBodyPadding={this.setBodyPaddig}/>} navExpanded={this.state.navExpanded}/>
                {/* <Route exact path="/CompuTextures/Documentation" render={()=><CompuTexturesDoc setBodyPadding={this.setBodyPaddig} onPathChange={this.onPathChange}/>}/> */}
                <Route path="*" serve />
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