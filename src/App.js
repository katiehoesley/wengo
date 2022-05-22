import NavBar from "./NavBar.jsx";
import GettingStarted from "./GetStarted.jsx";
import "./styles.css";
import UserPage from "./UserPage.jsx";
import GetStarted from "./GetStarted.jsx";
import NFTCollection from "./NFTCollection.jsx";
import Leaderboard from "./Leaderboard.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/home' element={<GetStarted/>} />
        <Route path='/my-nft' element={<UserPage/>} />
        <Route path='/gallery' element={<NFTCollection/>} />
      </Routes>
    </div>
  );
}

export default App;
