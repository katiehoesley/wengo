import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import './styles.css'
import UserPage from './UserPage.jsx'
import About from './About.jsx'

function App() {

  return (
    <div className="app">
        <NavBar/>
        <Home/>
        <UserPage/>
        <About />
    </div>
    )
  }

export default App;
