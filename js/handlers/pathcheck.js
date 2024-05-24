import { addRegisterListener } from "./register.mjs";
import { addloginListener } from "./login.mjs"; 


export function checkPath(){
    const path = location.pathname;
    console.log(path);
    
    if(path === '/index.html'){
        addloginListener(); 
       
        
    }

    else if(path ==='/register/index.html') {
        
        addRegisterListener();
    }
};