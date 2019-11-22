import React from 'react';
import RightComponent from './Components/RightComponent'
import MessagesRightSection from './Components/MessagesRightSection'
import LeftSide from './Components/LeftSide';
import Matches from './Components/Matches'

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
    this.state={
      newMatchId : ''
    }
    // this.state = {
  //     picture : '',
  //     name: '',
  //     gender: '',
  //     height: '',
  //     homeworld: '',
  //     affiliations: [],
  //     index: 0,
  //     arr : [
  //       {
  //         image: "",
  //         name:'',
  //         gender:'',
  //         height:'',
  //         homeworld:'',
  //         affiliations:''
  //       }
  //     ],

  //     checkBoxThatOpensModal: false
  //   }
  // }
  // componentDidMount() {
  //   axios.get('https://melroune.github.io/starwars-api/api/all.json')
  //   .then(res => {
  //     console.log(res.data[0]);
  //     let arr = [];
  //     res.data.map( (item, index, wholeArray) => {
  //       let image = item.image;
  //       let name= item.name
  //       let gender= item.gender
  //       let height= item.height
  //       let homeworld= item.homeworld
  //       let affiliations= item.affiliations
  //       arr.push({image, name, gender, height, homeworld, affiliations})
  //     })
  //     this.setState({
  //       flagForModal : false,
  //       arr : arr
  //     });
  //   });
  //   }
  
  //   checkBoxThatOpensModalFunction = (i) => {
  //     console.log('checkbox function triggered')
  //     this.setState({checkBoxThatOpensModal: true,
  //       index: i})
  //     console.log('checkBoxThatOpensModal :  '+ this.state.checkBoxThatOpensModal)
  //     console.log(this.state.arr[i].affiliations)
  //   }

  //   handleXBtn(XArgument){
  //     this.setState({
  //       checkBoxThatOpensModal: false
  //     })
  //     console.log('qsdfgh')
  //   }
  }

  addMatch(idOfMatch){
    this.setState({
      newMatchId: idOfMatch
    })

    console.log(idOfMatch)
  }


    render(){
  return (
    <div className="App">
      <header className="App-header">

      <Switch>
        <Route path='/my-matches' render={(props) => <Matches newMatchId={this.state.newMatchId}/>}/>
        <Route path='/profiles-available' render={(props) => <RightComponent newMatch={this.addMatch.bind(this)} />}/>
        <Route path='/my-messages' component={MessagesRightSection}/>
      </Switch>
      {/* <RightComponent />
      <MessagesRightSection /> */}

        {/* <div className="RightComponent">
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
        </div> */}



        {/* <ModaLProfile 
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
          size='lg'/> */}
        <LeftSide userImage={user.image} userName={user.name}/>

        {/* <div className="LeftComponent">
          <div className="row leftHeader">
            <div className="col-4">
              <img src={this.state.arr[0].image} style={{height:'70px', width:'70px', borderRadius:'50%'}} alt=""/>
            </div>
            <div className="col-8 userHello">
              Hello USERNAME
            </div>

          </div>
          <div className="link">
          <ul>
            <li><Link to='/profiles-available'>Profiles Available</Link></li>
            <li><Link to='/my-messages'>Messages</Link></li>
          </ul>
          </div>
        </div> */}
      </header>
    </div>
  );
    }
}

export default App;
