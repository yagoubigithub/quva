import React, {useEffect, useState} from 'react'
import './App.css';

import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {

  const electron = window.require('electron')

  const remote = electron.remote;
  const [online,setOnline]  = useState(true)
  useEffect(() => {
    var webview = document.querySelector("webview")
    const wrraper = document.getElementById("wrraper");
   
    const appdiv = document.getElementsByClassName("App")[0]

    console.log(appdiv)
    wrraper.addEventListener("mousedown", (evt)=>{
      if (`${evt.which}${evt.button}` === "32") {
        console.log("right click")
       
        return true
      }
      console.log(evt.isTrusted)
      if (evt.isTrusted) {
        console.log(evt)
      const mouseEvent = new MouseEvent(evt.type, evt);
      document.getElementById("container").dispatchEvent(mouseEvent);
      
    }
      return true
     
    })
    
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
    
   
    
    webview.addEventListener("did-start-loading", function () {
      webview.send(`loading`,"path")
    })
    webview.addEventListener('did-stop-loading', function(){
      webview.openDevTools();
     
      console.log(__dirname)
    })
   
  }, [])

  const handleClose = () => {
    setOnline(false);
  };
  const trueAsStr = 'true' 

const app = remote.app
const dirname = app.getAppPath()
console.log(dirname)
  return (
    <div className="App">
   <div id="wrraper"> </div>
   <div id="container">

   <webview id="foo" src="https://courses.quvapro.com/" style={{width : "100vw" , height : "calc(100vh )" }} 
    nodeintegrationinsubframes={trueAsStr}
  //  preload={`file://${dirname}/public/test.js`}
   
    disablewebsecurity={trueAsStr}
   ></webview>
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
   
  
   
    </div>
  );
}

export default App;
