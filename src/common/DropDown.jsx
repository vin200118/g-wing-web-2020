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
                    <InputLabel id="flatNo-label">Flat No</InputLabel>
                    <Select style={{width:140}}
                      labelId="flatNo-label"
                      id="flatNo"
                      required="true"
                      value={this.props.flatNo}
                      onChange={this.props.handleChangeFlatNo}
                    >
                    <MenuItem value={"G-101"}>G-101</MenuItem>
                 <MenuItem value={"G-102"}>G-102</MenuItem>
                 <MenuItem value={"G-103"}>G-103</MenuItem>
                 <MenuItem value={"G-104"}>G-104</MenuItem>

                   <MenuItem value={"G-201"}>G-201</MenuItem>
                   <MenuItem value={"G-202"}>G-202</MenuItem>
                   <MenuItem value={"G-203"}>G-203</MenuItem>
                   <MenuItem value={"G-204"}>G-204</MenuItem>

                     <MenuItem value={"G-301"}>G-301</MenuItem>
                     <MenuItem value={"G-302"}>G-302</MenuItem>
                     <MenuItem value={"G-303"}>G-303</MenuItem>
                     <MenuItem value={"G-304"}>G-304</MenuItem>

                       <MenuItem value={"G-401"}>G-401</MenuItem>
                       <MenuItem value={"G-402"}>G-402</MenuItem>
                       <MenuItem value={"G-403"}>G-403</MenuItem>
                       <MenuItem value={"G-404"}>G-404</MenuItem>

                         <MenuItem value={"G-501"}>G-501</MenuItem>
                         <MenuItem value={"G-502"}>G-502</MenuItem>
                         <MenuItem value={"G-503"}>G-503</MenuItem>
                         <MenuItem value={"G-504"}>G-504</MenuItem>

                           <MenuItem value={"G-601"}>G-601</MenuItem>
                           <MenuItem value={"G-602"}>G-602</MenuItem>
                           <MenuItem value={"G-603"}>G-603</MenuItem>
                           <MenuItem value={"G-604"}>G-604</MenuItem>

                             <MenuItem value={"G-701"}>G-701</MenuItem>
                             <MenuItem value={"G-702"}>G-702</MenuItem>
                             <MenuItem value={"G-703"}>G-703</MenuItem>
                             <MenuItem value={"G-704"}>G-704</MenuItem>

                               <MenuItem value={"G-801"}>G-801</MenuItem>
                               <MenuItem value={"G-802"}>G-802</MenuItem>
                               <MenuItem value={"G-803"}>G-803</MenuItem>
                               <MenuItem value={"G-804"}>G-804</MenuItem>

                                 <MenuItem value={"G-901"}>G-901</MenuItem>
                                 <MenuItem value={"G-902"}>G-902</MenuItem>
                                 <MenuItem value={"G-903"}>G-903</MenuItem>
                                 <MenuItem value={"G-904"}>G-904</MenuItem>

                                   <MenuItem value={"G-1001"}>G-1001</MenuItem>
                                   <MenuItem value={"G-1002"}>G-1002</MenuItem>
                                   <MenuItem value={"G-1003"}>G-1003</MenuItem>
                                   <MenuItem value={"G-1004"}>G-1004</MenuItem>

                                     <MenuItem value={"G-1101"}>G-1101</MenuItem>
                                     <MenuItem value={"G-1102"}>G-1102</MenuItem>
                                     <MenuItem value={"G-1103"}>G-1103</MenuItem>
                                     <MenuItem value={"G-1104"}>G-1104</MenuItem>

                                       <MenuItem value={"G-1201"}>G-1201</MenuItem>
                                       <MenuItem value={"G-1202"}>G-1202</MenuItem>
                                       <MenuItem value={"G-1203"}>G-1203</MenuItem>
                                       <MenuItem value={"G-1204"}>G-1204</MenuItem>
                    </Select>

      </FormControl>
    )
  }
}
