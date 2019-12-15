const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

//Ajax with promises
function getTop100Users() {
    fetch(apiUrl)
    .then((res) => res.json())
    .then((json) => {
        console.log('users',json[0])
    }).catch((error) =>{
        console.log('failed');
    });
}

// Ajax with async/await
async function getTop100Coders() {
    const response = await fetch(apiUrl);
    const json = await response.json();
    
    console.log('coders',json[0]);
}

getTop100Users();
getTop100Coders();