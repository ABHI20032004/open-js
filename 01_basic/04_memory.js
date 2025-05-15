////Stack ( Premitive )
/// Heap ( Non-Premitive )

let myYoutubeName = 'AbhishekRajdotcom'
let anotherName = myYoutubeName
anotherName='goluRajdotcom'
console.log(anotherName);   //// name changed
console.log(myYoutubeName );

let user1 = {
    email : 'gfeuwci@gmail.com',
    upi : 'uswer@axl'
}

let user2 = user1
user2.email = 'abhi@3045'
user2.upi = 'golu@pip'

console.log(user2.email);    
console.log(user2.upi);

console.log(user1.email);   ////   email get updated
console.log(user1.upi);     ////   upi get updated