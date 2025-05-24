function setusername(username){
    ///  complex DB call
    this.username = username
    console.log('Called');
    
}

function createuser(username,email,password){
    setusername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createuser('chai', 'chai@google' , '12345')

console.log(chai);
