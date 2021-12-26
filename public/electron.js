const {app , session} = require("electron");
const isDev = require("electron-is-dev");
//require('v8-compile-cache');



app.commandLine.appendSwitch('disable-features', 'IOSurfaceCapturer')
//--disable-renderer-backgrounding
app.commandLine.appendSwitch('--disable-renderer-backgrounding')







app.on("ready", () => {
  session.defaultSession.clearCache()
  session.defaultSession.clearStorageData({storages: ["ppcache", "cookies", "filesystem", "indexdb", "localstorage", "shadercache", "websql", "serviceworkers"]})
  .then(() => {
      console.log('All cookies cleared');
  })
  .catch((error) => {
      console.error('Failed to clear cookies: ', error);
  });
  const mainWindow = require('./mainWindow');


 //  mainWindow.setMenu(null);
 mainWindow.webContents.on("dom-ready", ()=>{
   mainWindow.webContents.clearHistory()
  mainWindow.setContentProtection(true)
  mainWindow.show();

 })
 

 
 

   
 


  
  
});

