import React, {useEffect} from 'react'
import './App.css';
import TaskBar from './components/TaskBar'
function App() {
  useEffect(() => {
    
  }, [])
  return (
    <div className="App">
    <TaskBar />
    <webview id="foo" src="https://courses.quvapro.com/" style={{width : "100vw" , height : "calc(100vh - 35px)" , marginTop : 35}} ></webview>

    </div>
  );
}

export default App;
