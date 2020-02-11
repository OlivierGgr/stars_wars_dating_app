import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


import { connect } from  'react-redux';



class LeftSide extends Component {

    render() {
        // console.log(this.state.auth);
        return (
            <div className='leftSideBody'>
                <nav className="navbar navbar-expand-lg navbar-dark static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={this.props.userImage} alt="" />
                        </a>
                        <h2>Hello {this.props.userName}</h2>
                    </div>

                </nav>

                <div className="container mainContainerLeft">
                    <div className="buttons">
                        <Button
                            variant='text'
                            size='large'
                            className='signUpButton leftSideBtns'
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={this.handleSubmit}
                            >
                            <Link to='/my-matches'>Matches</Link>
                        </Button>
                        <Button
                            variant='text'
                            size='large'
                            className='signUpButton leftSideBtns'
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={this.handleSubmit}
                            >
                            <Link to='/profiles-available'>Profiles Available</Link>
                        </Button>
                        <Button
                            variant='text'
                            size='large'
                            className='signUpButton leftSideBtns'
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={this.handleSubmit}
                            >
                            <Link to='/my-messages'>Messages</Link>
                        </Button>
                        <Button
                            variant='text'
                            size='large'
                            className='signUpButton leftSideBtns'
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={this.handleSubmit}
                            >
                            Filters
                        </Button>
                    </div>
                </div>


            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.firstName,
        lastName: state.auth.lastName,
        age: state.auth.age,
        gender: state.auth.gender,
        lookingFor: state.auth.lookingFor,
        homeworld: state.auth.homeworld,
        jedi: state.auth.jedi,
        affiliation: state.auth.affiliation,
    }
}

export default connect(mapStateToProps) (LeftSide);