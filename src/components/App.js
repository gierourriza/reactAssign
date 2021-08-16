import React from 'react';
import Navbar from './Navbar.js';
import { BrowserRouter, Route} from 'react-router-dom';
import "./css/Navbar.css";
import "./css/App.css";
import Cebu from './Cebu';
import Bohol from './Bohol';
import Subic from './Subic';
import Sur from './IlocosSur';
import Norte from './IlocosNorte';
import CebuImg from './others/CebuImages';
import BoholImg from './others/CebuImages';
import SubicImg from './others/CebuImages';
import SurImg from './others/CebuImages';
import NorteImg from './others/CebuImages';
import Destination from './Destination.js';
const App = () => {
    return (
        <div>
            <Navbar/>
            <div className="App"><br/>
                <div className="qoutes">
                    <span>Jobs fill your pocket. Adventures fill your soul.</span>
                </div>
            </div> 
            <BrowserRouter>
                <div className="Destination">
                    <Destination/>
                </div>
                <div className="about">
                    <Route path="/" exact component={Cebu} />
                    <Route path="/cebu" exact component={Cebu} />
                    <Route path="/bohol" exact component={Bohol} />
                    <Route path="/subic" exact component={Subic} />
                    <Route path="/sur" exact component={Sur} />
                    <Route path="/norte" exact component={Norte} />
                </div>
            </BrowserRouter>
            <div id="photos" className="MyAdventure">
                <BrowserRouter>
                    <Route path="/" exact component={CebuImg} />
                    <Route path="/cebu" exact component={CebuImg} />
                    <Route path="/bohol" exact component={BoholImg} />
                    <Route path="/subic" exact component={SubicImg} />
                    <Route path="/sur" exact component={SurImg} />
                    <Route path="/norte" exact component={NorteImg} />
                </BrowserRouter>
            </div>
        </div>
    );
};
export default App;