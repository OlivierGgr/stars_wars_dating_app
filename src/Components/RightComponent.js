import React from 'react'
import UserProfile from './UserProfile'
import ModaLProfile from './Modal'
import '../App.css'

import axios from 'axios';


export default class RightComponent extends React.Component {
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
            {/* <h2>We found these people for you</h2> */}
                </div>
  
                <div className="container results" >
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
          isMatch={this.sendProfileToMatch.bind(this)}/>
                </div>
            </div>
            
        )
    }
}
