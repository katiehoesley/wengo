import NavBar from "./NavBar.jsx";
import "./styles.css";
import UserPage from "./UserPage.jsx";
import GetStarted from "./GetStarted.jsx";
import NFTCollection from "./NFTCollection.jsx";
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  Switch
} from "react-router-dom";
import BottomNav from './BottomNav.jsx'


function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/home' element={<GetStarted/>} />
        <Route path='/my-nft' element={<UserPage/>} />
        <Route path='/gallery' element={<NFTCollection/>} />
      </Routes>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav/>
    </div>
  );
}

export default App;
