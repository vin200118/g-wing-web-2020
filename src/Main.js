import React from 'react';
import './App.css';
import { Route, HashRouter,Redirect  } from  'react-router-dom'

import Registration from "./menu/Registration";
import Login from "./menu/Login";
import Home from "./menu/Home";
import UserList from "./menu/UserList";
import Event from "./menu/Event";
import AddFlatContribution from "./menu/AddFlatContribution";
import ReceiveContribution from "./menu/ReceiveContribution";
import ViewFlatContribution from "./menu/ViewFlatContribution";
export default class Main extends React.Component{
    render() {
        return(
            <HashRouter><main>
                <div className="content">
                    <HashRouter>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                          <Route path="/home" component={Home}/>
                            <Route path="/userList" component={UserList}/>
                            <Route path="/event" component={Event}/>
                            <Route path="/addFlatContribution" component={AddFlatContribution}/>
                            <Route path="/receiveContribution" component={ReceiveContribution}/>
                            <Route path="/viewContribution" component={ViewFlatContribution}/>

                    </HashRouter>
                </div>
                </main>
            </HashRouter>
        )
    }
}
