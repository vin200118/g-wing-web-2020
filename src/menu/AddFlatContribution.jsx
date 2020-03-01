
import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import { Redirect } from 'react-router-dom';
import EventStatusDropDown from '../common/EventStatusDropDown';
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
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { FormLabel } from '@material-ui/core';
export default class AddFlatContribution extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          addContributionDisabled:false,
          eventData:[],
          eventCost:"0",
          eventId:"",
          flatNo:[],
          eventContriData:[]
      };
      this.handleChangeEvent = this.handleChangeEvent.bind(this);
      this.addContribution = this.addContribution.bind(this);
      this.handleChangeFlatEvent = this.handleChangeFlatEvent.bind(this);
    }


componentDidMount(){
  if(window.localStorage.getItem("userDetails") === null ||
     window.localStorage.getItem("userDetails") === ""){
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
                         message: "ERROR:Registration failed, please contact to Admin",
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
      "eventCost": obj.eventcost
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
                        message: "ERROR:Fetch event contribution failed, please contact to Admin",
                        variant: "danger",
                        loader:false
                    })
                }
        });
}

handleChangeFlatEvent(e){
  let flatNo = e.target.value;


  this.setState({
      "flatNo": flatNo
  })
  //  console.log("this.state.flatNo"+this.state.flatNo);
}
addContribution(){
 let requestBody={
   "eventId":this.state.eventId,
   	"flatNo":this.state.flatNo
 }
 const headers = {
     'Content-Type': 'application/json',
 }
  axios.post("https://tam-g-wing.herokuapp.com/gwing/api/eventcontribution",requestBody,{"headers":headers})
            .then(res => {
              this.setState({
                  message:"Contribution updated successfully",
                  variant:"success",
                  loader:false
              });

            }).catch(error => {

                if(error.response !== undefined && error.response.status != 500){
                    this.setState({
                        message:error.response.data,
                        variant:"danger",
                        loader:false
                    })
                }else {
                    this.setState({
                        message: "ERROR:Registration failed, please contact to Admin",
                        variant: "danger",
                        loader:false
                    })
                }
        });
}
render(){
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const flatNos=["G-101","G-102","G-103","G-104","G-201","G-202","G-203","G-204","G-301","G-302","G-303","G-304",
"G-401","G-402","G-403","G-404","G-501","G-502","G-503","G-504","G-601","G-602","G-603","G-604",
"G-701","G-702","G-703","G-704","G-801","G-802","G-803","G-804","G-901","G-902","G-903","G-904",
"G-1001","G-1002","G-1003","G-1004","G-1101","G-1102","G-1103","G-1104","G-1201","G-1202","G-1203","G-1204"]
    return (
      <div id="box">
        <h6 class="headline">Add Flat Contributions</h6>
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
                         multiple
                        input={<Input />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                       >
                      {flatNos.map(name => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={this.state.flatNo.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
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
     <a disabled={this.state.addContributionDisabled} class="waves-effect waves-light btn-small" onClick={this.addContribution}>Save</a>
       <div className="spinnerEvent">
                      {this.state.loader?
                          < Spinner  name="three-bounce" color="Black"/>:""
                    }
      </div>
    </form>
    </div>

  )
}
}
