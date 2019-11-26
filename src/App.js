import React from 'react';
import UserProfile from './Components/UserProfile'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import RightComponent from './Components/RightComponent'
import LeftSide from './Components/LeftSide';
import Matches from './Components/Matches';
import Homepage from './Components/Homepage';
import MessagesComponent from './Components/MessagesComponent.js';
import Filter from './Components/Filter'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/style.scss';
import './App.css';

const LOCALSTORAGE_KEY = 'someJson';


const user= {
  // name: 'Vasile Popescu',
  age: '99',
  homeworld: 'Polis massa',
  gender: 'Male',
  affiliations: "Alliance to Restore the Republic",
  image: "https://bootdey.com/img/Content/avatar/avatar7.png"

}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newMatchId : '',
      json: window.localStorage.getItem(LOCALSTORAGE_KEY),
      isVisible : true,

      genderSelected: 'Everyone',
      selectedHomeWorld: null,
      selectedSpecies: null,
      newMatchId : '',

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
    }
  }
  componentDidMount() {
    axios.get('https://melroune.github.io/starwars-api/api/all.json')
    .then(res => {
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
  validateJson(json) {
    let validJson

    try {
        validJson = JSON.stringify(this.state.json, null, 2)
    } catch (e) {
        throw e
    }

    return validJson
}

loadJson = () => {
    const json = window.localStorage.getItem(LOCALSTORAGE_KEY)
    this.setState({ json })
    console.log(json);
}

saveJson = () => {
    const validJson = this.validateJson(this.state.json)

    if (!validJson) return;

    window.localStorage.setItem(
        LOCALSTORAGE_KEY,
        validJson
    )
}
getData = (json) => {
  this.setState({
    json: json
  })
  setTimeout( () => this.saveJson(), 1000)
  // setTimeout( () => this.loadJson(), 1500);
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

  enterTheApp(clicked){
    this.setState({
      isVisible: false
    })
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

      // SETTING SIGN-UP PAGE AS HOMEPAGE
      // console.log(window.localStorage.getItem(LOCALSTORAGE_KEY))
      if(this.state.isVisible) {
        return(
          <Homepage saveJson={this.getData} signUp={this.enterTheApp.bind(this)}/>
        )
      } else {
        if(this.state.json === {}){
          // USED TO BE : if(this.state.json == {}){
          this.loadJson();
        } 
        return (
        <div className="App">
      <header className="App-header">
          <RightComponent filterResults={displayedProfiles}/>


          {/* REACT ROUTER START */}
      <Switch>
        <Route path='/my-matches' render={(props) => 
          <Matches 
          newMatchId={this.state.newMatchId} 
          write={true}/>}
          />
        <Route path='/profiles-available' render={(props) => 
          <RightComponent 
          newMatch={this.addMatch.bind(this)} 
          filterResults={displayedProfiles}/>}
          />
        <Route path='/my-messages' render={(props) => 
          <MessagesComponent 
          userImage={user.image}/>}
          />
        <Route path='/filter' component={(props) => 
          <Filter
          genderSelected = {this.state.genderSelected}
          changeGender ={this.changeGender}
          selectedSpecies ={this.state.selectedSpecies}
          changeSpecies={this.changeSpecies}
          optionsSpecies={optionsSpecies}
          selectedHomeWorld={this.state.selectedHomeWorld}
          optionsHome ={optionsHome}
          changeHomeWorld= {this.changeHomeWorld}/>}/>
      </Switch>

          {/* REACT ROUTER END */}

  
        <LeftSide userImage={user.image} userName={this.state.json.firstName}/>

      </header>
    </div>
  );
      }
    }

    // <div className="App">
    //   <header className="App-header">
    //     <div className="RightComponent">
    //       <div className="rightTop">
    //       <h2>We found these people for you</h2>
    //       </div>

    //       <div className="container results" >
    //       {(results.length === 0)? 
    //       (<div style = {{position: 'absolute',
    //                       top: '50%',
    //                       left: '50%',                          
    //                       transform: 'translate(-50%,-50%)'}}>
    //         Sorry there is no matches for your search</div>) : results}
    //       </div>
    //     </div>

}

export default App;
