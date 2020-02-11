import React from 'react'
import Particles from 'react-particles-js';
import { connect } from  'react-redux';

import UserProfile from '../Components/UserProfile'
import ModaLProfile from '../Components/Modal'
import '../App.css'

import axios from 'axios';


class RightComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            picture : '',
            name: '',
            gender: '',
            height: '',
            homeworld: '',
            affiliations: [],
            index: 0,
            arr : [
              {
                image: "",
                name:'',
                gender:'',
                height:'',
                homeworld:'',
                affiliations:'',
                id: ''
              }
            ],
      
            checkBoxThatOpensModal: false
          }
        }
        componentDidMount() {
          axios.get('https://melroune.github.io/starwars-api/api/all.json')
          .then(res => {
            console.log(res.data[0]);
            let arr = [];
            res.data.map( (item, index, wholeArray) => {
              let id = item.id
              let image = item.image;
              let name= item.name
              let gender= item.gender
              let height= item.height
              let homeworld= item.homeworld
              let affiliations= item.affiliations
              arr.push({id,image, name, gender, height, homeworld, affiliations})
            })
            this.setState({
              flagForModal : false,
              arr : arr
            });
          });
          }
        
          checkBoxThatOpensModalFunction = (i) => {
            console.log('checkbox function triggered')
            this.setState({checkBoxThatOpensModal: true,
              index: i})
            console.log('checkBoxThatOpensModal :  '+ this.state.checkBoxThatOpensModal)
            console.log(this.state.arr[i].affiliations)
          }
      
          handleXBtn(XArgument){
            this.setState({
              checkBoxThatOpensModal: false
            })
            console.log('qsdfgh')
          }
    
          sendProfileToMatch(propsfromModal){
              this.props.newMatch(this.state.arr[propsfromModal-1])
          }

    render(){
        return(
            <div className="RightComponent">


             <div className="rightTop">
                <h2 style={{marginTop:"3%"}}>Name of the section in use</h2>
                </div>
  
                <div className="container results" >
                <div className='particlesContainer'>
                    <Particles
                        style={{
                            // position: "absolute",
                            // top: 0,
                            // left: 0,
                            // width: "100%",
                            // height: "100%"
                            position: 'fixed!',
                            top: '0px',
                            left: '35.5%',
                            // width: '66%',
                            // height: '100%'
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
            {this.state.arr.map((item, i)=> (
                        <div className="profileCardRight">
                            <UserProfile
                            onClick={() => this.checkBoxThatOpensModalFunction(i)}
                            image={item.image}
                            height={item.height}
                            name={item.name}
                            gender={item.gender}
                            affiliations={item.affiliations}
                            homeworld={item.homeworld}
                            />
                        </div>
                        ))}

                        <ModaLProfile 
                            show={this.state.checkBoxThatOpensModal} 
                            xBtnInfo={this.handleXBtn.bind(this)}
                            name={this.state.arr[this.state.index].name}
                            picture={this.state.arr[this.state.index].image}
                            gender={this.state.arr[this.state.index].gender}
                            homeworld={this.state.arr[this.state.index].homeworld}
                            affiliations={this.state.arr[this.state.index].affiliations}
                            height={this.state.arr[this.state.index].height}
                            id={this.state.arr[this.state.index].id}
                            animation={true}
                            scrollable={true}
                            size='lg'
                            isMatch={this.sendProfileToMatch.bind(this)}
                        />
                    </div>
               </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.firstName
    }
}

export default connect(mapStateToProps) (RightComponent);