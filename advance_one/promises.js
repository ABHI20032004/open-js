// const promise1 = new Promise(function(resolve , reject){
//     ///  Do an async task
//     ///  DB call ,cryptography , network
//     setTimeout(function(){
//         console.log('Async task is completed.');
        
//         resolve()
//     } , 1000)
// })

// promise1.then(function(){
//     console.log('Promise consumed');
// })


// new Promise(function(resolve , reject){
//     setTimeout(function(){
//            console.log('Async task 2');
//            resolve()
//     },1000)
// }).then(function(){
//     console.log('async 2 is resolved.');
    
// })


// const promise3 = new Promise(function(resolve , reject){
//     setTimeout(function(){
//      resolve({ username :"Chai" , email :"chai@example.com"})
//     } , 1000)
// })

// promise3.then(function(user){
//     console.log(user);
// })


const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
    let error = true
    if(! error){
        resolve({username : "Abhishek"  , Password : '1234'})
    }
    else{
        reject('ERROR : something went wrong')
    }
    }, 1000)
})

promise4.then(function(user){
    console.log(user)
    return user.username
}).then( (myusername) => {
    console.log(myusername)
}).catch(function(error){
    console.log(error); 
}).finally(() => {
    console.log('The promise is either resolved or rejected');
    
})




const promise5 = new Promise( (resolve , reject) => {
    setTimeout( () => {
        let error = true
        if(! error){
            resolve({username : "JavaScript" , Password : "1234567"})
        }
        else {
            reject('Error : JS went wrong.')
        }
    },1000)
})

async function consumePromise5(){
    try {
        const response = await promise5
    console.log(response);
   }
   catch(error){
    console.log(error);
   }
}

consumePromise5()

// async function getalluser() {
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log('Error : ' ,error);
        
//     }
// }
// getalluser()

/// another way

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (info) => console.log(info))
.catch((error) => console.log("Error Handled : " , error))
    


