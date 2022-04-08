


//GET

//const requestUrl1 = 'https:jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()
 

// xhr.open('GET' ,requestUrl1)
// xhr.responseType ='json'
// xhr.onload = () =>{
//     console.log(xhr.status);
//     if(xhr.status >= 400){
//         console.log("error:" , xhr.status);

//     }else{
//         console.log(xhr.response);
//     }
//     //console.log( JSON.parse(xhr.response));

//     // xhr.onerror = () =>{
//     //     console.log(xhr.response);
   
//     // }


// }


// xhr.send()


//POST
// const requestUrl1 = 'https:jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()
// let users = {
//     name:"Aijamal" ,
//     ago:26 ,
//     position : "frontend"
// }
// xhr.open('POST' , requestUrl1 )
// xhr.setRequestHeader('Content -Type' ,'application/json')
// xhr.responseType = 'json'
// xhr.onload = () =>{
//     console.log(xhr.response);
// }
// const data =JSON.stringify(users)

// xhr.send(data)


// GET exemple


// const requestUrl = ' https://jsonplaceholder.typicode.com/users'
// const getUsersUrlBtn = document.getElementById ('getUsers')

// function getUsers(url){
//     const xhr = new XMLHttpRequest()
//     xhr.open ('GET', url)
//     xhr.responseType = "json"

//     xhr.onload = () =>{
//         if(xhr.status >= 400){
//             console.log("Error:", xhr.status);
//         }else{
//             const users = [...xhr.responce]
//             users.forEach(user =>{
//                 console.log(user.name);
//                 console.log(users);
//             })
    
//         }
// }

//     xhr.send()

// }

// // xhr.send()

// getUsersUrlBtn.addEventListener('click' ,(e) => {
//     e.preventDefault();
//     getUsers(requestUrl)
// })

const requestURL = 'https://jsonplaceholder.typicode.com/users'
const getUsersUrlBtn = document.getElementById('getUsers')
const usersList = document.getElementById('users__list')

function getUsers(url){
    const xhr = new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.responseType = 'json'

    xhr.onload = () => {
        if(xhr.status >= 400){
            console.error('Error', xhr.status);
        }else{
            const users =[...xhr.response]
            users.forEach(user => {
                
                usersList.innerHTML +=
                 `<li><p>${user.name}</p>
                 <p>${user.email}</p></li>`
        })
    }
}
    xhr.send()
}    

getUsersUrlBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    getUsers(requestURL)
})


