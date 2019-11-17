import React from 'react';
import './App.css';
import { Route, HashRouter,Redirect } from  'react-router-dom'

import Event from "./menu/Event";
import Status from "./menu/Status";
import Sider from "./Sider";


export default class Main extends React.Component{

    render() {
        return(
            <HashRouter><main>
                <div className="content">
                    <HashRouter>
                        <Route path="/event/:eventId" component={Event}/>
                        <Route path="/status" component={Status}/>
                        <Route exact path="/" render={() => (
                            window.localStorage.getItem("permission") === "user" ? (
                                <Redirect to="/event/registration"/>
                            )  : ""
                        )}/>
                    </HashRouter>
                </div>
            </main></HashRouter>
        )
    }
}

