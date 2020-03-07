
import React from 'react';
import axios from 'axios';
import AlertCom from "../AlertCom";
import Spinner from 'react-spinkit';
import { Redirect } from 'react-router-dom';
import AlertDialogSlide from '../common/AlertDialogSlide'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input';
import { FormLabel } from '@material-ui/core';
export default class AddExpense extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          addExpenseDisabledBtn:false,
          expensesName:"",
          expensesAmt:"",
          paidTo:""
      };
      this.addExpenses = this.addExpenses.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){

      if(window.localStorage.getItem("userDetails") === null ||
         window.localStorage.getItem("userDetails") === ""){
             this.props.history.push("/login");
         }

       if(window.localStorage.getItem("userDetails") != null &&
          window.localStorage.getItem("userDetails") != "" &&
          JSON.parse(window.localStorage.getItem("userDetails"))["role_name"]!=="account"){
              this.props.history.push("/login");
          }
    }

    handleChange(e){
      this.setState({
            [e.target.id]:  e.target.value
        })
      }

    handleChangeExpenseAmount(e){
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({
            [e.target.id]:  e.target.value.trim()
        })
      }
    }

    addExpenses(){
      this.setState({
          addExpenseDisabledBtn:true
        });

          let message="";
          if(this.state.expensesName === "" ){
            message = "enter expense name";
          }else if(this.state.expensesAmt === "" ){
            message = "enter expense amount";
          }else if(this.state.paidTo === "" ){
            message = "enter person name";
          }
          if(message !== ""){
            this.setState({
                message:message,
                variant:"danger",
                loader:false,
                addExpenseDisabledBtn:false
            })
            return;
          }
          this.setState({
              message:"",
              variant:""
          })
     let requestBody={
       "expensesName":this.state.expensesName.trim(),
       	"expensesAmt":this.state.expensesAmt,
        "paidTo":this.state.paidTo.trim(),
        "paidBy":JSON.parse(window.localStorage.getItem("userDetails"))["flat_no"],
        "date":new Date()
     }
     const headers = {
         'Content-Type': 'application/json',
     }
      axios.post("https://tam-g-wing.herokuapp.com/gwing/api/expenses",requestBody,{"headers":headers})
                .then(res => {
                  this.setState({
                      message:"Expenses saved successfully",
                      variant:"success",
                      loader:false,
                      addExpenseDisabledBtn:false
                  });

                }).catch(error => {

                    if(error.response !== undefined && error.response.status != 500){
                        this.setState({
                            message:error.response.data,
                            variant:"danger",
                            loader:false,
                            addExpenseDisabledBtn:false
                        })
                    }else {
                        this.setState({
                            message: "ERROR:please contact to Admin",
                            variant: "danger",
                            loader:false,
                            addExpenseDisabledBtn:false
                        })
                    }
            });
    }

    render(){
      return (
        <div id="box">
          <h6 class="headline">Add Expense</h6>
        <form class="col s12">
        <AlertCom variant={this.state.variant} message={this.state.message} />
        <div class="row">
            <div class="input-field col s6">
               <input  value={this.state.expensesName} id="expensesName" type="text" class="validate" onChange={e => this.handleChange(e)}/>
                <label for="expensesName">Expense Name</label>
            </div>
       </div>

       <div class="row">
         <div class="input-field col s3">
         <input value={this.state.expensesAmt} id="expensesAmt" type="number" class="validate" onChange={e => this.handleChangeExpenseAmount(e)}/>
         <label for="expensesAmt">Expense Amount</label>
         </div>
       </div>
       <div class="row">
           <div class="input-field col s6">
              <input value={this.state.paidTo} id="paidTo" type="text" class="validate" onChange={e => this.handleChange(e)}/>
               <label for="paidTo">Paid To</label>
           </div>
      </div>
      <a disabled={this.state.addExpenseDisabledBtn} class="waves-effect waves-light btn-small" onClick={this.addExpenses}>Save</a>
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
