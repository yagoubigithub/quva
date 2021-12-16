
console.log("helllo world")


const {ipcRenderer} = require("electron");

   console.log("start test.js")

    ipcRenderer.on("loading" , (e, url)=>{
      
        const iframe = document.querySelector("iframe");
        
        
        if(iframe !== null && iframe.contentDocument !== null){
          const iframeWin = iframe.contentWindow || iframe;
          const iframeDoc = iframe.contentDocument || iframeWin.document;
          
         
         
         
  
            //iframe.copyLinkAndThumbnailEnabled = "false"
            iframe.setAttribute("copyLinkAndThumbnailEnabled","false")
            iframe.setAttribute("autoPlay","false")
            iframe.setAttribute("allowfullscreen","false")
         
            //let src=iframe.src.split("?")[0] + "?autoplay=false"

          
           iframe.addEventListener("load", ()=>{
            var body = iframe.contentWindow.document.getElementsByTagName('body')[0];
            var script = iframe.contentWindow.document.createElement('script');
            script.append(` 
            
           
            
            document.getElementsByTagName('body')[0].addEventListener("contextmenu", (e)=>{
              throw new Error("Something went badly wrong!");
              e.preventDefault()
             
             
          
              return false;
            }, false);

              
            var video = document.getElementById('wistia_video')
           

            video.addEventListener("contextmenu", (e)=>{
              throw new Error("Something went badly wrong!");
              console.log("player")
              
              e.preventDefault()
             
             
          
              return false;
            }, false);

            document.getElementsByTagName('body')[0].addEventListener("mousedown", (e)=>{
              
              throw new Error("Something went badly wrong!");
              console.log()
              e.preventDefault()
             
             
          
              return false;
            }, false);
            
            
            `);
              script.type = 'text/javascript';
              script.async = true
             body.append(script);
              console.log(body.outerHTML)
           })
           
          

        
 
    
         
          return;
        }
    
})

