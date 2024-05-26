


export function logOut(){

    const logoutbutton = document.querySelector("#logout");
    if(logoutbutton){
    logoutbutton.addEventListener('click', ()=> {
        localStorage.clear();
        window.location.href = "/"

    

        
    })
    }}

    
    

