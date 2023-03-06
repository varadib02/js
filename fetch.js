/*

fetch,{
    method:'POST' // *GET,POST,PUT,DELETE,etc.
    mode:'cors' //no-cors,*cors,same-origin
    cache: 'no-cache', //*default,no-cache,reload,force-cache,only-if-cached
    credentials: 'same-orinin', // include,*same-origin,omit
    headers:{
        'Content-type': 'application/json'
        'Content-type': 'application/x-www-form-urlencoded'

    }
    redirect: 'follow',//manual,*follow,error
    referrerPolicy: 'noreferrer',//no-referrer,*client
    body:

}

*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{
        console.log(response);
        return response.json();

    }).then(json=>console.log(json));
    
    var dataToSend={
        "userId":140,
        "title":"Uj post cim",
        "body":"szöveg"

    }

    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:"POST",
        body: JSON.stringify(dataToSend),
        headers:{
            "Content-type":"application/json; charset-UTF-8"
        }
    })
    .then(response=>response.json())
    .then((json) =>console.log(json));

    fetch('https://jsonplaceholder.typicode.com/posts/1',
    {
        method:'PUT',
        body:JSON.stringify({
            id:9,
            title:'foo',
            body:'bar',
            userId:1
        }),
        headers:{
            "Content-type":"application/json; charset-UTF-8"
        }
    }).then(response=>response.json())
    .then((json) =>console.log(json));

    fetch('https://jsonplaceholder.typicode.com/posts/1',
    {
        method:'Delete'
    }).then(res=>console.log("Deleted"));