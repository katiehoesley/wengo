import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css'
import SpaIcon from '@mui/icons-material/Spa';

export default function SingleNFT({ nft }) {
    const singleNFT = 
    <div className="grid-item" id="nft">
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={nft.img}
            />
            <CardActions>
                <Button id="button" size="small" onClick={()=>alert('go to page pls')}>DETAILS</Button>
                <Button id="button" size="small"><SpaIcon/></Button>
            </CardActions>
        </Card>
    </div>

    

  return (
      <div>
          {singleNFT}
      </div>
  );
}
