import React, { Component } from 'react';
import UserProfile from './UserProfile';
import Particles from 'react-particles-js';

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
                            <div>
                            No matches to display... yet
                            </div>
                </div>
        )
        }

    render() {
        return (
            <div>
                <div className='MatchesSection'>
                        <div className='particlesContainer'>
                    <Particles
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                        params={{
                            "particles": {
                                'shape': {
                                    'type': 'image',
                                    'image': {
                                        'src': require('../Image/heart.png'),
                                        'height': 10,
                                        'width': 10
                                    }
                                },
                                "number": {
                                    "value": 60,
                                    "density": {
                                        "enable": true,
                                        "value_area": 1500
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "opacity": 0.02
                                },
                                "move": {
                                    "speed": 1,
                                    "out_mode": "out"
                                },
                                "size": {
                                    "value": 5,
                                    "anim": {
                                        "enable": true,
                                        "speed": 4,
                                        "size_min": 10,
                                        "sync": false
                                    }
                                },
                                "opacity": {
                                    "anim": {
                                        "enable": true,
                                        "speed": 1,
                                        "opacity_min": 0.05
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    }
                                },
                                "modes": {
                                    "push": {
                                        "particles_nb": 1
                                    }
                                }
                            },
                            "retina_detect": false
                        }} />
                </div>
                    <div className="matches">
                        {this.noMatch()}
                    </div>
                </div>

            </div>
        )
    }
}


export default Matches;