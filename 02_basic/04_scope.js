let a = 10
// const b = 20
var c = 30

// console.log(a);  ///  10
// console.log(b);   ///  20
// console.log(c);   ///  30

if(true){
    let a =100
    const b =200
    var c =10000
    console.log('INNER :' ,a);
}

console.log('outer : ',a);
// console.log(b);
console.log(c);  /////   overwrite   /// 10000

c = 500
console.log(c);  ////    500


function one(){
    const username = "Abhishek"
    function two(){
        const website = 'insta'
        console.log(username);
    }
    // console.log(website);   // error
    two()
}

one()  ////  Abhishek

if(true){
    const username = "Abhishek"
    if(true){
        const website = ' insta'
        console.log(username + website);
    }
    // console.log(website);   ///  error
}

// console.log(username);   ////  error


/////  +++++++++++++++>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log(addone(5))    //// 6

function addone(num){
    return num + 1
}
console.log(addone(5))    ////  6


// console.log(addtwo(5))   ////  gives error
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))   ///  7


