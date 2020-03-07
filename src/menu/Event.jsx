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
export default class Home extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          status:"in_progress",
            data:[]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeEventCost = this.handleChangeEventCost.bind(this);
      this.handleChangeStatus = this.handleChangeStatus.bind(this);
      this.edit = this.edit.bind(this);
      this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
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
       axios.get("https://tam-g-wing.herokuapp.com/gwing/api/event")
                 .then(res => {
                     this.setState({"data":res.data,loader:false});
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

  add(){
    this.setState({loader:true});
    const headers = {
        'Content-Type': 'application/json',
    }
    let url="";
    let model={}
    if(this.state.eventId != null){
      url="https://tam-g-wing.herokuapp.com/gwing/api/event/update";
      model={"eventId":this.state.eventId,"status":this.state.status,"eventCost":this.state.eventCost,
      "eventName":this.state.eventName.trim()}
    }else{
      url="https://tam-g-wing.herokuapp.com/gwing/api/event"
      model={"status":this.state.status,"eventCost":this.state.eventCost,
      "eventName":this.state.eventName}
    }
    axios.post(url,model,{"headers":headers})
              .then(res => {
                this.setState({
                    message:"Event added successfully",
                    variant:"success",
                    loader:false,
                    eventId:null,
                    status:"",
                    eventCost:"",
                    eventName:""

                })
                axios.get("https://tam-g-wing.herokuapp.com/gwing/api/event")
                          .then(res => {
                              this.setState({"data":res.data,loader:false});
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
  delete(id){
    axios.delete("https://tam-g-wing.herokuapp.com/gwing/api/event/"+id)
              .then(res => {
                this.setState({
                    message:"Event deleted successfully",
                    variant:"success",
                    loader:false,
                    eventId:null,
                    status:"",
                    eventCost:"",
                    eventName:""

                })
                axios.get("https://tam-g-wing.herokuapp.com/gwing/api/event")
                          .then(res => {
                              this.setState({"data":res.data,loader:false});
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

  edit(id,eventName, eventCost, eventStatus){
    this.setState({"eventId":id,"status":eventStatus, "eventCost":eventCost, "eventName":eventName});
  }
  handleChangeStatus(e){
        this.setState({
            "status":  e.target.value
        })
    }

  handleChange(e){
    this.setState({
          [e.target.id]:  e.target.value
      })
    }

  handleChangeEventCost(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({
          [e.target.id]:  e.target.value.trim()
      })
    }
    }

  render(){
    return (
      <div id="box">
        <h6 class="headline">Add Update Event</h6>
      <form class="col s12">
      <AlertCom variant={this.state.variant} message={this.state.message} />


        <div class="row">
          <div class="input-field col s6">
             <input value={this.state.eventName} id="eventName" type="text" class="validate" onChange={e => this.handleChange(e)}/>
              <label for="eventName">Event Name</label>
   </div>
 </div>

     <div class="row">
       <div class="input-field col s3">
       <input value={this.state.eventCost} id="eventCost" maxlength="4"  type="number" class="validate" onChange={e => this.handleChangeEventCost(e)}/>
       <label for="eventCost">Event Cost</label>
       </div>
     </div>

     <div class="row">
       <div class="input-field col s6">
           <EventStatusDropDown status={this.state.status} handleChangeStatus={this.handleChangeStatus} />
         </div>
      </div>

     <a class="waves-effect waves-light btn-small" onClick={this.add}>Save/Update</a>
       <div className="spinnerEvent">
                      {this.state.loader?
                          < Spinner  name="three-bounce" color="Black"/>:""
                    }
      </div>

      <table class="striped">
        <thead>
          <tr>
              <th>Event Name</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Edit</th>
          </tr>
        </thead>

        <tbody>
      {this.state.data.map(( event, index ) => {
       return (

         <tr key={index++}>
           <td>{event.eventname}</td>
           <td>{event.eventcost}</td>
           <td>{event.status == "in_progress"?"P":"C"}</td>
           <td>
             <button onClick={() => this.edit(event.eventid,event.eventname,event.eventcost,event.status)}  class="btn waves-effect waves-light red">
                 <i class="material-icons-two-tone md-12">edit</i></button>
                 <AlertDialogSlide eventId={event.eventid} onClickEvent={this.delete}></AlertDialogSlide> </td>
         </tr>
       );
     })}
       </tbody>
     </table>
    </form>
    </div>
    )
  }
}
