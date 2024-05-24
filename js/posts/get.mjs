import { fetchToken } from "../api/auth/tokenfetch.mjs";
import * as variabels from "../api/variabels.js"




export async function getPosts(){
    const postURL = variabels.API_URL + variabels.socialURL +
    variabels.postURL;
    const response = await fetchToken(postURL)

    const result = await response.json();
    console.log(result);
    return result

  

}


export async function getPost(id){
    const postURL = variabels.API_URL + variabels.socialURL +
    variabels.postURL +`/${id}`;
    const response = await fetchToken(postURL)

    const result = await response.json();
    console.log(result);
    return result

  

}



