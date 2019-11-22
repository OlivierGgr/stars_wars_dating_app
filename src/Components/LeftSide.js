import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './Filter'
import { Switch, Route, Link } from 'react-router-dom'



const user= {
    name: 'Vasile Popescu',
    age: '99',
    homeworld: 'Polis massa',
    gender: 'Male',
    affiliations: "Alliance to Restore the Republic",
    image: "https://bootdey.com/img/Content/avatar/avatar7.png"
  
}
class LeftSide extends Component {

    render() {
        return (

            <div className='leftSideBody'>
                 <div className="row leftHeader">
                    <div className="col-4">
                        <img src={user.image} style={{height:'70px', width:'70px', borderRadius:'50%'}} alt=""/>
                    </div>
                    <div className="col-8 userHello">
                        Welcome {user.name}
                    </div>
                </div>

                <div className="container mainContainerLeft">
                    <div className="buttons">
                    <Link to='/my-matches'><button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns"> Matches</button></Link>
                    <Link to='/profiles-available'><button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns">Profiles Available</button></Link>
                    <Link to='/my-messages'><button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns">Messages</button></Link>
                    <Link to='/filter'><button type="button" className="btn btn-secondary btn-lg btn-block leftSideBtns">Filters</button></Link>
                    </div>
                </div>


            </div>


        )
    }
}

export default LeftSide;