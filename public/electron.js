const {app} = require("electron");
const isDev = require("electron-is-dev");
//require('v8-compile-cache');




app.commandLine.appendSwitch('disable-x-frame-options')



app.on("ready", () => {

  const mainWindow = require('./mainWindow');


 //  mainWindow.setMenu(null);
 mainWindow.webContents.on("dom-ready", ()=>{
  //mainWindow.setContentProtection(true)
  mainWindow.show();

 })
 

 
 

   
 


  
  
});

