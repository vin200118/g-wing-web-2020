import React from 'react';
import {Alert} from "react-bootstrap";

export default class AlertCom extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const {variant, message}=this.props;
        return(
           <div>
               { message != null ?
                   <Alert variant={variant}>
                       {message}
                   </Alert>:""
               }
           </div>
        )
    }
}

