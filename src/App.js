import SignUpPage from './Containers/SignUpPage';

import React from 'react';
import RightComponent from './Containers/RightComponent'
// import MessagesRightSection from './Components/MessagesRightSection'
import LeftSide from './Containers/LeftSide';
import Matches from './Components/Matches';
// import Homepage from './Components/Homepage';
import MessagesComponent from './Components/MessagesComponent.js';
import './Style/style.scss';

import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';

const LOCALSTORAGE_KEY = 'someJson';


const user= {
  image: "https://bootdey.com/img/Content/avatar/avatar7.png"
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newMatchId : '',
      json: window.localStorage.getItem(LOCALSTORAGE_KEY),
      isVisible : true
    }
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
  console.log(json);
  this.setState({
    json: json
  })
  setTimeout( () => this.saveJson(), 1000)
}


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
      console.log(window.localStorage.getItem(LOCALSTORAGE_KEY))
      if(this.state.isVisible) {
        return(
          <div>
          {/* <Homepage saveJson={this.getData} signUp={this.enterTheApp.bind(this)}/> */}
          <SignUpPage saveJson={this.getData} signUp={this.enterTheApp.bind(this)}/>
          </div>

        )
      } else {
        if(this.state.json == {}){
          this.loadJson();
        }
        return (
        <div className="App">
      <header className="App-header">
        
      <Switch>
        <Redirect exact from='/' to='/profiles-available' />
        <Route path='/sign-up' Component={<SignUpPage/>} />
        <Route path='/profiles-available' render={(props) => <RightComponent newMatch={this.addMatch.bind(this)} />}/>
        <Route path='/my-matches' render={(props) => <Matches newMatchId={this.state.newMatchId}/>}/>
        <Route path='/my-messages' render={(props) => <MessagesComponent userImage={user.image}/>
}/>
      </Switch>
  
        <LeftSide userImage={user.image} 
          // userName={this.state.json.firstName}
          />

      </header>
    </div>
  );
      }
    }


}

export default App;
