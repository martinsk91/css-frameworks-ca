import { createPost } from "../posts/create.mjs";

export function addCreatePostListener(){
    const form = document.querySelector("#createPost");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
    
    
        const title = form.title.value;
        const body = form.body.value;
   
    
        const post = {
            title: title,
            body: body,
         
        }
    
     
       createPost(post);

      
    })
}
