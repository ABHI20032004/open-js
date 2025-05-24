class user{
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get email(){
        return  this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }

    get password (){
        return this._password.toUpperCase()
    }

    set password(value){
         this._password = value.toUpperCase()
    }
}

const Abhi = new user('abhi@123' , 'cgfs')

console.log(Abhi.password);
console.log(Abhi.email);



////    behind the seen 

function User(email , password){
    this.email = email
    this.password = password

    Object.defineProperty(this , 'email' , {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })

    Object.defineProperty(this , 'password' , {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
}

const chai = new user('chai@123' , 'chgfgfs')

console.log(chai.password);
console.log(chai.email);



//////    object based


const USER = {
    _email : 'abhishek@google',
    _password : '1355cvuyf937',

    get email(){
        return this._email.toUpperCase()
    },
    set email (value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },
    set password (value){
        this._password = value
    }
}

const tea = Object.create(USER)

console.log(tea.email);
console.log(tea.password);