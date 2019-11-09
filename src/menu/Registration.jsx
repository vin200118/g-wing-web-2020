import React from 'react';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import AlertCom from "../AlertCom";
export default class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            otp: null,
            message:null,
            variant:null
        };
        this.registration = this.registration.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    registration(){
        axios.put("https://cs-event-nov-2019.herokuapp.com/SpringBootRestApi/api/event",
            {
            "eventName":"registration",
            "otp":this.state.otp
             })
            .then(res => {

                    this.setState({
                        message:res.data,
                        variant:"success"
                    })


            }).catch(error => {
                if(error.response.status == 400){
                    this.setState({
                        message:error.response.data,
                        variant:"warning"
                    })
                }else {
                    this.setState({
                        message: "ERROR:Registration failed, please contact to Admin",
                        variant: "danger"
                    })
                }
            return;
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
                   <Form.Group controlId="formBasicOTP">
                       <Form.Label>OTP</Form.Label>
                       <Form.Control id="otp" value={this.state.otp}
                                     onChange={e => this.handleChange(e)} type="input" placeholder="Enter OTP" />
                   </Form.Group>

                   <Button onClick={this.registration} variant="primary" type="submit">
                       Register
                   </Button>
               </Form>
           </div>
        )
    }
}

