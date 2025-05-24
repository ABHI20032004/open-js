class user {
   constructor (username){
        this.username = username
   }

   logMe(){
    console.log(`Username : ${this.username}`);
   }

   static createID(){
    return '1234'
   }
}

const Abhi = new user('ABHISHEK')

Abhi.logMe()
// console.log(Abhi.createID());  ///  not work b/c static used in createID



class teacher extends user{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher('iphone' , 'iphone@2453')

iphone.logMe()
// console.log(iphone.createID());  ///  not work b/c static used in createID