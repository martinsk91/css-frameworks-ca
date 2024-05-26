import { getPosts } from "../posts/get.mjs";

const posts =  await getPosts();
console.log(posts);




export function sortAlphabetic(value1, value2){
    posts.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB){
            console.log("dette er post:", posts);
            return value1;
        }
    
        if (titleA > titleB){
            return value2;
        }
    
        return 0;
      
    })
 
     
}

export function sortByDate(value1, value2){
posts.sort(function(a,b){
    const date1 = new Date(a.updated);
    const date2 = new Date(b.updated);
    if(date1 < date2){
        return value1;
    }

        if(date1 > date2){
            return value2;
        }

        return 0; 
  });




}