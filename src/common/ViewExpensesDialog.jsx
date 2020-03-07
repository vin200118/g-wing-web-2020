import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default class ViewExpensesDialog extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          open:false
      };
      this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
   handleClickOpen = () => {
    this.setState({"open":true});
  };

   handleClose = () => {

    this.setState({"open":false});
  };

render(){
  const expenseDetail = this.props.expensesDetails;
  return (
    <div>
    <Button onClick={this.handleClickOpen}  class="btn waves-effect waves-light">
            <i class="material-icons-two-tone md-12">...</i>
            </Button>
      <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <table class="striped viewExpensesDialogTable">
          <tbody>
            <tr>
                 <td class="viewExpensesDialogTable">Date</td><td>{expenseDetail.date}</td>
            </tr>
          <tr>
               <td class="viewExpensesDialogTable">Expense Name</td><td>{expenseDetail.expensesname}</td>
          </tr>
          <tr>
               <td class="viewExpensesDialogTable">Expense Amount</td><td>{expenseDetail.expensesamt}</td>
          </tr>
          <tr>
               <td class="viewExpensesDialogTable">Paid To</td><td>{expenseDetail.paidto}</td>
          </tr>
          <tr>
               <td class="viewExpensesDialogTable">Paid By</td><td>{expenseDetail.paidby}</td>
          </tr>
           </tbody>
         </table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
}
