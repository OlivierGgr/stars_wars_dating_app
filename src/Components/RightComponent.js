import React from 'react'
import UserProfile from './UserProfile'
import ModaLProfile from './Modal'
import '../App.css'

import axios from 'axios';


export default class RightComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterResults: this.props.filterResults,
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
          }
    
          sendProfileToMatch(propsfromModal){
              this.props.newMatch(this.state.arr[propsfromModal-1])
              console.log(propsfromModal)
              console.log(this.state.arr[propsfromModal-1])
          }

    render(){
        return(
            <div className="RightComponent">
             
             <div className="rightTop">
            {/* <h2>We found these people for you</h2> */}
                </div>
  
                <div className="container results" >
            {this.props.filterResults.map((item, i)=> (
                        
                        <div className="profileCardRight" key={i}>
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
          name={this.props.filterResults[this.state.index].name}
          picture={this.props.filterResults[this.state.index].image}
          gender={this.props.filterResults[this.state.index].gender}
          homeworld={this.props.filterResults[this.state.index].homeworld}
          affiliations={this.props.filterResults[this.state.index].affiliations}
          height={this.props.filterResults[this.state.index].height}
          id={this.props.filterResults[this.state.index].id}
          animation={true}
          scrollable={true}
          size='lg'
          isMatch={this.sendProfileToMatch.bind(this)}/>
                </div>
            </div>
            
        )
    }
}
