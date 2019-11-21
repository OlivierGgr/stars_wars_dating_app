import React from 'react';
import ModaLProfile from './Components/Modal'
// import RightComponent from './Components/RightComponent'

import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
          affiliations:''
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
        let image = item.image;
        let name= item.name
        let gender= item.gender
        let height= item.height
        let homeworld= item.homeworld
        let affiliations= item.affiliations
        arr.push({image, name, gender, height, homeworld, affiliations})
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

    render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="RightComponent">

          <div className="container" style={{}}>
          {this.state.arr.map((item, i)=> (
                      <div>
            <a onClick={() => this.checkBoxThatOpensModalFunction(i)}>
              <img src={item.image} style={{height: '250px', width: '200px'}} className="luke" alt="luke" />
            </a>

            <p>{item.name}</p>
           
          </div>
          ))}
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

      </header>
    </div>
  );
    }
}

export default App;
