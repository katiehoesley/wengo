import NavBar from "./NavBar.jsx";
import GettingStarted from "./GetStarted.jsx";
import "./styles.css";
import UserPage from "./UserPage.jsx";
import About from "./About.jsx";
import NFTCollection from "./NFTCollection.jsx";
import Leaderboard from "./Leaderboard.jsx";

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <GettingStarted /> */}
      <Leaderboard/>
      {/* <UserPage /> */}
      {/* <NFTCollection/> */}
      {/* <About />  */}
    </div>
  );
}

export default App;
