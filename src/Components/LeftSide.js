import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



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

                <div className="container">
                    <button type="button" className="btn btn-secondary btn-lg btn-block">Maches</button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block">Messages</button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block">Filters</button>
                </div>

            </div>


        )
    }
}

export default LeftSide;