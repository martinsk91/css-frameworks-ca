import { fetchToken } from "../api/auth/tokenfetch.mjs";
import * as variabels from "../api/variabels.js"

const method = "DELETE"


/**
 * Removes a post from the server.
 * 
 * @param {Object} data - The data object representing the post to be removed.
 * @param {string} data.id - The ID of the post to be removed.
 * @returns {Promise<Object>} A promise that resolves to the result of the removal operation.
 */

export async function removePost(data){
    const postURL = variabels.API_URL + variabels.socialURL +
    variabels.postURL + `/${data.id}`;
  
    const response = await fetchToken(postURL, {
        method,
      
    })

    const result = await response.json();
    window.location.href = "/feed/"

    return result

}