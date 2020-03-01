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
export default class AlertDialogSlide extends React.Component{
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
  handleDeleteClose = () => {
        this.props.onClickEvent(this.props.eventId);
       this.setState({"open":false});
 };

render(){
  return (
    <div>
    <Button onClick={this.handleClickOpen}  class="btn waves-effect waves-light red">
            <i class="material-icons-two-tone md-12">delete</i>
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
            Are you sure to delete this event...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleDeleteClose} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}
