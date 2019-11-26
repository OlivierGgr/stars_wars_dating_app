import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';

export default class Filter extends React.Component {
    render(){
        return(

                <div className = "leftBody">
                    <div style ={{ width: '100%'}}>
                        <div className="row">
                        <h2>SETTINGS</h2>
                        <button>X</button>
                        </div>

                        <div>
                            <FormControl fullWidth component="fieldset">
                                <FormLabel >I'm interested in </FormLabel>
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

                </div>
            </div>
        )
    }
}