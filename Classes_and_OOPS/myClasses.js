class user {
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user ('chai' , 'abhi@google.com' , '13557')

console.log((chai.encryptPassword()));
console.log((chai.changeusername()));


///    bshind the seen

function User(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }

    User.prototype.encryptPassword = function(){
        return `${this.password}abc`
    }
        
    User.prototype.changeusername = function(){
       return `${this.username.toUpperCase()}`
    }

    
const Chai = new user ('chai' , 'abhi@google.com' , '13557')

console.log((Chai.encryptPassword()));
console.log((Chai.changeusername()));