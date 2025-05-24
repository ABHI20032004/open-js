class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new teacher('chai' ,'chai@123' , '12345')

chai.addCourse()

const masalaChai = new user('masalaChai')
masalaChai.logMe()

chai.logMe()

console.log(chai instanceof user);  ///    true
console.log(masalaChai instanceof user);  ///    true

console.log(chai instanceof teacher);  ///    true
console.log(masalaChai instanceof teacher);  ///   false 
