import { addRegisterListener } from "./register.mjs";
import { addloginListener } from "./login.mjs"; 
import { addCreatePostListener } from "./createPost.js";
import { addUpdatePostListener } from "./updatepost.js";


export function checkPath(){

    const path = location.pathname;
    
    
    if(path === '/'){
        addloginListener(); 
       
        
    }

    else if(path ==='/register/index.html') {
        
        addRegisterListener();
    }

    else if(path === '/feed/'){
        addCreatePostListener();
    }
    else if(path === '/feed/post.html'){
        addUpdatePostListener();
    }

    else {addloginListener();}
};