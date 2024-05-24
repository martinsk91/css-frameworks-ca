import { fetchToken } from "../api/auth/tokenfetch.mjs";
import * as variabels from "../api/variabels.js"

const method = "put"


export async function updatePost(data){
    const postURL = variabels.API_URL + variabels.socialURL +
    variabels.postURL + `/${data.id}`;
    console.log(postURL);
    const response = await fetchToken(postURL, {
        method,
        body:JSON.stringify(data)
    })

    const result = await response.json();

return result

}