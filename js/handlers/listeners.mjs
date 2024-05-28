import * as sort from "./sort/variabels.js";
import { getPosts } from "../posts/get.mjs";


export function addSortingListeners(){
    if(sort.sortButtonA){
sort.sortButtonA.addEventListener('click', async function(){

    const posts =  await getPosts();  
    const sorted = posts.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } else {
            return 1;
        }})

    const container = document.querySelector("#postcontainer");
    renderPostTemplate(sorted, container)
    


   

}
);
    }

    if(sort.sortButtonZ){

sort.sortButtonZ.addEventListener('click', async function(){

    const posts =  await getPosts();  
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

    const posts =  await getPosts();  
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

    const posts =  await getPosts();  
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