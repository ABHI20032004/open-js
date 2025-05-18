const user = {
    username : 'Abhi',
    price : 399,
    wlcm_Message : function(){
        console.log(`${this.username} , welcome to website.`);
        console.log(this);
        
    }
}
user.wlcm_Message()   ///// / Abhi , welcome to website.   { username: 'Abhi', price: 399, wlcm_Message: [Function: wlcm_Message]}

user.username = 'GOLU'
user.wlcm_Message()  //// GOLU , welcome to website.  {username: 'GOLU',price: 399, wlcm_Message: [Function: wlcm_Message]}

console.log(this);   ///  {}


// function chai(){
//     const username = 'ABHISHEK'
//     console.log(this.username);   ///   undefined   b/c this is used in object not in function
// }

// const chai = function(){
//     const username = 'ABHISHEK'
//     console.log(this.username);   ///   undefined   b/c this is used in object not in function
// }

// chai()


const chai = () => {
    const username = 'ABHISHEK'
    console.log(this.username);   ///   undefined   b/c this is used in object not in function
}

chai()

const addtwo = (num1 , num2) => {
    return num1 + num2     //////    explicit return 
}

console.log(addtwo(3,7));   ///  10

const add2 = (num1 , num2) =>  (num1 + num2)    ////  inplicit return 
///    if curly bracket is used then return key word is used
console.log(add2(3,7));   ///  10

const retobj = () =>  ({username : 'ABHISHEK'})    ////  inplicit return 
////   return object 
console.log(retobj());   ///  10