const {app} = require("electron");
const isDev = require("electron-is-dev");
require('v8-compile-cache');







app.on("ready", () => {





 

  
 

  const mainWindow = require('./mainWindow');


 //  mainWindow.setMenu(null);
 mainWindow.webContents.on("dom-ready", ()=>{
  mainWindow.show();
 })
   

 
   
 


  
  
});

