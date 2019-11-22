import React from 'react';
import ModaLProfile from './Components/Modal'
import UserProfile from './Components/UserProfile'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftComponent from './Components/LeftComponent';
import RightComponent from './Components/RightComponent'
import MessagesRightSection from './Components/MessagesRightSection'
import LeftSide from './Components/LeftSide';
import Matches from './Components/Matches'
import Filter from './Components/Filter'
import { Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';



const user= {
  name: 'Vasile Popescu',
  age: '99',
  homeworld: 'Polis massa',
  gender: 'Male',
  affiliations: "Alliance to Restore the Republic",
  image: "https://bootdey.com/img/Content/avatar/avatar7.png"

}

class App extends React.Component{
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
          species: ''
        }
      ],

      checkBoxThatOpensModal: false,

      genderSelected: 'Everyone',
      selectedHomeWorld: null,
      selectedSpecies: null,
      newMatchId : ''
    }
  }
  componentDidMount() {
    axios.get('https://melroune.github.io/starwars-api/api/all.json')
    .then(res => {
      console.log(res.data[0]);
      let arr = [];
      res.data.map( (item, index, wholeArray) => {
        let image = item.image;
        let name= item.name
        let gender= item.gender
        let height= item.height
        let homeworld= item.homeworld
        let affiliations= item.affiliations
        let species = item.species
        arr.push({image, name, gender, height, homeworld, affiliations, species})
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
    
    changeGender = (event) => {
      this.setState({
        genderSelected: event.target.value
      })
    }

    changeHomeWorld = selectedHomeWorld => {
      this.setState({ selectedHomeWorld });
    };

    changeSpecies = selectedSpecies => {
      this.setState({ selectedSpecies });
      console.log(`Option selected:`, selectedSpecies);
    };
    addMatch(idOfMatch){
      this.setState({
        newMatchId: idOfMatch
      })
  
      console.log(idOfMatch)
    }

    render(){
      if(this.state.arr === undefined) return <div>loading ...</div>

        let displayedProfiles = this.state.arr;

        
        if(this.state.genderSelected === 'Everyone') {
          displayedProfiles = this.state.arr
        } else {
          displayedProfiles = displayedProfiles.filter( user => user.gender === this.state.genderSelected)
         }
        
        const homeWorldList = Array.from(
          new Set(
            this.state.arr.map(user => user.homeworld).flat(1).filter(el => el !== undefined)
          )
        )
        console.log(homeWorldList)

        class Option {
          constructor(value, label) {
            this.value = value;
            this.label =  label;
          }
        }
        
        const optionsHome = homeWorldList.map(item => new Option(item, item))
        
        if(this.state.selectedHomeWorld) {
          displayedProfiles = displayedProfiles.filter(user => user.homeworld === this.state.selectedHomeWorld.value)
        }

        const speciesList = Array.from(
          new Set(
            this.state.arr.map(user => user.species).flat(1).filter(el => el !== undefined)
          )
        )

        const optionsSpecies = speciesList.map(item => new Option(item, item))
        
        if(this.state.selectedSpecies) {
          displayedProfiles = displayedProfiles.filter(user => user.species === this.state.selectedSpecies.value)
        }

        let results = displayedProfiles.map((item, i)=> (
          <div className="profileCardRight">
          <UserProfile
          onClick={() => {
          let index = this.state.arr.findIndex(x => x.name=== item.name);
          this.checkBoxThatOpensModalFunction(index)}}
        image={item.image}
        height={item.height}
        name={item.name}
        gender={item.gender}
        homeworld={item.homeworld}
        />
        </div>
        ))
        
 
  
   
  return (
    <>
    <Switch>
        <Route path='/my-matches' render={(props) => <Matches newMatchId={this.state.newMatchId}/>}/>
        <Route path='/profiles-available' render={(props) => <RightComponent newMatch={this.addMatch.bind(this)} />}/>
        <Route path='/my-messages' component={MessagesRightSection}/>
        <Route path='/filter' component={(props) => <Filter
        genderSelected = {this.state.genderSelected}
        changeGender ={this.changeGender}
        selectedSpecies ={this.state.selectedSpecies}
        changeSpecies={this.changeSpecies}
        optionsSpecies={optionsSpecies}
        selectedHomeWorld={this.state.selectedHomeWorld}
        optionsHome ={optionsHome}
        changeHomeWorld= {this.changeHomeWorld}/>}/>
    </Switch>
      
    <div className="App">
      <header className="App-header">
        <div className="RightComponent">
          <div className="rightTop">
          <h2>We found these people for you</h2>
          </div>

          <div className="container results" >
          {(results.length === 0)? 
          (<div style = {{position: 'absolute',
                          top: '50%',
                          left: '50%',                          
                          transform: 'translate(-50%,-50%)'}}>
            Sorry there is no matches for your search</div>) : results}
          </div>
        </div>

        <ModaLProfile 
          show={this.state.checkBoxThatOpensModal} 
          xBtnInfo={this.handleXBtn.bind(this)}
          name={this.state.arr[this.state.index].name}
          picture={this.state.arr[this.state.index].image}
          gender={this.state.arr[this.state.index].gender}
          homeworld={this.state.arr[this.state.index].homeworld}
          affiliations={this.state.arr[this.state.index].affiliations}
          height={this.state.arr[this.state.index].height}
          animation={true}
          scrollable={true}
          size='lg'/>

        
        <LeftSide/>
      </header>
    </div>
    </>
    
  )
  }
}

export default App;
