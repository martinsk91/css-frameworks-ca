
import { updatePost } from "../posts/update.mjs";

export function addUpdatePostListener(){
    const form = document.querySelector("#updatepost");
    const url = new URL(location.href);
    const id = url.searchParams.get("id");



    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
    
    
        const title = form.title.value;
        const body = form.body.value;
   
    
        const post = {
            title: title,
            body: body,
            id: id
         
        }
    
      
       updatePost(post);
       
       
        
       
    })
}













