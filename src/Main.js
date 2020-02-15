import React from 'react';
import './App.css';
import { Route, HashRouter,Redirect  } from  'react-router-dom'

import Registration from "./menu/Registration";
import Login from "./menu/Login";

export default class Main extends React.Component{
    render() {
        return(
            <HashRouter><main>
                <div className="content">
                    <HashRouter>
                        <Route path="/registration" component={Registration}/>
                            <Route path="/login" component={Login}/>
                    </HashRouter>
                </div>
                </main>
            </HashRouter>
        )
    }
}
