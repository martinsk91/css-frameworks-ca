import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { checkPath } from "./handlers/pathcheck.js";
import * as postsmethods from "./posts/index.mjs";
import { remove } from "./storage/remove.js";
// import { updatePost } from "./posts/index.mjs";
import { renderPostTemplate } from "./templates/post.mjs";
import { logOut } from "./api/auth/logout.js";
import { sortAlphabetic } from "./sort/sort.js";
import { sortByDate } from "./sort/sort.js";
import * as sort from "./sort/variabels.js";
console.log(sort.sortButtonA);

sort.sortButtonA.addEventListener('click', async function(){

    const posts =  await postsmethods.getPosts();  
    const sorted = posts.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } else {
            return 1;
        }})
    console.log(sorted);
    const container = document.querySelector("#postcontainer");
    renderPostTemplate(sorted, container)
    


   

}
);


sort.sortButtonZ.addEventListener('click', async function(){

    const posts =  await postsmethods.getPosts();  
    const sorted = posts.sort((a, b) => {
        if (a.title < b.title) {
            return 1;
        } else {
            return -1;
        }})
    console.log(sorted);
    const container = document.querySelector("#postcontainer");
    renderPostTemplate(sorted, container)
    


   

}
);

sort.sortButtonNew.addEventListener('click', async function(){

    const posts =  await postsmethods.getPosts();  
    const sorted = posts.sort((a, b) => {
        if (a.updated < b.updated) {
            return -1;
        } else {
            return 1;
        }})
    console.log(sorted);
    const container = document.querySelector("#postcontainer");
    renderPostTemplate(sorted, container)
    


   

}
);

sort.sortButtonOld.addEventListener('click', async function(){

    const posts =  await postsmethods.getPosts();  
    const sorted = posts.sort((a, b) => {
        if (a.updated < b.updated) {
            return 1;
        } else {
            return -1;
        }})
    console.log(sorted);
    const container = document.querySelector("#postcontainer");
    renderPostTemplate(sorted, container)
    


   

}
);


checkPath();

// updatePost({id:12640,
//     title:"updated once more",
//     body: "updated"
// })


async function renderPosts(){
    
   const posts =  await postsmethods.getPosts();
   console.log(posts);
  
   const container = document.querySelector("#postcontainer");
   if(container){
   console.log(container);
   renderPostTemplate(posts, container);
   }
}

renderPosts();

logOut();
// localStorage.clear();

// function renderPost(){
//     const post = document.querySelector('post');
//     post.innerHTML += `<h2>${specificPost.title}</h2><p>${specificPost.body}</p>`
// }


