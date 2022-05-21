import dolphin from "./images/download-1.jpg"
import Button from '@mui/material/Button';
import * as React from 'react';
import SingleNFT from './SingleNFT.jsx'
import './styles.css'


function UserPage () { 
    const NFT = {
        img: dolphin, 
    }

    const tree_info = "Here is some information about this tree. It's cool, eh?"
    const available_matic_to_claim = "15.67"
    const average_matic_a_day = "3.67395"
    const average_of_your_forest = 5
    return(
        <div className="user_page" id="grid-container">
            

            <div id="average_of_forest">
                <div>
                    <h1>Total average of your forest</h1>
                    <h2>{average_of_your_forest}</h2>
                    { tree_info }
                </div>

                <div id="total_earned">
                    <h1>available MATIC to claim:</h1> { available_matic_to_claim }
                    <Button id="button" variant="contained">claim</Button>
                    <h4>average {average_matic_a_day} MATIC daily</h4>
                </div>
            </div>

            <div id="staked_nft">
                <div id="nft_image">
                    <SingleNFT nft={NFT}/>
                </div>
                <div id="buttons">
                    <Button id="button" variant="contained">Stake</Button>
                    <Button id="button" variant="contained">Unstake</Button>
                </div>
            </div>

        </div>
    )
}

export default UserPage  


