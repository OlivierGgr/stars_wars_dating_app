import React, { Component } from 'react';
import UserProfile from './UserProfile';

import '../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

class Matches extends Component {
    constructor(props){
        super(props);
        this.state = {
            idsOfMatches : []
        }
    }

    handleNewmatch(newMatchId){
        this.setState({
            idsOfMatches : this.state.idsOfMatches.push(newMatchId)
        })
    }

    newMatch = this.props.newMatchId
    render() {
        return (
            <div className='MatchesSection'>
                <div className="emptyMatches">
                    <h2>No matches... yet ;-)</h2>
                </div>
                <UserProfile
          image={this.newMatch.image}
          height={this.newMatch.height}
          name={this.newMatch.name}
          gender={this.newMatch.gender}
          homeworld={this.newMatch.homeworld}
          />
            </div>
        )
    }
}

export default Matches;