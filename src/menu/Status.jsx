import React from 'react';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from "react-spinkit";
export default class Status extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            otp: null,
            data:null,
            variant:null,
            event:""
        };
        this.event = this.event.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    event(){
        this.setState({loader:true});
        axios.get("https://cs-event-nov-2019.herokuapp.com/SpringBootRestApi/api/data/otp/"+this.state.otp)
            .then(res => {
                    this.setState({
                        data:res.data,
                        message:"OTP data fetched successfully.",
                        variant:"success",
                        loader:false
                    })
            }).catch(error => {
                if(error.response !== undefined && error.response.status === 400){
                    this.setState({
                        message:error.response.data,
                        variant:"warning",
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
    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return(

           <div className="menuDetails">
              <AlertCom variant={this.state.variant} message={this.state.message} />

               <Form>
                   <Form.Group id="formBasicOTP">
                       <h5 className="eventHeader">{"Status :"}</h5>
                       <Form.Control id="otp" value={this.state.otp}
                                     onChange={e => this.handleChange(e)} type="input" placeholder={"Enter OTP for Status"} />
                   </Form.Group>

                   <Button onClick={this.event} variant="primary" type="submit">
                       Status
                   </Button>
                   <div className="spinnerEvent">
                       {this.state.loader?
                           < Spinner  name="three-bounce" color="Black"/>:""

                       }
                   </div>
                   <ul style={{marginTop:"12px"}} className="b">

                       { this.state.data ? Object.entries(this.state.data).map((t,k) => <li><span style={{fontWeight:"bold", color:"#9a9a9a"}}>{t[0].toUpperCase() +" : "}</span>{+t[1]==null?"":t[1]}</li>) :""}

                   </ul>
               </Form>
           </div>
        )
    }
}
