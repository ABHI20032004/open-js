str1 = "Hello"
age = 20
console.log(str1+age+" ABHI")
console.log(`Hello my name is ${str1} and my age is ${age}.`);   ////  good format

const str2 = new String("ABHISHEK")
console.log(str2);  ///  [String: 'ABHISHEK']
console.log(str2[0]);   ////  A
console.log(str2.__proto__);    /// {}
console.log(str2.length);    /// 8
console.log(str2.toLowerCase());   /// abhishek
console.log(str2.charAt(5));    ////  H
console.log(str2.indexOf('E'));    /// 6

const substr = str2.substring(0,5)    ////  last value not included    ABHIS
console.log(substr);

const substr1 = str2.substring(-8,5)   /// -8 ignored and start from 0     ABHIS
console.log(substr1);

const slice = str2.slice(-7,-2)    ////  last value not included    BHISH
console.log(slice);

const slices = str2.slice(-8,5)    ////  last value not included    ABHIS
console.log(slices);

const newstring = "     abhishek    "
console.log(newstring);   //////  _______abhishek_______    
console.log(newstring.trim());   //////   abhishek      remove space

const url = "https://abhishek.com/abhi%20raj"
console.log(url.replace('%20','-'));   //////   https://abhishek.com/abhi-raj
console.log(url.includes("abhi"))       /////  true
console.log(url.includes("abhishekraj"))   ////  false

console.log(url.split('a'));


