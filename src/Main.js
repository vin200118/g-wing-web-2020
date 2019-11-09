import React from 'react';
import './App.css';
import {Switch, Route, HashRouter} from  'react-router-dom'
import Past from './menu/Past'
import KnowPune from "./menu/KnowPune";
import Significant from "./menu/Significant";
import OtherActivities from "./menu/OtherActivities";
import PuneValueProposition from "./menu/PuneValueProposition";
import RoadAhead from "./menu/RoadAhead";
import Numbers from "./menu/Numbers";
import CurrentLeadership from "./menu/CurrentLeadership";
import WorkStream from "./menu/WorkStream";
import BDC from "./menu/BDC";


export default class Main extends React.Component{
    render() {
        return(
            <HashRouter><switch><main>
                <div className="content">
                    <HashRouter><switch>
                        <Route path="/past" component={Past}/>
                        <Route path="/bdc" component={BDC}/>
                        <Route path="/knowPune" component={KnowPune}/>
                        <Route path="/significant" component={Significant}/>
                        <Route path="/otherActivities" component={OtherActivities}/>
                        <Route path="/puneValueProposition" component={PuneValueProposition}/>
                        <Route path="/roadAhead" component={RoadAhead}/>
                        <Route path="/numbers" component={Numbers}/>
                        <Route path="/currentLeadership" component={CurrentLeadership}/>
                        <Route path="/workStream" component={WorkStream}/>


                    </switch></HashRouter>
                </div>
            </main></switch></HashRouter>
        )
    }
}

