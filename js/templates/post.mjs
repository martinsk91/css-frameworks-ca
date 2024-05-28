// import { specificPost } from "../api/getID.js";

export function postTemplate(postData){
    const postCard = document.createElement("div");
    const h2 = document.createElement("h2");
    const postContent = document.createElement("p");
    const postLink = document.createElement("a");
    postCard.classList.add("col-12", "col-md-8","border",
     "border-black","rounded","my-5","p-5","container",
     "d-flex","flex-column","align-items-center");
  


    postCard.append(h2, postContent, postLink);
    h2.innerText = postData.title;
    postContent.innerText = postData.body;
    postLink.href = `post.html?id=${postData.id}`
    postLink.innerText = "edit/delete post"
  
    return postCard;
  
}


export function renderPostTemplate(posts, parent){
    parent.innerText = "";
    posts.forEach(postData => {
        const postElement = (postTemplate(postData));
        parent.append(postElement);
        
    });
   
}

