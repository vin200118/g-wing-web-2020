import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import ShowUserDetailDialog from '../common/ShowUserDetailDialog';
  import TextField from '@material-ui/core/TextField';
export default class Home extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          data:[],
          searchData:[]

      };

      }

  componentWillMount() {
    if(window.localStorage.getItem("userDetails") === null ||
       window.localStorage.getItem("userDetails") === "" ){
           this.props.history.push("/login");
       }


      this.setState({loader:true});
    axios.get("https://tam-g-wing.herokuapp.com/gwing/api/user")
              .then(res => {
                  this.setState({"data":res.data,"searchData":res.data,loader:false});
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
handleSearch(e){
  let searchValue = e.target.value;
  let filterData = [];
    this.setState({"searchData": []});
  for (var i=0; i < this.state.data.length; i++) {
    let isSearch=false;
    Object.entries(this.state.data[i]).forEach(entry => {
        if (entry[0] !="user_id" && entry[1] != undefined && entry[1] != "" && entry[1] != null
         && entry[1].toLowerCase().includes(searchValue.toLowerCase()) && !isSearch){
            filterData.push(this.state.data[i]);
            isSearch=true;
        }
      });
   }
     this.setState({"searchData": filterData});
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
        <div  style={{"display": "inline-block"}} class="input-field col s6">
          <input style={{"display": "inline-block"}} id="search" value={this.state.search} required="true" type="text" onChange={e => this.handleSearch(e)}/>
            <label for="search">Search</label>
            </div>
      <table class="striped">
        <thead>



          <tr>
              <th>No</th>
              <th>Flat No</th>
              <th>Full Name</th>
              <th>...</th>
          </tr>
        </thead>

        <tbody>
      {this.state.searchData.map(( listValue, index ) => {
       return (

         <tr key={index++}>
          <td>{index}</td>
           <td>{listValue.flat_no}</td>
           <td>{listValue.full_name}</td>
           <td><ShowUserDetailDialog userDetails={listValue}/></td>
         </tr>
       );
     })}
       </tbody>
     </table>
     </div>
    )
  }
}
