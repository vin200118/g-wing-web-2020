import React from 'react';
import {Form,Button} from 'react-bootstrap'
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
export default class Event extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            otp: null,
            message:null,
            variant:null,
            event:""
        };
        this.event = this.event.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        this.setState({event : this.props.match.params.eventId.replace("admin_","")});
    }


    event(){
        this.setState({loader:true});
        axios.put("https://cs-event-nov-2019.herokuapp.com/SpringBootRestApi/api/event",
            {
            "eventName":this.state.event,
            "otp":this.state.otp
             })
            .then(res => {

                    this.setState({
                        message:res.data,
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
                   <Form.Group controlId="formBasicOTP">
                       <h5 className="eventHeader">{this.state.event.toUpperCase()+" :"}</h5>
                       <Form.Control id="otp" value={this.state.otp}
                                     onChange={e => this.handleChange(e)} type="input" placeholder={"Enter OTP for "+this.state.event} />
                   </Form.Group>

                   <Button onClick={this.event} variant="primary" type="submit">
                       Register
                   </Button>
                   <div className="spinnerEvent">
                       {this.state.loader?
                       < Spinner  name="three-bounce" color="Black"/>:""
                       }
                   </div>
               </Form>
           </div>
        )
    }
}

