import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import { Redirect } from 'react-router-dom';
import AlertDialogSlide from '../common/AlertDialogSlide'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import DropDown from '../common/DropDown';

export default class ReceiveContribution extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          eventId:"",
          eventData:[],
          eventContriData:[]
      };
      this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }
    componentDidMount(){
      if(window.localStorage.getItem("userDetails") === null ||
         window.localStorage.getItem("userDetails") === "" ){
             this.props.history.push("/login");
         }

       axios.get("https://tam-g-wing.herokuapp.com/gwing/api/event")
                 .then(res => {

                     this.setState({"eventData":res.data,loader:false});
                 }).catch(error => {
                     if(error.response !== undefined && error.response.status != 500){
                         this.setState({
                             message:error.response.data,
                             variant:"danger",
                             loader:false
                         })
                     }else {
                         this.setState({
                             message: "ERROR:please contact to Admin",
                             variant: "danger",
                             loader:false
                         })
                     }
             });
    }

    handleChangeEvent(e){
      let eventId = e.target.value;
      let obj = this.state.eventData.find(o => o.eventid === eventId);

      this.setState({
          "eventId": eventId,
          "eventCost": obj.eventcost,
          "eventName": obj.eventname,
      })
      axios.get("https://tam-g-wing.herokuapp.com/gwing/api/eventcontribution/"+eventId)
                .then(res => {
                  let flatNo=[];
                  res.data.map((eventContri, index)=>{
                      flatNo.push(eventContri.flatno);
                  });
                    this.setState({flatNo:flatNo,"eventContriData":res.data,loader:false});
                }).catch(error => {
                    if(error.response !== undefined && error.response.status != 500){
                        this.setState({
                            message:error.response.data,
                            variant:"danger",
                            loader:false
                        })
                    }else {
                        this.setState({
                            message: "ERROR:please contact to Admin",
                            variant: "danger",
                            loader:false
                        })
                    }
            });
    }
    render(){
      return(
        <div id="box">
          <h6 class="headline">View Contributions</h6>
          <form class="col s12">
          <AlertCom variant={this.state.variant} message={this.state.message} />
          <div class="row">
            <div class="input-field col s6">
            <FormControl >
                          <InputLabel id="status-label">Event Name</InputLabel>
                          <Select style={{width:140}}
                            labelId="status-label"
                            id="status"
                            required="true"
                            value={this.state.eventId}
                            onChange={this.handleChangeEvent}
                          >
                        {  this.state.eventData.map((event1, index)=>{
                             return (
                              <MenuItem value={event1.eventid}>{event1.eventname}</MenuItem>
                            );
                          })}
                        </Select>
            </FormControl>
            </div>
           </div>
           <div class="row">
             <div class="input-field col s3">
                <span>Event Total Cost : </span><span>{this.state.eventCost}</span>

             </div>
           </div>

           <div class="row">
             <div class="input-field col s3">

                <span>Each Flat Contribution : </span><span>{this.state.flatNo?(this.state.eventCost/this.state.flatNo.length).toFixed(2):""}</span>
            </div>
           </div>
           <table class="striped">
             <thead>
               <tr>
                   <th>Flat No</th>
                   <th>Paid</th>
                   <th>Paid To</th>
                   <th>Date</th>
               </tr>
             </thead>

             <tbody>
           {this.state.eventContriData.map(( eventContri, index ) => {
            return (

              <tr key={index++}>
                <td>{eventContri.flatno}</td>
                <td>{eventContri.eventcontripaidamount?eventContri.eventcontripaidamount:""}</td>
                <td>{eventContri.paidtoflatno}</td>
                <td>{eventContri.eventcontridate}</td>
                </tr>
            );
          })}
            </tbody>
          </table>
           </form>

         </div>

      );
    }
  }
