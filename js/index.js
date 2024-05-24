import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";
import { checkPath } from "./handlers/pathcheck.js";
import * as postsmethods from "./posts/index.mjs";
import { remove } from "./storage/remove.js";
import { updatePost } from "./posts/index.mjs";
import { renderPostTemplate } from "./templates/post.mjs";

checkPath();
updatePost({id:12640,
    title:"updated once more",
    body: "updated"
})


async function testTemplate(){
   const posts =  await postsmethods.getPosts();
   console.log(posts);
  
   const container = document.querySelector("#postcontainer");
   if(container){
   console.log(container);
   renderPostTemplate(posts, container);
   }
}

testTemplate();


