const discriptor = Object.getOwnPropertyDescriptor(Math , 'PI')

console.log(Math.PI);   ////    3.141592.....

console.log(discriptor);

const chai = {
    name : 'gingerChai',
    price : 250,
    isAvailable : true,

    orderchai : function(){
        console.log('chai nahi bani');
        
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

// Object.defineProperty(chai , 'name',{
//     writable : false,
//     enumerable : true  ///  if false then name not printed
// })

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

for (let [key ,value] of Object.entries(chai)){
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
}