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
export default class Registration extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
            password:null,
            id:0,
            flatNo:"",
            fullName:"",
            newPassword:"",
            confirmPassword:"",
            contactNo1:"",
            contactNo2:"",
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
                         "title":"Profile",
                         "id":userInfo["user_id"],
                         "submitButtonTitle":"Update",
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
                this.setState({loader:true});
                const headers = {
                    'Content-Type': 'application/json',
                }

                if(this.state.flatNo === "" ){
                  this.setState({
                      message:"select flat no.",
                      variant:"danger",
                      loader:false
                  })
                  return;
                }else if(this.state.newPassword === "" ){
                  this.setState({
                      message:"enter new password",
                      variant:"danger",
                      loader:false
                  })
                    return;
                }else if(this.state.confirmPassword === "" ){
                  this.setState({
                      message:"enter confirm password",
                      variant:"danger",
                      loader:false
                  })
                    return;
                }else if(this.state.fullName === "" ){
                  this.setState({
                      message:"enter full name",
                      variant:"danger",
                      loader:false
                  })
                    return;
                }else if(this.state.contactNo1 === "" ){
                  this.setState({
                      message:"enter contact no1",
                      variant:"danger",
                      loader:false
                  })
                    return;
                }else if(this.state.contactNo2 === "" ){
                  this.setState({
                      message:"enter contact no2",
                      variant:"danger",
                      loader:false
                  })
                    return;
                }
                if(this.state.newPassword !== this.state.confirmPassword){
                  this.setState({
                      message:"new password and confirm password should be match",
                      variant:"danger",
                      loader:false
                  })
                    return;
                }
                this.setState({
                    message:"",
                    variant:""
                })


                console.log("flatNo : "+this.state.flatNo);
                console.log("fullName : "+this.state.fullName);
                console.log("password : "+this.state.newPassword);
                console.log("contactNo1 : "+this.state.contactNo1);
                console.log("contactNo2 : "+this.state.contactNo2);

              axios.post(this.state.url,
                {"flatNo":this.state.flatNo,
                "password":this.state.newPassword,
                "fullName":this.state.fullName,
                "contactNo1":this.state.contactNo1,
                "id":this.state.id,
                "contactNo2":this.state.contactNo2},{"headers":headers})
                          .then(res => {
                                if(this.state.id != 0){
                                  let data={"flat_no":this.state.flatNo,
                                  "password":this.state.newPassword,
                                  "full_name":this.state.fullName,
                                  "contact_no1":this.state.contactNo1,
                                  "id":this.state.id,
                                  "contact_no2":this.state.contactNo2}
                                   window.localStorage.setItem("userDetails", JSON.stringify(data));
                                   this.setState({
                                       message:"Profile updated successfully.",
                                       variant:"success",
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
    return (
      <div id="box">
          <h6 class="headline">{this.state.title}: <div className="spinnerEvent">
                          {this.state.loader?
                              < Spinner  name="three-bounce" color="Black"/>:""
                        }
          </div></h6>
            <AlertCom variant={this.state.variant} message={this.state.message} />
      <form  class="col s12 ">
        <div class="row">
          <div class="input-field col s6">
 <FormControl >
               <InputLabel id="flatNo-label">Flot No</InputLabel>
               <Select style={{width:140}}
                 labelId="flatNo-label"
                 id="flatNo"
                 value={this.state.flatNo}
                 onChange={this.handleChangeFlatNo}
               >
               <MenuItem value={"G-101"}>G-101</MenuItem>
            <MenuItem value={"G-102"}>G-102</MenuItem>
            <MenuItem value={"G-103"}>G-103</MenuItem>
            <MenuItem value={"G-104"}>G-104</MenuItem>

              <MenuItem value={"G-201"}>G-201</MenuItem>
              <MenuItem value={"G-202"}>G-202</MenuItem>
              <MenuItem value={"G-203"}>G-203</MenuItem>
              <MenuItem value={"G-204"}>G-204</MenuItem>

                <MenuItem value={"G-301"}>G-301</MenuItem>
                <MenuItem value={"G-302"}>G-302</MenuItem>
                <MenuItem value={"G-303"}>G-303</MenuItem>
                <MenuItem value={"G-304"}>G-304</MenuItem>

                  <MenuItem value={"G-401"}>G-401</MenuItem>
                  <MenuItem value={"G-402"}>G-402</MenuItem>
                  <MenuItem value={"G-403"}>G-403</MenuItem>
                  <MenuItem value={"G-404"}>G-404</MenuItem>

                    <MenuItem value={"G-501"}>G-501</MenuItem>
                    <MenuItem value={"G-502"}>G-502</MenuItem>
                    <MenuItem value={"G-503"}>G-503</MenuItem>
                    <MenuItem value={"G-504"}>G-504</MenuItem>

                      <MenuItem value={"G-601"}>G-601</MenuItem>
                      <MenuItem value={"G-602"}>G-602</MenuItem>
                      <MenuItem value={"G-603"}>G-603</MenuItem>
                      <MenuItem value={"G-604"}>G-604</MenuItem>

                        <MenuItem value={"G-701"}>G-701</MenuItem>
                        <MenuItem value={"G-702"}>G-702</MenuItem>
                        <MenuItem value={"G-703"}>G-703</MenuItem>
                        <MenuItem value={"G-704"}>G-704</MenuItem>

                          <MenuItem value={"G-801"}>G-801</MenuItem>
                          <MenuItem value={"G-802"}>G-802</MenuItem>
                          <MenuItem value={"G-803"}>G-803</MenuItem>
                          <MenuItem value={"G-804"}>G-804</MenuItem>

                            <MenuItem value={"G-901"}>G-901</MenuItem>
                            <MenuItem value={"G-902"}>G-902</MenuItem>
                            <MenuItem value={"G-903"}>G-903</MenuItem>
                            <MenuItem value={"G-904"}>G-904</MenuItem>

                              <MenuItem value={"G-1001"}>G-1001</MenuItem>
                              <MenuItem value={"G-1002"}>G-1002</MenuItem>
                              <MenuItem value={"G-1003"}>G-1003</MenuItem>
                              <MenuItem value={"G-1004"}>G-1004</MenuItem>

                                <MenuItem value={"G-1101"}>G-1101</MenuItem>
                                <MenuItem value={"G-1102"}>G-1102</MenuItem>
                                <MenuItem value={"G-1103"}>G-1103</MenuItem>
                                <MenuItem value={"G-1104"}>G-1104</MenuItem>

                                  <MenuItem value={"G-1201"}>G-1201</MenuItem>
                                  <MenuItem value={"G-1202"}>G-1202</MenuItem>
                                  <MenuItem value={"G-1203"}>G-1203</MenuItem>
                                  <MenuItem value={"G-1204"}>G-1204</MenuItem>
               </Select>

 </FormControl>
</div></div>
     <div class="row">
       <div class="input-field col s6">
         <input id="newPassword" value={this.state.newPassword}  maxlength="4" type="text" class="validate" onChange={e => this.handleChange(e)}/>
           <label for="newPassword">New Password</label>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="confirmPassword" value={this.state.confirmPassword}  maxlength="4" type="text" class="validate" onChange={e => this.handleChange(e)}/>
           <label for="confirmPassword">Confirm Password</label>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="fullName" value={this.state.fullName1} type="text" class="validate" onChange={e => this.handleChangeFullName(e)}/>
           <label for="fullName">Full Name</label>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="contactNo1" value={this.state.contactNo1} maxlength="10" type="text" class="validate" onChange={e => this.handleChange(e)}/>
           <label for="contactNo1">Contact No1</label>
       </div>
     </div>
     <div class="row">
       <div class="input-field col s6">
         <input id="contactNo2" value={this.state.contactNo2}  type="text" maxlength="10" onChange={e => this.handleChange(e)}/>
           <label for="contactNo2">Contact No2</label>
       </div>
     </div>
     <a class="waves-effect waves-light btn-small" onClick={this.signUp}>{this.state.submitButtonTitle}</a>
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
