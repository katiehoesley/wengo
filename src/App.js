import './App.css';
import Transak from './Transak.jsx'
import NavBar from './NavBar.jsx'
import NFTCollection from './NFTCollection.jsx'
import lizards from "./images/contemplative-reptile.jpg"
import dolphin from "./images/download-1.jpg"

function App() {
  const NFTS = [
    { title: "LIZZY THE LIZARD", decription: "lizards rock!", id: 1, img: lizards }, 
    { title: "DORIS THE DOLPHIN", decription: "what a cute dolphin", id: 1, img: dolphin }, 

  ]
  return (
    <div className="App">
      <NavBar />
      <NFTCollection nft_collection={ NFTS }/>
      <Transak/>
    </div>
  );
}

export default App;
