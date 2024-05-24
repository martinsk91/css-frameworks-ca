import { login } from "../api/auth/login.mjs";

export function addloginListener(){
    const form = document.querySelector("#loginform");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
    
    
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
    
        const profile = {
            email: email,
            name: name,
            password: password
        }
    
        console.log(profile);
       login(profile);
    })
}

// addloginListener();