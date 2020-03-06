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
export default class ShowUserDetailDialog extends React.Component{
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
  const userDetails = this.props.userDetails;
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
          <table class="striped userDetailsDialogTable">
          <tbody>
          <tr>
               <td class="userDetailsDialogTabletd">Flat No.</td><td>{userDetails.flat_no}</td>
          </tr>
          <tr>
               <td class="userDetailsDialogTabletd">Full Name</td><td>{userDetails.full_name}</td>
          </tr>
          <tr>
               <td class="userDetailsDialogTabletd">Contact No1</td><td>{userDetails.contact_no1}</td>
          </tr>
          <tr>
               <td class="userDetailsDialogTabletd">Contact No2</td><td>{userDetails.contact_no2}</td>
          </tr>
          <tr>
               <td class="userDetailsDialogTabletd">Vehicle No1</td><td>{userDetails.vehicle_no1}</td>
          </tr>
          <tr>
               <td class="userDetailsDialogTabletd">Vehicle No2</td><td>{userDetails.vehicle_no2}</td>
          </tr>
          <tr>
               <td class="userDetailsDialogTabletd">Vehicle No3</td><td>{userDetails.vehicle_no3}</td>
          </tr>

           </tbody>
         </table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
}
