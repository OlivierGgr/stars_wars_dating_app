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
    noMatch(){
        console.log(this.newMatch)
        if(this.newMatch){
            return (
                <UserProfile
          image={this.newMatch.image}
          height={this.newMatch.height}
          name={this.newMatch.name}
          gender={this.newMatch.gender}
          homeworld={this.newMatch.homeworld}
          />
            )
        } return(
                <div className="emptyMatches">
                    <img src={require(`./noMatches.png`)} className="brokenHeart"/>
                </div>
        )
        }

    render() {
        return (
            <div>
                <div className='MatchesSection'>
                    {this.noMatch()}
                </div>

            </div>
        )
    }
}


export default Matches;