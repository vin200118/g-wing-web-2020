import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DropDown from '../common/DropDown';
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
              <DropDown flatNo={this.state.flatNo} handleChangeFlatNo={this.handleChangeFlatNo} />
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
