import React from 'react';
import RightComponent from './Components/RightComponent'
import MessagesRightSection from './Components/MessagesRightSection'
import LeftSide from './Components/LeftSide';
import Matches from './Components/Matches';
import Homepage from './Components/Homepage';
import './Style/style.scss';

import { Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';

const LOCALSTORAGE_KEY = 'someJson';


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
    // this.setState({ json })
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
  // setTimeout( () => this.loadJson(), 5000);
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
          <Homepage saveJson={this.getData} signUp={this.enterTheApp.bind(this)}/>
        )
      } else {
        return (
        <div className="App">
      <header className="App-header">

      <Switch>
        <Route path='/my-matches' render={(props) => <Matches newMatchId={this.state.newMatchId}/>}/>
        <Route path='/profiles-available' render={(props) => <RightComponent newMatch={this.addMatch.bind(this)} />}/>
        <Route path='/my-messages' component={MessagesRightSection}/>
      </Switch>
  
        <LeftSide userImage={user.image} userName={user.name}/>

      </header>
    </div>
  );
      }
    }


}

export default App;
