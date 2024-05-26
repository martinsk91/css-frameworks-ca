import * as variabels from  "../variabels.js"
import { save } from "../../storage/save.js";
import { load } from "../../storage/load.js";
import { remove } from "../../storage/remove.js";

const path = "/auth/login";
const method = "post";

export async function login(profile){
    const loginURL = variabels.API_URL
    + variabels.socialURL + path;
    const body =JSON.stringify(profile);
    const response = await fetch(loginURL, {
        headers: {
            "content-Type": "application/json"
        },
        method,
        body
    })

    const {accessToken, ...user} = await response.json();

    save("token", accessToken);
    save("profile", user);
    console.log("funker");
    window.location.href = "/feed/"

}

