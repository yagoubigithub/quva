import React, {useEffect, useState} from 'react'
import './App.css';
import TaskBar from './components/TaskBar'
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
    setOnline(window.navigator.onLine)

    
    window.addEventListener('offline', function(e) { 
      
      setOnline(false)
      
      console.log('You are offline, please check your internet connectionne'); 
    
    });

    window.addEventListener('online', function(e) { 
      setOnline(true)
      remote.getCurrentWebContents().reload()
      console.log('online'); 
    
    });
    

  }, [])

  const handleClose = () => {
    setOnline(false);
  };
  return (
    <div className="App">
   
    <webview id="foo" src="https://courses.quvapro.com/" style={{width : "100vw" , height : "calc(100vh )" }} ></webview>
    <Snackbar
  open={!online}
  
  onClose={handleClose}
  anchorOrigin={{ vertical : "bottom", horizontal  : "left"}}
  
>

<Alert  severity="error" sx={{ width: '100%' }}>
You are offline, please check your internet connectionne
        </Alert>
</Snackbar>
    </div>
  );
}

export default App;
