import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
export default class Home extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          data:[]

      };

      }

  componentWillMount() {
      this.setState({loader:true});
    axios.get("https://tam-g-wing.herokuapp.com/gwing/api/user")
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
                          message: "ERROR:Registration failed, please contact to Admin",
                          variant: "danger",
                          loader:false
                      })
                  }
          });


  }

  render(){
    return (
      <div>

        <h6 class="headline">List of Flat Owners:  <div className="spinnerEvent">
                         {this.state.loader?
                             < Spinner  name="three-bounce" color="Black"/>:""
                       }
         </div></h6>

      <AlertCom variant={this.state.variant} message={this.state.message} />
      <table class="striped">
        <thead>
          <tr>
              <th>No</th>
              <th>Flat No</th>
              <th>Full Name</th>
              <th>Contact No1</th>
              <th>Contact No2</th>
          </tr>
        </thead>

        <tbody>
      {this.state.data.map(( listValue, index ) => {
       return (

         <tr key={index++}>
          <td>{index}</td>
           <td>{listValue.flat_no}</td>
           <td>{listValue.full_name}</td>
           <td>{listValue.contact_no1}</td>
           <td>{listValue.contact_no2}</td>
         </tr>
       );
     })}
       </tbody>
     </table>
     </div>
    )
  }
}
