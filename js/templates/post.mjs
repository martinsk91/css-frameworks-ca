// export function postTemplateA(postData){
//     return `<div class="post"><h2>${postData.title}
//     </h2><p>${postData.body}</p></div>`;
// }

export function postTemplate(postData){
    const postCard = document.createElement("div");
    const h2 = document.createElement("h2");
    const postContent = document.createElement("p");
    postCard.classList.add("col-12", "col-md-8","border",
     "border-black","rounded","my-5","p-5","container",
     "d-flex","flex-column","align-items-center");
  


    postCard.append(h2, postContent);
    h2.innerText = postData.title;
    postContent.innerText = postData.body; 

    return postCard;

}


export function renderPostTemplate(posts, parent){
    posts.forEach(postData => {
        const postElement = (postTemplate(postData));
        parent.append(postElement);
        
    });
   
}