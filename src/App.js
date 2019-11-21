import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserProfile from './Components/UserProfile.js'


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
        <UserProfile {...user}/>
      </header>
    </div>
  );
}

export default App;
