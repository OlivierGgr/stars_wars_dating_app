import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Link } from 'react-router-dom'




class LeftSide extends Component {

    render() {
        return (

            <div className='leftSideBody'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={this.props.userImage} alt="" />
                        </a>
                        <h1>Hello {this.props.userName}</h1>
                    </div>

                </nav>

                <div className="container mainContainerLeft">
                    <div className="buttons">
                    <button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns"><Link to='/my-matches'>Matches</Link></button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns"><Link to='/profiles-available'>Profiles Available</Link></button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns"><Link to='/my-messages'>Messages</Link></button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns">Filters</button>
                    </div>
                </div>


            </div>


        )
    }
}

export default LeftSide;