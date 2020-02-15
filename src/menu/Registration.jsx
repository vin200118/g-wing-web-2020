import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import { Redirect } from 'react-router-dom';
export default class Registration extends React.Component{

  render(){
    return (
      <form class="col s12">
     <div class="row">
       <div class="input-field col s6">
         <input id="username" type="text" class="validate"/>
         <label for="username">Username</label>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="new_password" type="password" class="validate"/>
           <label for="password">New Password</label>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="confirm_password" type="password" class="validate"/>
           <label for="password">Confirm Password</label>
       </div>
     </div>
   </form>
    )
  }
}