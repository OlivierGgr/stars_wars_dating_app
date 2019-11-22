import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserProfile from './Components/UserProfile.js'
import LeftSide from './Components/LeftSide';


const user= {
  name: 'Vasile Popescu',
  age: '99',
  homeworld: 'Polis massa',
  gender: 'Male',
  affiliations: "Alliance to Restore the Republic",
  image: "https://bootdey.com/img/Content/avatar/avatar7.png"

}

function App() {
  return (
    <div >
      <header>
        {/* <UserProfile {...user}/> */}
        <LeftSide userImage={user.image} userName={user.name}/>
      </header>
    </div>
  );
}

export default App;
