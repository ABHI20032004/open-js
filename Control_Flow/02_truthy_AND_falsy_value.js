 /*   
 falsy  :-->  false , 0 , -0 , BigInt 0n , null , undefined , NaN

 truthy :-->  true , '0' , 'false' , " " , [] , {} , function(){} ,
             
*/

const useremail = 'nvuvb@fnuob'

if(useremail.length === 0){
console.log('Array is empty');
}

const emptyobject = {}

if(Object.keys(emptyobject).length === 0){
    console.log('object is empty'); 
}

//   nullish coalescing operator (??) :   key : null and undefined

let val1 ; 
// val1 =5 ?? 20;
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 = null  ??  30  ??  50

console.log(val1);      //// 5  ,    10     ,20  ,  30

 //// ternary operator
 const teaprice =100
 teaprice > 200 ? console.log('Tea price is greater than 200' ) :  console.log('Tea price is less than 200');
 
 
