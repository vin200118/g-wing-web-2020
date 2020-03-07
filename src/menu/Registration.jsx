import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import { Redirect } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DropDown from '../common/DropDown';
export default class Registration extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
            registartionBtnDisabled:false,
            password:null,
            id:0,
            flatNo:"",
            fullName:"",
            newPassword:"",
            confirmPassword:"",
            contactNo1:"",
            contactNo2:"",
            vehicleNo1:"",
            vehicleNo2:"",
            vehicleNo3:"",
            role_name:"",
            "title":"Profile",
            "submitButtonTitle":"Update",
            "url":"https://tam-g-wing.herokuapp.com/gwing/api/user"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFlatNo=this.handleChangeFlatNo.bind(this);
        this.signUp=this.signUp.bind(this);
        }

        componentWillMount() {

            if(window.localStorage.getItem("userDetails") != null && window.localStorage.getItem("userDetails") != ""){
                  let userInfo = JSON.parse(window.localStorage.getItem('userDetails'))
                this.state.newPassword = window.localStorage.getItem('password');
                this.setState({"flatNo":userInfo["flat_no"],
                              "fullName1": userInfo["full_name"],
                                "fullName": userInfo["full_name"],
                            "confirmPassword":window.localStorage.getItem('password'),
                            "newPassword":window.localStorage.getItem('password'),
                          "contactNo1":userInfo["contact_no1"],
                         "contactNo2":userInfo["contact_no2"],
                         "vehicleNo1":userInfo["vehicle_no1"],
                         "vehicleNo2":userInfo["vehicle_no2"],
                         "vehicleNo3":userInfo["vehicle_no3"],
                         "title":"Profile",
                         "id":userInfo["user_id"],
                         "submitButtonTitle":"Update",
                         "user_id":userInfo["user_id"],
                         "role_id":userInfo["role_id"],
                         "role_name":userInfo["role_name"],
                       "url":"https://tam-g-wing.herokuapp.com/gwing/api/user/update"});
              }else{
                  this.setState({ "title":"Sign Up",
                                "submitButtonTitle":"Sign Up","id":0,
                              "url":"https://tam-g-wing.herokuapp.com/gwing/api/user"});
              }
          }

        handleChange(e){
          const re = /^[0-9\b]+$/;
          if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({
                [e.target.id]:  e.target.value.trim()
            })
          }
          }

          handleChangeVehicle(e){
              this.setState({
                  [e.target.id]:  e.target.value
              })
            }


          handleChangeFullName(e){
            this.setState({
                  [e.target.id]:  e.target.value.trim()
              })
              if(this.state.id != 0 && e.target.id==="fullName"){
                  this.setState({"fullName1":e.target.value});
              }
            }

          handleChangeFlatNo(e){
                this.setState({
                    "flatNo":  e.target.value
                })
            }

            signUp(){
                this.setState({loader:true, registartionBtnDisabled:true});
                let message="";
                const headers = {
                    'Content-Type': 'application/json',
                }

                if(this.state.flatNo === "" ){
                  message = "select flat no.";
                }else if(this.state.newPassword === "" ){
                  message = "enter new password";
                }else if(this.state.confirmPassword === "" ){
                    message = "enter confirm password";
                }else if(this.state.fullName === "" ){
                    message = "enter full name";
                }else if(this.state.contactNo1 === "" ){
                    message = "enter contact no1";
                }else if(this.state.newPassword !== this.state.confirmPassword){
                    message = "new password and confirm password should be match";
                }
                if(message !== ""){
                  this.setState({
                      message:message,
                      variant:"danger",
                      loader:false,
                      registartionBtnDisabled:false
                  })
                  return;
                }
                this.setState({
                    message:"",
                    variant:""
                })



              axios.post(this.state.url,
                {"flatNo":this.state.flatNo,
                "password":this.state.newPassword,
                "fullName":this.state.fullName,
                "contactNo1":this.state.contactNo1,
                "vehicleNo1":this.state.vehicleNo1,
                "vehicleNo2":this.state.vehicleNo2,
                "vehicleNo3":this.state.vehicleNo3,
                "id":this.state.id,
                "contactNo2":this.state.contactNo2},{"headers":headers})
                          .then(res => {
                                if(this.state.id != 0){
                                  let data={"flat_no":this.state.flatNo,
                                  "password":this.state.newPassword,
                                  "full_name":this.state.fullName,
                                  "contact_no1":this.state.contactNo1,
                                  "vehicle_no1":this.state.vehicleNo1,
                                  "vehicle_no2":this.state.vehicleNo2,
                                  "vehicle_no3":this.state.vehicleNo3,
                                  "id":this.state.id,
                                  "role_name":this.state.role_name,
                                  "user_id":this.state.user_id,
                                  "contact_no2":this.state.contactNo2}
                                   window.localStorage.setItem("userDetails", JSON.stringify(data));
                                   this.setState({
                                       message:"Profile updated successfully.",
                                       variant:"success",
                                       registartionBtnDisabled:false,
                                       loader:false
                                   })
                                }else{
                                this.props.history.push("/login?signIn=done");
                                }

                          }).catch(error => {

                              if(error.response !== undefined && error.response.status != 500 ){
                                  this.setState({
                                      message:error.response.data,
                                      variant:"danger",
                                      registartionBtnDisabled:false,
                                      loader:false
                                  })
                              }else {
                                  this.setState({
                                      message: "ERROR:please contact to Admin",
                                      variant: "danger",
                                      registartionBtnDisabled:false,
                                      loader:false
                                  })
                              }
                      });


            }


  render(){
    return (
      <div id="box">
          <h6 class="headline">{this.state.title} <div className="spinnerEvent">
                          {this.state.loader?
                              < Spinner  name="three-bounce" color="Black"/>:""
                        }
          </div></h6>
            <AlertCom variant={this.state.variant} message={this.state.message} />
      <form  class="col s12 ">
        <div class="row">
          <div class="input-field col s6">
              <DropDown flatNo={this.state.flatNo} handleChangeFlatNo={this.handleChangeFlatNo} />
</div></div>
     <div class="row">
       <div class="input-field col s6">
         <input id="newPassword" required="true" value={this.state.newPassword}  maxlength="4" type="text" class="validate" onChange={e => this.handleChange(e)}/>
           <label for="newPassword">New Password</label><span class="note-message">Your password should be four numbers digit</span>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="confirmPassword" required="true" value={this.state.confirmPassword}  maxlength="4" type="text" class="validate" onChange={e => this.handleChange(e)}/>
           <label for="confirmPassword">Confirm Password</label><span class="note-message">Your password should be four numbers digit</span>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="fullName" value={this.state.fullName1} required="true" type="text" class="validate" onChange={e => this.handleChangeFullName(e)}/>
           <label for="fullName">Full Name</label>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="contactNo1" value={this.state.contactNo1} required="true" maxlength="10" type="text" class="validate" onChange={e => this.handleChange(e)}/>
           <label for="contactNo1">Contact No1</label><span class="note-message">Your contact1 should be ten numbers digit</span>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="contactNo2" value={this.state.contactNo2}  type="text" maxlength="10" onChange={e => this.handleChange(e)}/>
           <label for="contactNo2">Contact No2</label><span class="note-message">optional</span>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="vehicleNo1" value={this.state.vehicleNo1}  type="text" onChange={e => this.handleChangeVehicle(e)}/>
           <label for="vehicleNo1">Vehicle No1</label><span class="note-message">optional</span>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="vehicleNo2" value={this.state.vehicleNo2}  type="text" onChange={e => this.handleChangeVehicle(e)}/>
           <label for="vehicleNo2">Vehicle No2</label><span class="note-message">optional</span>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="vehicleNo3" value={this.state.vehicleNo3}  type="text" onChange={e => this.handleChangeVehicle(e)}/>
           <label for="vehicleNo3">Vehicle No3</label><span class="note-message">optional</span>
       </div>
     </div>
     <a disabled={this.state.registartionBtnDisabled} class="waves-effect waves-light btn-small" onClick={this.signUp}>{this.state.submitButtonTitle}</a>
       <div className="spinnerEvent">
                      {this.state.loader?
                          <Spinner  name="three-bounce" color="Black"/>:""
                    }
      </div>
   </form>
   </div>
    )
  }
}
