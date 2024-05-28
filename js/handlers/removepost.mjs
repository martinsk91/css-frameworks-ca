import { removePost } from "../posts/remove.mjs";

export function addDeletePostListener() {
    const deleteButton = document.querySelector("#deletepost");
    if (deleteButton) {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");

        deleteButton.addEventListener('click', () => removePost({ id }));
    } 
}


