import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import {AdvancedImage, lazyload, placeholder} from '@cloudinary/react';
import {Cloudinary, CloudinaryImage, URLConfig, CloudConfig} from "@cloudinary/url-gen";
import Topnav from './modules/Topnav';
import Modal from './modules/Modal';
import Home from './pages/Home';
import About from './pages/About';
import { NoMatch } from './pages/NoMatch';
import CollectionTab from './pages/CollectionTab';
import Contact from './pages/Contact';
import CVData from './assets/data/CVData.json';
import GamesData from './assets/data/games.json';
import GamesDataTestCompany from './assets/data/games_TestCompany.json';
import ProjectData from './assets/data/projects.json';
import ProjectDataTestCompany from './assets/data/projects_TestCompany.json';
import { isString } from '@cloudinary/url-gen/internal/utils/dataStructureUtils';

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
            modalImageData: "",
            filterOpen: false,
            filter: [],
            darkMode: true
        } 

        /* This lists all the games that can be viewed under the game tab. */
        this.gameCollection = GamesData;
        /* This lists all the games that can be viewed under the projects tab */
        this.projectCollection = ProjectData;
        this.updateImageData();
        this.defaultBodyPadding = 0;
    }

    getCollection(isGame, tailoredKey) {
        if(isGame) {
            switch(tailoredKey) {
                default: return GamesData;
                case "TestCompany": return GamesDataTestCompany;
            }
        }
        else {
            switch(tailoredKey) {
                default: return ProjectData;
                case "TestCompany": return ProjectDataTestCompany;
            }
        }
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
        this.projectCollection.data.map( pc => 
            pc.projects.map(p => height += 1)
        )
        return height;
    }
    setHeight = (path) => {
        const rootElement = document.getElementById('root');
        const height = path === "/projects" ? 1 : 1;
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
    openModal = (imageData) => {
        const modal = document.getElementById("myModal");
        modal.style.display = "flex";
        this.setState({modalOpen: true, modalImageData: imageData});
    };

    closeModal = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
        this.setState({modalOpen: false});
    };

    setImgSource = (projectName, index) => {
        console.log(index);
        for (let collectionIndex = 0; collectionIndex < this.gc.length; collectionIndex++) {
            const projectCollection = this.gc[collectionIndex];
            for (let projectIndex = 0; projectIndex < projectCollection.projects.length; projectIndex++) {
                const project = projectCollection.projects[projectIndex];
                if(project.folderName === projectName) {
                    console.log(this.gameImages[collectionIndex][projectIndex][index]);
                    this.setState({modalImageData: this.gameImages[collectionIndex][projectIndex][index]});
                    return;
                }
            }
        }
        
        for (let collectionIndex = 0; collectionIndex < this.pc.length; collectionIndex++) {
            const projectCollection = this.gc[collectionIndex];
            for (let projectIndex = 0; projectIndex < projectCollection.projects.length; projectIndex++) {
                const project = projectCollection.projects[projectIndex];
                if(project.folderName === project) {
                    console.log(this.projectImages[collectionIndex][projectIndex][index]);
                    this.setState({modalImageData: this.projectImages[collectionIndex][projectIndex][index]});
                    return;
                }
            }
        }
    };

    /* ---- Dark Light Mode */
    changeMode = () => {
        document.documentElement.style.setProperty('--main-color', !this.state.darkMode? "#111" : "#fafafa");
        document.documentElement.style.setProperty('--secondary-color', !this.state.darkMode? "#e4e3e3":"#2f2f2f");
        document.documentElement.style.setProperty('--logo-brightness', !this.state.darkMode? "1.3" : "0.7");
        this.setState({darkMode: !this.state.darkMode});
        //this.forceUpdate();
    }

    getMainColor = () =>  {
        return !this.state.darkMode? "#111" : "#fafafa";
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

    updateImageData = () => {
        this.cld = new Cloudinary({
            cloud: {
              cloudName: 'lorenzkleiser'
            },
            secure: true
          }); 
        
        this.gc = this.getCollection(true, this.props.query.get('tailored')).data;
        this.gameImages = []
        for (let index = 0; index < this.gc.length; index++) {
            this.gameImages[index] = [];
            for (let projectIndex = 0; projectIndex < this.gc[index].projects.length; projectIndex++) {
                this.gameImages[index][projectIndex] = [];
                const project = this.gc[index].projects[projectIndex];
                this.gameImages[index][projectIndex][0] = this.cld.image(`${project.folderName}/1.png`).format('auto').quality('auto');
                this.gameImages[index][projectIndex][1] = this.cld.image(`${project.folderName}/2.png`).format('auto').quality('auto');
                this.gameImages[index][projectIndex][2] = this.cld.image(`${project.folderName}/3.png`).format('auto').quality('auto');
                this.gameImages[index][projectIndex][3] = this.cld.image(`${project.folderName}/4.png`).format('auto').quality('auto');
                this.gameImages[index][projectIndex][4] = this.cld.image(`${project.folderName}/Main.png`).format('auto').quality('auto');
            }
        }

        this.pc = this.getCollection(false, this.props.query.get('tailored')).data;
        this.projectImages = []
        for (let index = 0; index < this.pc.length; index++) {
            this.projectImages[index] = [];
            for (let projectIndex = 0; projectIndex < this.pc[index].projects.length; projectIndex++) {
                this.projectImages[index][projectIndex] = [];
                const project = this.pc[index].projects[projectIndex];
                this.projectImages[index][projectIndex][0] = this.cld.image(`${project.folderName}/1.png`).format('auto').quality('auto');
                this.projectImages[index][projectIndex][1] = this.cld.image(`${project.folderName}/2.png`).format('auto').quality('auto');
                this.projectImages[index][projectIndex][2] = this.cld.image(`${project.folderName}/3.png`).format('auto').quality('auto');
                this.projectImages[index][projectIndex][3] = this.cld.image(`${project.folderName}/4.png`).format('auto').quality('auto');
                this.projectImages[index][projectIndex][4] = this.cld.image(`${project.folderName}/Main.png`).format('auto').quality('auto');
            }
        }
    }

    render() {
        return (
        <Router > {/*basename='lekl7.github.io'*/}
            <div>
            {/*  <!-- Including Font Awesome --> */}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
                <Topnav routes={this.state} onPathChange={this.onPathChange} onNavExpand={this.onNavExpand} navExpanded={this.state.navExpanded} windowWidth={this.state.windowWidth} darkMode={this.state.darkMode} changeMode={this.changeMode}/>
            </div>  
            
            <Modal imageData = {this.state.modalImageData} openModal={this.openModal} closeModal={this.closeModal} setImgSource={(p, i) => this.setImgSource(p, i)} gameCollection={this.gameCollection.data} projectCollection={this.projectCollection.data}/>

            <Switch>
                <Route exact path="/" render={()=><Home setBodyPadding={this.setBodyPaddig} onPathChange={this.onPathChange} darkMode={this.state.darkMode}/>}/>
                <Route path="/about" render={()=><About data={CVData} setBodyPadding={this.setBodyPaddig}/>} navExpanded={this.state.navExpanded}/>
                <Route path="/games" render={()=><CollectionTab 
                    projectCollection={this.getCollection(true, this.props.query.get('tailored')).data} 
                    imageData={this.gameImages} 
                    navExpanded={this.state.navExpanded} 
                    setBodyPadding={this.setBodyPaddig} 
                    onImgClick={(imageData) => this.openModal(imageData)} 
                    onFilterToggle={() => this.onFilterToggle()} 
                    onFilterChange={(string)=> this.onFilterChange(string)} 
                    filterExpanded={this.state.filterOpen}
                    filter={this.state.filter}
                    />}/>
                <Route path="/projects" render={()=><CollectionTab 
                    projectCollection={this.getCollection(false, this.props.query.get('tailored')).data} 
                    imageData={this.projectImages} 
                    navExpanded={this.state.navExpanded} 
                    setBodyPadding={this.setBodyPaddig} 
                    onImgClick={(imageData) => this.openModal(imageData)} 
                    onFilterToggle={() => this.onFilterToggle()} 
                    onFilterChange={(string)=> this.onFilterChange(string)}  
                    filterExpanded={this.state.filterOpen}
                    filter={this.state.filter}
                    />}/>
                <Route path="/contact" render={()=><Contact setBodyPadding={this.setBodyPaddig}/>} navExpanded={this.state.navExpanded}/>
                <Route path="*" serve />
                <Route component={NoMatch} />
            </Switch>
        </Router>
        );
    }
}

export default function RoutedApp (props) {
    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
      }
    const path = useLocation().pathname;
    return <App path={path} query={useQuery()}></App>;
};