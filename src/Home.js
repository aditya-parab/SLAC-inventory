
import React, {useState} from 'react';
import { Button, Grid,Typography} from '@material-ui/core';
import QrReader from 'react-qr-reader';

import {makeStyles} from '@material-ui/core';
import SearchBar from "material-ui-search-bar"; 
import MoveIcon from '@material-ui/icons/ZoomOutMap';
import MapIcon from '@material-ui/icons/Map';





const Home = () => {
  const classes = useStyles()
  
    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const [state, setState] =  useState({
      value:""
    });
    

    //dummy function for now
    const handleSearch = (newValue) => {
      setState({ value: newValue })
      console.log(state)
    }
     
    

    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    
    const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result);
            console.log(scanResultWebCam)
        }
    }


    return (
      
                <Grid container className={classes.container} justify = "center"  >
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12} >

                  <Typography className={classes.title} variant="h3" >Scan the Item</Typography>
          
                        <QrReader 
                        delay={300}
                        style={{width: '100%', color:"green"}}
                        onError={handleErrorWebCam}
                        onScan={handleScanWebCam}
                        />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SearchBar
           
                  value={state.value}
                  onChange={(newValue) => setState({ value: newValue })}
            onRequestSearch={() => handleSearch(state.value)}
            style={{width:"75%"}}
            />
            
          </div>
          
<div style={{ display: "flex", justifyContent: "space-around"}}>

            <Button 
            className={classes.btn}
                variant="contained"
                endIcon={<MoveIcon/>}
                href="/scanitem">
                Move
          </Button>
          
          <Button 
            className={classes.btn}
                variant="contained"
                endIcon={<MapIcon/>}
                href="/map">
                Map
            </Button>
          
          </div>
         

                </Grid>

                
                </Grid>

   
        
       
         



     );
}

const useStyles = makeStyles((theme) => ({
    container: {
    marginTop: 10,
      textAlign:"center"
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
     background: '#90030B',
      color: '#fff',
      padding: 20
    },
    btn : {

      color:"white",
      background: '#90030B',
      width:"25%"
    }
}));
 
export default Home;