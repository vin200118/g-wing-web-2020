import React from 'react';
import './App.css';
import { Route, HashRouter,Redirect } from  'react-router-dom'

import Event from "./menu/Event";
import Status from "./menu/Status";


export default class Main extends React.Component{
    render() {
        return(
            <HashRouter><main>
                <div className="content">
                    <HashRouter>
                        <Route path="/event/:eventId" component={Event}/>
                        <Route path="/status" component={Status}/>
                    </HashRouter>
                </div>
            </main></HashRouter>
        )
    }
}

