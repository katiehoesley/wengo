import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import SignUp from './SignUp.jsx'

function UpcomingEvents() {
    return(
        <div id="upcoming">
        <h1>upcoming wengo events!</h1>
        <h4>Check out the community's current and upcoming events! </h4>
          <Button variant="contained" id="view-nft-button">
            <Link id="link-title" to='/signup'  element={<SignUp/>}>
            <h4 id="events">EVENTS</h4>
            </Link>
          </Button>
      </div>
      
    )
}

export default UpcomingEvents; 