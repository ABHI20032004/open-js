// let score = 33

// console.log(typeof(score))    ///number
// console.log(typeof score);    ///number

// let age = "20"
// let ch_age = Number(age)
// console.log(typeof ch_age);   ///number

// let val = "20abc"
// let ch_val = Number(val)
// console.log(typeof ch_val);//number
// console.log(ch_val);  //// NaN


// let value = null
// let ch_value = Number(value)
// console.log(typeof ch_value); //number
// console.log(ch_value);  //// 0


// let v = undefined   
// let ch_v = Number(v)
// console.log(typeof ch_v);  //number
// console.log(ch_v);     ////NaN



// let va = false  ////   1 for true   and 0 for false
// let ch_va = Number(va)
// console.log(typeof ch_va);
// console.log(ch_va);      //// 0


// let s = 0  ////   1 for true   and 0 for false
// let ch_s = Boolean(s)
// console.log(typeof ch_s);
// console.log(ch_s);   ///false


// let str = ""  
// let ch_str = Boolean(str)
// console.log(typeof ch_str);
// console.log(ch_str);   //// false


// let str1 = "Abhi"  
// let ch_str1 = Boolean(str1)
// console.log(typeof ch_str1);
// console.log(ch_str1);   //// true


// let some = 33
// let str_no =String(some)
// console.log(typeof str_no);
// console.log(str_no);

///*************((((((((((OPERATION)))))))))) ************/

// let data = 3
// let negdata = -data
// console.log(negdata);   /// -3
// console.log(2**4);   //// power
// let str2 = "Hello"
// let str3 = ' Abhishek'
// let str4 = str2 + str3
// console.log(str4);   /// Hello Abhishek

// console.log('1'+4);  ///14
// console.log(3+"4");   ///34
// console.log('37'+"4");    ///374
// console.log(3 + 6 +"4");  ///94
// console.log('3'+ 6 + 4); /// 364
// console.log(3+ '6' + 4);   /// 364


// console.log(true);    ///// true
// console.log(+true);   //// 1
// console.log(+"");   //// 0

// let gameCounter = 100;
// gameCounter++      //// 101 
// ++gameCounter    //// 102
// console.log(gameCounter);



///// ***********((((((((((((COMPARISION))))))))))))***************

// console.log(2>1);   /// true
// console.log(5<2);   /// false

// console.log('2'==4);   /// false
// console.log('3'==3);    //// true

// console.log(null > 0);    //// false
// console.log(null == 0);   //// false
// console.log(null  < 0);   //// false
// console.log(null >= 0);   /// true
// console.log(null <= 0);   /// true


// console.log(undefined == 0);    //// false
// console.log(undefined < 0);    //// false
// console.log(undefined > 0);    //// false
// console.log(undefined >= 0);    //// false
// console.log(undefined <= 0);    //// false



// ////   strict check 
// console.log(2 === 2);   /// true
// console.log('3'==3);    //// true
// console.log('3' === 3);  //// false



///   Primitive Datatype :->  String , Boolean , null , undefined , Symbol , BigInt , NUmber
/// Non-Premitive Datatype (Reference type) :->  array , object , functions

 const ID = Symbol('123')   ////   unique  id
 const anotherId = Symbol('123')   ////   unique  id 
 console.log(ID == anotherId);    /// false
 

const num = 12345676354627n   //// bigint
 console.log(typeof num);   /// bigint

const heros = ['saktiman' , 'doremoon' , 'chota Bheem']   //// array
let myobj = {   //////  object
    name:'Abhishek' ,
    age : 20
}

const myfunction = function(){     //// function
    console.log('Hello World');
}

console.log(typeof myfunction); ////  function
console.log(typeof heros);    ////   object
console.log(typeof myobj);    ////   object
console.log(typeof null);    ////   object




