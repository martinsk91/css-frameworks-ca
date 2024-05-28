import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { checkPath } from "./handlers/pathcheck.js";
import * as postsmethods from "./posts/index.mjs";
// import { remove } from "./storage/remove.js";
// import { updatePost } from "./posts/index.mjs";
import { renderPostTemplate } from "./templates/post.mjs";
import { logOut } from "./api/auth/logout.js";
// import { sortAlphabetic } from "./sort/sort.js";
// import { sortByDate } from "./sort/sort.js";
import * as sort from "./sort/variabels.js";
import { addDeletePostListener } from "./handlers/removepost.mjs";
// import { addSortingListeners } from "./handlers/listeners.js";




addSortingListeners();
checkPath();

// updatePost({id:12640,
//     title:"updated once more",
//     body: "updated"
// })


function addSortingListeners(){
    if(sort.sortButtonA){
sort.sortButtonA.addEventListener('click', async function(){

    const posts =  await postsmethods.getPosts();  
    const sorted = posts.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } else {
            return 1;
        }})
    (sorted);
    const container = document.querySelector("#postcontainer");
    renderPostTemplate(sorted, container)
    


   

}
);
    }

    if(sort.sortButtonZ){

sort.sortButtonZ.addEventListener('click', async function(){

    const posts =  await postsmethods.getPosts();  
    const sorted = posts.sort((a, b) => {
        if (a.title < b.title) {
            return 1;
        } else {
            return -1;
        }})
   
    const container = document.querySelector("#postcontainer");
    renderPostTemplate(sorted, container)
    


   

}
);
}

if(sort.sortButtonNew){
sort.sortButtonNew.addEventListener('click', async function(){

    const posts =  await postsmethods.getPosts();  
    const sorted = posts.sort((a, b) => {
        if (a.updated < b.updated) {
            return -1;
        } else {
            return 1;
        }})
   
    const container = document.querySelector("#postcontainer");
    renderPostTemplate(sorted, container)
    


   

}
);
}

if(sort.sortButtonOld){
sort.sortButtonOld.addEventListener('click', async function(){

    const posts =  await postsmethods.getPosts();  
    const sorted = posts.sort((a, b) => {
        if (a.updated < b.updated) {
            return 1;
        } else {
            return -1;
        }})
  
    const container = document.querySelector("#postcontainer");
    renderPostTemplate(sorted, container)
    


   

}
);

}
}

async function renderPosts(){
    
   const posts =  await postsmethods.getPosts();
   
  
   const container = document.querySelector("#postcontainer");
   if(container){
   console.log(container);
   renderPostTemplate(posts, container);
   }
}

renderPosts();
addDeletePostListener();
logOut();



