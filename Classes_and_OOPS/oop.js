const user = {
    username : "Abhishek",
    logincount : 5,
    sighedIn : true,

    getuserDetails : function(){
        console.log('Got user details from database');
        console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username)
// console.log(user.getuserDetails())
// console.log(this);



function myuser(username ,loggedIncount ,isloggedIn){
    this.username = username
    this.loggedIncount = loggedIncount
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`WelCome ${username}`)
    }

    // return this   ////    implicitely defined
}

// const user1 = (myuser('Abhi' , 34 ,true));
// const user2 = (myuser('Golu' , 34 , false));

// console.log(user1);   ////   user2 overwrite user1   

const user1 = new myuser('Abhi' , 34 ,true);
const user2 = new myuser('Golu' , 34 , false);

console.log(user1);   ////   user2  not overwrite user1
console.log(user1.greeting()); 

console.log(user1.constructor); ////  [Function: myuser] 