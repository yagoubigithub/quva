import React, {useEffect, useState, useRef} from 'react'
import './App.css';

import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';

//iconst

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}





function App() {
  
  const electron = window.require('electron')

  const remote = electron.remote;
  const [online,setOnline]  = useState(true)

  const [taskbar,setTaskBar]  = useState(null) 
  useEffect(() => {
    setOnline(window.navigator.onLine)
    const webview = document.getElementById("webview")
    
    window.addEventListener('offline', function(e) { 
      
      setOnline(false)
      
      console.log('You are offline, please check your internet connection'); 
    
    });

    window.addEventListener('online', function(e) { 
      setOnline(true)
      remote.getCurrentWebContents().reload()
      console.log('online'); 
    
    });
    
    setTaskBar(
      <div style={{backgroundColor : "#f2f2f2"}}>
  <IconButton disabled={!webview.canGoBack()}>
  
    <ArrowBackIosIcon />
  </IconButton>
  
  <IconButton> 
  
    <ArrowForwardIosIcon />
  </IconButton>
    </div>
    )

  }, [])
  
  const handleClose = () => {
    setOnline(false);
  };
  return (
    <div className="App">
    {taskbar}
   
    <webview id="webview"  src="https://courses.quvapro.com/" style={{width : "100vw" , height : "calc(100vh )" }} ></webview>
    <Snackbar
  open={!online}
  
  onClose={handleClose}
  anchorOrigin={{ vertical : "bottom", horizontal  : "left"}}
  
>

<Alert  severity="error" sx={{ width: '100%' }}>
You are offline, please check your internet connection
        </Alert>
</Snackbar>
    </div>
  );
}

export default App;
