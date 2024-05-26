import { createPost } from "../posts/create.mjs";

export function addCreatePostListener(){
    const form = document.querySelector("#createPost");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
    
    
        let title = form.title.value;
        let body = form.body.value;
   
    
        const post = {
            title: title,
            body: body,
         
        }
    
        console.log(post);
       createPost(post);
       title = "";
       body = "";
      
    })
}
