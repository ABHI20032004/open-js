let myname = "Abhishek"
let mychannel = 'Chai'

// console.log(myname.truelength);  //// gives error
console.log(myname.trim().length);    ////   8

myheros = ['thor' , 'spiderman']

let heroPower = {
    thor : 'Hammer',
    spiderman : 'sling',

    getspiderPower : function(){
        console.log(`Spidy Power ig ${this.spiderman}`);   
    }
}

Object.prototype.Abhi = function(){
    console.log("Abhi is present in all object."); 
}

heroPower.Abhi()   ///   Abhi is present in all object.
myheros.Abhi()   ///   Abhi is present in all object.

Array.prototype.golu = function(){
    console.log("Golu is present in all array."); 
}

myheros.golu()   ///  Golu is present in all array.
// heroPower.golu()   /// error


 /////    Inheritence

 const user = {
     name : 'Abhi',
     email : 'abhi@google.com'
 }

 const Teacher = {
    makevideo : true
 }

  const TeachingSupport = {
    isavailable : false
 }

 const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
 }

 Teacher.__proto__ = user

 ///  modern syntax

 Object.setPrototypeOf(TeachingSupport , Teacher)

 let anotheruser = 'chaiaurcode  '

 String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
 }

 anotheruser.truelength()   ////    chaiaurcode   11

 'abhishek'.truelength()   ////   abhishek   8

 'golu'.truelength()   ////   golu   4