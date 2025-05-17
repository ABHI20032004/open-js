// const mysym = Symbol('key1')

// const jsuser = {
//     name : "Abhi",
//     Age : 20,
//     location : 'Samastipur',
//     email : 'abhi@google.com',
//     isloggedIn : false,
//     lastLoginDays : ['Monday' , 'Friday'],
//     [mysym] : 'mykey1'  //////  symbol
// }
// console.log(jsuser);
// console.log(jsuser.email);
// console.log(jsuser['email']);
// console.log(jsuser[mysym]);   ////   [Symbol(key1)]: 'mykey1'  
// console.log(mysym);

// console.log(jsuser.name);
// // Object.freeze(jsuser)  ////  or jsuser.name

// jsuser.name = 'ABHISHEK'
// console.log(jsuser.name);

// jsuser.greetings1 = function(){
//     console.log('Hello JS user !.');
// }

// jsuser.greetings1();

// jsuser.greetings2 = function(){
//     console.log(`Hello JS user , ${this.name} `);
// }
// jsuser.greetings2()


// const user = new Object()    /////    singleton object
// // const user = {}    ////  non-singleton object
// user.id = '123abc'
// user.name = 'Abhi'
// user.isLoggedIn = true

// console.log(user);


const lol = { 
    email : 'abc@google.com',
    fullname : {
        userfullname : {
            firstname : "Abhi",
            lastname : "Raj"
        }
    }
}
// console.log(lol.fullname.userfullname.firstname);   ///// Abhi

const obj1 = {
    1:'a',
    2:'b',
    3:'c'
}
const obj2 = {
    4:'r',
    5:'q',
    6:'p'
}
const obj5 = {
    14:'d',
    25:'n',
    36:'k'
}
const obj3 = {obj1 ,obj2}

// console.log(obj3);/////  {obj1: { '1': 'a', '2': 'b', '3': 'c' },  obj2: { '4': 'r', '5': 'q', '6': 'p' }}

// const obj4 = Object.assign(obj1 ,obj2, obj5) ////   all object  copies to obj1    so obj1 == obj4
// const obj4 = Object.assign({} , obj1 , obj2, obj5 )  ////  new object formed
// const obj4 = {...obj1 , ...obj2 , ...obj5}   ////  simple way

// console.log(obj4);   ///// {'1': 'a','2': 'b','3': 'c','4': 'r','5': 'q','6': 'p','14': 'd','25': 'n','36': 'k'}

const userinfo = [  ///////////  array of object
    {
        1:'A',
        2:'B',
        3:'C'
    },
    {
        4:'D',
        5:'E',
        6:'F'
    }
]
console.log(userinfo[0][1]);     ////  A

console.log(Object.keys(userinfo[0]));   /////   [ '1', '2', '3' ]
console.log(Object.values(userinfo[0]));     /////   [ 'A', 'B', 'C' ]

console.log(Object.entries(userinfo[0]));   ///    array of array of key value pair


const course = {
    coursename : 'learning js',
    price : 999,
    courseInstructor : 'Hitesh'
}

const {coursename : name} = course

console.log(name);
console.log(course.coursename);


/////    api        object or array of object    [ {} , {} , {} ]
// {
//     'name' : "ABHISHEK",
//     'price' : "FREE",
//     'coursename' : "js in hindi"
// }
