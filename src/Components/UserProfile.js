import React, { Component } from 'react';
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
              <ul>{Array.from(aff).map(affiliation => <li key={affiliation} className="profilesLikes"> {affiliation} </li>)}</ul>
            </div>
          );
    }
    render() {
        return (
            <div className="container profile-page">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card profile-header">
                            <div className="body profile-body">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-left"> <img src={this.props.image} alt={this.props.name} onClick={this.props.onClick} style={{height: '250px', width: '200px'}} /> </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-12">

                                        <ul className="bullet">
                                            <li><h3 className="m-t-0 m-b-0"><strong>{this.props.name}</strong></h3></li>
                                            <li><span className='height'>{this.props.height} cm</span></li>
                                            <span className="listAlignLeft">
                                                <span className="listAlignTop">
                                                    <li>{this.props.gender} </li>
                                                    <li>{this.props.homeworld} </li>
                                                </span>
                                                <span className="listAlignBottom">
                                                    <li>Likes :{this.affiliationList()}</li>
                                                </span>
                                            </span>
                                        </ul>
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
