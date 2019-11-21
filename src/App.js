import React from 'react';
import ModaLProfile from './Components/Modal'
import UserProfile from './Components/UserProfile'

import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <div className="rightTop">
          <h2>We found these people for you</h2>
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
          homeworld={item.homeworld}
          />
           
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

        <div className="LeftComponent">
          <div className="row leftHeader">
            <div className="col-4">
              <img src={this.state.arr[0].image} style={{height:'70px', width:'70px', borderRadius:'50%'}} alt=""/>
            </div>
            <div className="col-8 userHello">
              Hello USERNAME
            </div>

          </div>
        </div>
      </header>
    </div>
  );
    }
}

export default App;
