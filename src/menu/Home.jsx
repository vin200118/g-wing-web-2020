import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import { Redirect } from 'react-router-dom';
export default class Home extends React.Component{

  componentWillMount(){
    if(window.localStorage.getItem("userDetails") === null ||
       window.localStorage.getItem("userDetails") === "" ){
           this.props.history.push("/login");
       }
  }

  render(){
    return (
        <div> Welcome to Tamarind park G wing... click on left side bar to see menu options</div>
    )
  }
}
