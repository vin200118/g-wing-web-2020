import React from 'react';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import { Redirect } from 'react-router-dom';
export default class Event extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            otp: null,
            message:null,
            variant:null,
            event:"",
            redirect:false
        };
        this.eventFunc = this.eventFunc.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderSwitch = this.renderSwitch.bind(this);
    }
    componentDidMount() {
        this.setState({event : this.props.match.params.eventId.replace("admin_",""),message:null});
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({event : nextProps.match.params.eventId.replace("admin_",""),message:null});
    }


    eventFunc(e){
        e.preventDefault();
        if(this.state.event === "login"){
            if(this.state.otp === "fox420"){
                window.localStorage.setItem("password", "fox420");
                this.setState({
                    message:"You logged in successfully",
                    variant:"success",
                    loader:false,
                    redirect:true
                })
            }else{
                this.setState({
                    message:"Please enter valid otp for login",
                    variant:"warning",
                    loader:false,
                    redirect:false
                })
            }
        }else {
            this.setState({loader: true});
            axios.put("https://cs-event-nov-2019.herokuapp.com/SpringBootRestApi/api/event",
                {
                    "eventName": this.state.event,
                    "otp": this.state.otp
                })
                .then(res => {

                    this.setState({
                        message: res.data,
                        variant: "success",
                        loader: false,
                        redirect:false
                    })


                }).catch(error => {
                if (error.response !== undefined && error.response.status === 400) {
                    this.setState({
                        message: error.response.data,
                        variant: "warning",
                        loader: false,
                        redirect:false
                    })
                } else {
                    this.setState({
                        message: "ERROR:Registration failed, please contact to Admin",
                        variant: "danger",
                        loader: false,
                        redirect:false
                    })
                }

            });
        }

    }
    renderSwitch() {
     switch (this.state.event) {
         case 'login':
             return 'login';
         case 'registration':
             return 'Registration';
         case 'gift':
             return 'Gift Received';
         case 'lunch':
             return 'Lunch Received';
         default:
             return 'foo';
     }
     }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        if (this.state.redirect === true) {
            /*return <Redirect to='/event/registration' />*/
            document.getElementById("form").style.display="none";
        }
        return(

           <div id="Login" className="menuDetails">
              <AlertCom variant={this.state.variant} message={this.state.message} />

               <Form id="form">
                   <Form.Group controlId="formBasicOTP">
                       <h5 className="eventHeader">{this.state.event.toUpperCase()+" :"}</h5>
                       <Form.Control id="otp" value={this.state.otp}
                                     onChange={e => this.handleChange(e)} type="input" placeholder={"Enter OTP for "+this.state.event} />
                   </Form.Group>
                   {window.localStorage.getItem("password") === "fox420" || (window.localStorage.getItem("permission") === "admin" && this.state.event === "login") || this.state.event === "registration"?
                       <Button onClick={(e) => {this.eventFunc(e)}} variant="primary" type="submit">
                           {this.renderSwitch()}
                       </Button>:""
                   }
                   <div className="spinnerEvent">
                       {this.state.loader?
                       <Spinner  name="three-bounce" color="Black"/>:""

                       }
                   </div>
               </Form>
           </div>
        )
    }
}
