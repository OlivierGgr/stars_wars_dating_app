import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Select from 'react-select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export default class Filter extends React.Component {

    render(){
        return(

            <div className = "leftBody">
                <AppBar position="static" >
                    <Toolbar className="filterHeader">
                        <Typography variant="h5" className="title" disabledGutters="true">
                        SETTINGS
                        </Typography>
                        <Button color="inherit"><Link to='/profiles-available'>X</Link></Button>
                    </Toolbar>
                </AppBar>

                    <div className="filterBody" style ={{ width: '100%'}}>
                        <div>
                            <FormControl fullWidth component="fieldset">
                                <FormLabel className="filterLabels">I'm interested in </FormLabel>
                                <RadioGroup aria-label="gender" name="gender" value={this.props.genderSelected} onChange={this.props.changeGender}>
                                <FormControlLabel value="female" className="filterRadio" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" className="filterRadio" control={<Radio />} label="Male" />
                                <FormControlLabel value="Everyone" className="filterRadio" control={<Radio />} label="Everyone" />
                                </RadioGroup>
                            </FormControl>

                        </div>

                        <br/>

                        <div>
                        <FormControl fullWidth component="fieldset">
                            <FormLabel className="filterLabels">Select desired species</FormLabel>
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
                            <FormLabel className="filterLabels" >From</FormLabel>
                            <Select 
                            value={this.props.selectedHomeWorld}
                            onChange={this.props.changeHomeWorld}
                            options={this.props.optionsHome}
                            isClearable = {true}
                            isSearchable={true}
                            />
                        </FormControl>
                        </div>

                </div>
            </div>
        )
    }
}