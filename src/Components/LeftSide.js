import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Switch, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';



class LeftSide extends Component {

    render() {
        return (

            <div className='leftSideBody'>
                <nav className="navbar navbar-expand-lg navbar-dark static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={this.props.userImage} alt="" />
                        </a>
                        <h1>Hello {this.props.userName}</h1>
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

export default LeftSide;