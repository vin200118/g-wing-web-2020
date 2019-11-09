import React from 'react';
import './App.css';
import Sider from  './Sider'
import Main from "./Main";

export default class App extends React.Component{
    render() {
        return(
            <div className="page" >
                <Sider/>
                <Main/>
            </div>
        )
    }
 }

