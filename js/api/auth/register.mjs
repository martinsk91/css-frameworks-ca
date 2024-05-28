import * as variabels from  "../variabels.js"

const path = "/auth/register";
const method = "post";

export async function register(profile){
    const registerURL = variabels.API_URL
    + variabels.socialURL + path;
    const body =JSON.stringify(profile);
    const response = await fetch(registerURL, {
        headers: {
            "content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json()
  
    window.location.href = "/feed/"
}

