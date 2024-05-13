


async function fetchApi(link){
    const response = await fetch(link);
    const result = await response.json;
    return result
}