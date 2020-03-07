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
          receiveContributionDisabled:false,
          eventId:"",
          flatNo:"",
          flatNos:[],
          eventContriData:[],
          eventData:[],
          eventContriPaidAmount:""
      };
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.saveContribution = this.saveContribution.bind(this);
        this.handleChangeFlatEvent = this.handleChangeFlatEvent.bind(this);
    }
    componentDidMount(){
      if(window.localStorage.getItem("userDetails") === null ||
         window.localStorage.getItem("userDetails") === "" ){
             this.props.history.push("/login");
         }

         if(window.localStorage.getItem("userDetails") != null &&
            window.localStorage.getItem("userDetails") != "" &&
            JSON.parse(window.localStorage.getItem("userDetails"))["role_name"]!=="account"){
                this.props.history.push("/login");
            }

       axios.get("https://tam-g-wing.herokuapp.com/gwing/api/event/in_progress")
                 .then(res => {

                     this.setState({"eventData":res.data,loader:false,eventContriDataByEventId:[]});
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
    handleChangeReceiveContribution(e){
      this.setState({
          "eventContriPaidAmount": e.target.value
      })
    }
    handleChangeEvent(e){
      let eventId = e.target.value;
      let obj = this.state.eventData.find(o => o.eventid === eventId);

      this.setState({
          "eventId": eventId,
          "eventCost": obj.eventcost
      })
      axios.get("https://tam-g-wing.herokuapp.com/gwing/api/eventcontribution/"+eventId)
                .then(res => {
                  let flatNos=[];
                  res.data.map((eventContri, index)=>{
                      flatNos.push(eventContri.flatno);
                  });
                    this.setState({flatNos:flatNos,"eventContriData":res.data,loader:false});
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
    handleChangeFlatEvent(e){
          this.setState({
              "flatNo":  e.target.value
          })
      }
    saveContribution(){
      this.setState({"receiveContributionDisabled":true});
      let requestBody={
        "eventId":this.state.eventId,
        	"flatNo":[this.state.flatNo],
          "eventContriPaidAmount":this.state.eventContriPaidAmount,
          "paidToFlatNo":JSON.parse(window.localStorage.getItem("userDetails"))["flat_no"],
          "eventContriDate":new Date()
      }
      console.log("requestBody"+requestBody);
      const headers = {
          'Content-Type': 'application/json',
      }
       axios.post("https://tam-g-wing.herokuapp.com/gwing/api/eventcontribution/received",requestBody,{"headers":headers})
                 .then(res => {
                   this.setState({
                       message:"Contribution received successfully from "+this.state.flatNo,
                       variant:"success",
                       receiveContributionDisabled:false,
                       loader:false
                   });

                 }).catch(error => {

                     if(error.response !== undefined && error.response.status != 500){
                         this.setState({
                             message:error.response.data,
                             variant:"danger",
                             receiveContributionDisabled:false,
                             loader:false
                         })
                     }else {
                         this.setState({
                             message: "ERROR:please contact to Admin",
                             variant: "danger",
                             receiveContributionDisabled:false,
                             loader:false
                         })
                     }
             });

    }
    render(){
      return(
        <div id="box">
          <h6 class="headline">Receive Contributions</h6>
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
           <div class="input-field col s6">
             <FormControl >
                           <InputLabel id="status-label">Flat No</InputLabel>
                           <Select style={{width:140}}
                             labelId="status-label"
                             id="status"
                             required="true"
                             value={this.state.flatNo}
                             onChange={this.handleChangeFlatEvent}
                           >
                          {this.state.flatNos.map(name => (
                              <MenuItem value={name}>{name}</MenuItem>
                            ))}
                           </Select>

             </FormControl>
             </div></div>
         <div class="row">
           <div class="input-field col s3">
              <span>Event Total Cost : </span><span>{this.state.eventCost}</span>
           </div>
         </div>
         <div class="row">
           <div class="input-field col s3">
              <span>Each Flat Contribution : </span><span>{this.state.flatNos?(this.state.eventCost/this.state.flatNos.length).toFixed(2):""}</span>
          </div>
         </div>
         <div class="row">
           <div class="input-field col s3">
           <input value={this.state.eventContriPaidAmount} id="eventCost"  type="number" class="validate" onChange={e => this.handleChangeReceiveContribution(e)}/>
           <label for="eventCost">Receive Contribution</label>
           </div>
         </div>
         <a disabled={this.state.receiveContributionDisabled} class="waves-effect waves-light btn-small" onClick={this.saveContribution}>Save</a>
           <div className="spinnerEvent">
                          {this.state.loader?
                              < Spinner  name="three-bounce" color="Black"/>:""
                        }
          </div>
       </form>
      </div>
      );

    }
  }
