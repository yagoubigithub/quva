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

  const [cangoback,setCanGoBack]  = useState(false)
  const [cangoforward,setCanGoFoward]  = useState(false)

  const [taskbar,setTaskBar]  = useState(null) 
  useEffect(() => {
    const webview = document.getElementById("webview")
    setOnline(window.navigator.onLine)
  
    
    window.addEventListener('offline', function(e) { 
      
      setOnline(false)
      
      console.log('You are offline, please check your internet connection'); 
    
    });
 

    window.addEventListener('online', function(e) { 
      setOnline(true)
      remote.getCurrentWebContents().reload()
      console.log('online'); 
    
    });
   
    
    webview.addEventListener("did-finish-load", (e)=>{
      console.log(webview.canGoBack(),webview.canGoForward())
     setCanGoBack( webview.canGoBack())
     setCanGoFoward(webview.canGoForward())

     console.log("state",cangoback, cangoforward)
    })
  }, [])
  
  const handleClose = () => {
    setOnline(false);
  };

  const goBack = () => {
    const webview = document.getElementById("webview")
    webview.goBack()
  }

  const goForward = () => {
    const webview = document.getElementById("webview")
webview.goForward()

  }
  const focusWebView =()=>{


const webview = document.getElementById("webview")
webview.focus()
  }
  const trueAsStr = 'true' 
  return (
    <div className="App">
     <div style={{backgroundColor : "#f2f2f2", paddingLeft : "1rem", maxHeight : "3rem"}} onClick={focusWebView}>
  <IconButton disabled={!cangoback} onClick={goBack}>
  
    <ArrowBackIosIcon />
  </IconButton>
  
  <IconButton disabled={!cangoforward}  onClick={goForward}> 
  
    <ArrowForwardIosIcon />
  </IconButton>
    </div>
   
    <webview id="webview"  src="https://courses.quvapro.com/" style={{width : "100vw" , height : "calc(100vh - 3rem )" }}  allowpopups={trueAsStr}></webview>
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
