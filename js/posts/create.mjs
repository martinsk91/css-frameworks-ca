import { fetchToken } from "../api/auth/tokenfetch.mjs";
import * as variabels from "../api/variabels.js"

const method = "post"


export async function createPost(data){
    const postURL = variabels.API_URL + variabels.socialURL +
    variabels.postURL;
    console.log(postURL);
    const response = await fetchToken(postURL, {
        method,
        body:JSON.stringify(data)
    })

    const result = await response.json();
    location.reload();
    return result

  

}

// createPost({
//     title: "example",
//     body: "example"
// });

