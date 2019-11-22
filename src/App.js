import React from 'react';
import Homepage from './Components/Homepage';

const LOCALSTORAGE_KEY = 'someJson';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      json: window.localStorage.getItem(LOCALSTORAGE_KEY)
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

render(){
  // this.loadJson()
  console.log(window.localStorage.getItem(LOCALSTORAGE_KEY))
  return (
    <div className="App">
      <Homepage saveJson={this.getData}/>
    </div>
  );
}

}

export default App;
