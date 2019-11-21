import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class UserProfile extends Component {

    render() {
        return (
            <div className="container profile-page">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-12">
                        <div className="card profile-header">
                            <div className="body">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-right"> <img src={this.props.image} alt="" /> </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-12">
                                        {/* <h4 className="m-t-0 m-b-0"><strong>Michael</strong> Deo</h4>
                                        <span className="job_post">Ui UX Designer</span><br/>
                                        <span className="job_post"> </span> */}
                                        <ul className="bullet">
                                            <li><h3 className="m-t-0 m-b-0"><strong>{this.props.name}</strong>, <span className='age'>{this.props.age}</span></h3></li><br/><br/>
                                            <li>{this.props.gender} </li>
                                            <li>{this.props.homeworld} </li>
                                            <li>{this.props.affiliations}</li>
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
