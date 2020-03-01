import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
export default class DropDown extends React.Component{

  componentWillMount(){

  }

  render(){
    return (
      <FormControl >
                    <InputLabel id="status-label">Event Status</InputLabel>
                    <Select style={{width:140}}
                      labelId="status-label"
                      id="status"
                      required="true"
                      value={this.props.status}
                      onChange={this.props.handleChangeStatus}
                    >
                    <MenuItem value={"in_progress"}>IN PROGRESS</MenuItem>
                 <MenuItem value={"completed"}>COMPLETED</MenuItem>

                    </Select>

      </FormControl>
    )
  }
}
