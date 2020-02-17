import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default class Login extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          password:null,
          flatNo:""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeFlatNo=this.handleChangeFlatNo.bind(this);
        this.login = this.login.bind(this);
      }

      componentWillMount() {
          if(this.props.location.search != undefined &&  this.props.location.search.includes("done")){
            this.setState({
                message:"Your account created successfully...",
                variant:"success",
                loader:false
            })
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

    handleChangeFlatNo(e){
          this.setState({
              "flatNo":  e.target.value
          })
      }



    login(){
        this.setState({loader:true});
        const headers = {
            'Content-Type': 'application/json',
        }
        axios.post("https://tam-g-wing.herokuapp.com/gwing/api/user-login",
        {"flatNo":this.state.flatNo,
        "password":this.state.password},{"headers":headers})
                  .then(res => {
                       window.localStorage.setItem("userDetails", JSON.stringify(res.data));
                       window.localStorage.setItem("password", this.state.password);
                        this.props.history.push("/home");


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

    return (
      <div id="box">
        <h6 class="headline">Log in to your account</h6>
      <form class="col s12">
      <AlertCom variant={this.state.variant} message={this.state.message} />


        <div class="row">
          <div class="input-field col s6">
 <FormControl >
       <InputLabel id="flatNo-label">Flat No</InputLabel>
            <Select
              style={{width:140}}
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

     </FormControl >
   </div>
 </div>

     <div class="row">
       <div class="input-field col s3">
       <input id="password" maxlength="4"  type="password" class="validate" onChange={e => this.handleChange(e)}/>
       <label for="password">Password</label>
       <span class="note-message">Your password should be four numbers digit</span>

       </div>
     </div>
     <a class="waves-effect waves-light btn-small" onClick={this.login}>Log In</a>
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
