import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

let user = {
    name: '',
    age: '99',
    homeworld: 'Polis massa',
    gender: 'Male',
    affiliations: "Alliance to Restore the Republic",
    image: "https://bootdey.com/img/Content/avatar/avatar7.png"
  
}


export default class LeftComponent extends React.Component {

    componentDidUpdate(){
        user = {
            name: this.props.userName
        }
        console.log('firstName from sign up : '+user.name)
    }
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