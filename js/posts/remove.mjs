import { fetchToken } from "../api/auth/tokenfetch.mjs";
import * as variabels from "../api/variabels.js"

const method = "delete"


export async function removePost(id){
    const postURL = variabels.API_URL + variabels.socialURL +
    variabels.postURL + `/${data.id}`;
    console.log(postURL);
    const response = await fetchToken(postURL, {
        method
    })

    const result = await response.json();

    return result

}