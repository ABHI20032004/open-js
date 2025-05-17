function greetings (){
    console.log("Hello Abhi");
}
greetings()   //  Hello Abhi


function sum (number1 , number2){   //// parameter 
   console.log(number1 + number2);
}
sum(2,4)   ////   6    ////   arguments
sum('2',4)   ///  24
sum(2,'4')    //// 24
sum(2,'a')   ////  2a
sum(2,null)   ///  2


function sum1 (number1 , number2){   //// parameter 
   return (number1 + number2);
}

const res = sum1(5,78)
console.log(res);

function LoggedIn(username){
    console.log(`${username} is just Logged In .`)
}
LoggedIn('Abhi')   ////   Abhi is just Logged In .
LoggedIn()   ////  undefined is just Logged In .


function calculatecartprice(...price){  ////  if no. of arguments is unknown
    return price      //////    this method is called rest operator
}

console.log(calculatecartprice(100,200,300,400,500));


const userinfo = {
    username : "Abhi",
    price : 999
}
function handleobject(user){
    console.log(`Username is ${user.username} and the price is ${user.price}`);
}
handleobject(userinfo)
handleobject({
    username : "Golu",
    price : 399
})

const newarray = [11,22,33,44,55,66]

function return_Length(newarr){
   return newarr.length
}
console.log(return_Length(newarray))
console.log(return_Length([1,2,3,4,5,7,8,9,90]))