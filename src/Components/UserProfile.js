import React, { Component } from 'react';
import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';



class UserProfile extends Component {
    affiliationList = () => {
        let aff = this.props.affiliations
        if (this.props.affiliations === undefined) {
          aff = [""];
        }

        aff = aff.slice(0,3)
        return(
            <div>
              <ul>{Array.from(aff).map(affiliation => <li key={affiliation} className="profilesLikes" style={{listStyle: "none"}}> {affiliation} </li>)}</ul>
            </div>
          );
    }
    writeBtn = () => {
        if(this.props.matched){
            return(
                <Button variant='success'><Link to="/my-messages">Write a message</Link></Button>
            )
        }
    }
    render() {
 
        return (
            <div className="container profile-page">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card profile-header">
                            <div className="body">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-left"> <img src={this.props.image} alt={this.props.name} onClick={this.props.onClick} style={{height: '250px', width: '200px'}} /> </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-12">
                                        {/* <h4 className="m-t-0 m-b-0"><strong>Michael</strong> Deo</h4>
                                        <span className="job_post">Ui UX Designer</span><br/>
                                        <span className="job_post"> </span> */}
                                        <ul className="bullet">
                                            <li><h3 className="m-t-0 m-b-0"><strong>{this.props.name}</strong></h3></li>
                                            <li><span className='age'>{this.props.height} cm</span></li>
                                            <li style={{textAlign: "left", fontSize: "1.3em"}}><span style={{fontWeight: "bold"}}>Gender: </span>{this.props.gender} </li>
                                            <li style={{textAlign: "left", fontSize: "1.3em"}}><span style={{fontWeight: "bold"}}>Planet: </span>{this.props.homeworld} </li>
                                            <li style={{textAlign: "left", fontSize: "1.3em"}}><span style={{fontWeight: "bold"}}>Likes: </span>{this.affiliationList()}</li>
                                            {this.writeBtn()}
                                        </ul>

                                        {/* <div>
                                            <button className="btn btn-primary btn-round"><strong>+</strong></button>    
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default UserProfile;
