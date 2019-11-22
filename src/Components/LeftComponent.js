import React from 'react'
import '../App.css'
import * as data from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Select from 'react-select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import { Switch, Route, Link } from 'react-router-dom';
const user= {
    name: 'Vasile Popescu',
    age: '99',
    homeworld: 'Polis massa',
    gender: 'Male',
    affiliations: "Alliance to Restore the Republic",
    image: "https://bootdey.com/img/Content/avatar/avatar7.png"
  
}

// const ExpansionPanel = withStyles({
//     root: {
//       border: '1px solid rgba(0, 0, 0, .125)',
//       boxShadow: 'none',
//       width: '100%',
//       borderRadius: 4,
//       '&:not(:last-child)': {
//         borderBottom: 0,
//       },
//       '&:before': {
//         display: 'none',
//       },
//       '&$expanded': {
//         margin: 'auto',
//       },
//     },
//     expanded: {},
//   })(MuiExpansionPanel);
  
//   const ExpansionPanelSummary = withStyles({
//     root: {
//       backgroundColor: 'rgba(0, 0, 0, .03)',
//       borderBottom: '1px solid rgba(0, 0, 0, .125)',
//       marginBottom: -1,
//       minHeight: 56,
//       '&$expanded': {
//         minHeight: 56,
//       },
//     },
//     content: {
//       '&$expanded': {
//         margin: '12px 0',
//       },
//     },
//     expanded: {},
//   })(MuiExpansionPanelSummary);
  
//   const ExpansionPanelDetails = withStyles(theme => ({
//     root: {
//       padding: theme.spacing(2),
//     },
//   }))(MuiExpansionPanelDetails);
  

export default class LeftComponent extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         expanded: "panel1",
    //     }
        
    // }

    // handleChange = (panel) => {
    //     if(this.state.expanded !== panel){
    //         this.setState({expanded: panel})
    //     }
    // }

    // componentDidMount() {
    //     data.getData()
    //     .then( (users) => {
    //       this.setState({ users: users });
    //     })
    // }

    
    render(){

        
        return(
            <div className="LeftComponent">
                <div className="row leftHeader">
                    <div className="col-4">
                        <img src={user.image} style={{height:'70px', width:'70px', borderRadius:'50%'}} alt=""/>
                    </div>
                    <div className="col-8 userHello">
                        Welcome {user.name}
                    </div>
                </div>
                <div>
                  <div className="container mainContainerLeft">
                    <div className="buttons">
                    <Link to='/my-matches'><button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns"> Matches</button></Link>
                    <Link to='/profiles-available'><button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns">Profiles Available</button></Link>
                    <Link to='/my-messages'><button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns">Messages</button></Link>
                    <Link to='/filter'><button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns">Filters</button></Link>
                    </div>
                </div>
                
                {/* <div className = "row leftBody">
                    
                    <div style ={{ width: '100%'}}>
                      <div>
                          <FormControl fullWidth component="fieldset">
                              <FormLabel >Looking for </FormLabel>
                              <RadioGroup aria-label="gender" name="gender" value={this.props.genderSelected} onChange={this.props.changeGender}>
                              <FormControlLabel value="female" control={<Radio />} label="Female" />
                              <FormControlLabel value="male" control={<Radio />} label="Male" />
                              <FormControlLabel value="Everyone" control={<Radio />} label="Everyone" />
                              </RadioGroup>
                          </FormControl>

                    </div>

                      <br/>

                      <div>
                      <FormControl fullWidth component="fieldset">
                          <FormLabel >Select desired species</FormLabel>
                          <Select 
                          value={this.props.selectedSpecies}
                          onChange={this.props.changeSpecies}
                          options={this.props.optionsSpecies}
                          isClearable = {true}
                          isSearchable={true}
                          style ={{ width: '100%'}}
                          />
                      </FormControl>
                      </div>

                      <br/>

                      <div>
                      <FormControl fullWidth component="fieldset">
                          <FormLabel >Select desired world</FormLabel>
                          <Select 
                          value={this.props.selectedHomeWorld}
                          onChange={this.props.changeHomeWorld}
                          options={this.props.optionsHome}
                          isClearable = {true}
                          isSearchable={true}
                          />
                      </FormControl>
                      </div>
                  </div> */}
                        
            </div>
            </div>
        )
    }
}