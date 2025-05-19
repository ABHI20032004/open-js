//// for of .   This loop is array array sepcific 

const arr = [1,2,3,4,5]

for (const ele of arr) {
    console.log(ele); 
}

const greet = 'Hello World'
for ( const ele of greet){
    console.log(`Each character : ${ele}`);    
}

////   Maps

const map1 = new Map()

map1.set('IN','INDIA')
map1.set('USA','UNITED STATES OF AMERICA')
map1.set('FR','FRANCE')
map1.set('PK','PAKISTAN')

console.log(map1);  ///    Map(4) {  'IN' => 'INDIA',  'USA' => 'UNITED STATES OF AMERICA',  'FR' => 'FRANCE',  'PK' => 'PAKISTAN'}

for (const ele of map1){
    console.log(ele);   ////  [ 'IN', 'INDIA' ][ 'USA', 'UNITED STATES OF AMERICA' ][ 'FR', 'FRANCE' ][ 'PK', 'PAKISTAN' ]
}

for (const [ele] of map1){
    console.log(ele);   ////  IN  USA  FR  PK
}

for (const [ele] of map1){
    console.log(map1.get(ele));   ////  INDIA    UNITED STATES OF AMERICA    FRANCE    PAKISTAN
}

for (const [key , value] of map1){
    console.log(key , ':' , value);   ////  IN : INDIA  USA : UNITED STATES OF AMERICA   FR : FRANCE  PK : PAKISTAN  }
}


const obj = {
    game1 : 'Car Race',
    game2 : 'Boat Race'
}

// for(const [ key , values] of obj){    ////    gives error  object is not iterable in this way
//     console.log(key ,':' ,values);
// }

const myobj = {
    js : 'javaScript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift apple'
}

for (const key in myobj){
    console.log(key);  ////   js  c++   swift 
}
for (const key in myobj){
    console.log(myobj[key]);  ////   javaScript  c++   swift apple 
}



const arr1 = ['python' , 'c++' , 'java' , 'swift' , 'ruby']

for(const ele in arr1){
    console.log(ele);   ////     gives index :  0  1  2  3  4  
}

for(const ele in arr1){
    console.log(arr1[ele]);   ////   python   c++   java   swift   ruby
}



const arr2 = ['Abhi' , 'Golu' , 'Raj' , 'Harsh']

arr2.forEach(function (ele){
    console.log(ele);  ///  Abhi    Golu   Raj    Harsh
})

arr2.forEach((ele) => {
    console.log(ele);  ///  Abhi    Golu   Raj    Harsh
})

function print(item){
    console.log(item);
}

arr2.forEach(print)   ///  Abhi    Golu   Raj    Harsh     pass reference only

arr2.forEach( (item , index ,arr)  => {
   console.log(index , item , arr);  /////  0 Abhi [ 'Abhi', 'Golu', 'Raj', 'Harsh' ]  1 Golu [ 'Abhi', 'Golu', 'Raj', 'Harsh' ]  2 Raj [ 'Abhi', 'Golu', 'Raj', 'Harsh' ]   3 Harsh [ 'Abhi', 'Golu', 'Raj', 'Harsh' ]
})

const coding = [
    {
        Name : 'ABHISHEK',
        Age : 12
    },
        {
        Name : 'GOLU',
        Age : 97
    },
        {
        Name : 'RAJ',
        Age : 56
    }
]

coding.forEach( (item)  => {
     console.log(item.Name , item.Age);  ///  ABHISHEK 12      GOLU 97     RAJ 56  
})


 
// const value = arr2.forEach( (item) => {   ////   forEach loop  return nothing
//     return item
// })
// console.log(value);   ///// undefined 


const nums = [1,2,3,4,5,6,7,8,9,10]

// let newnums = nums.filter( (num) => num > 5)
let newnums = nums.filter( (num) => {
    return num > 5
})
console.log(newnums);   ////  [6,7,8,9,10]


let newarr = []
nums.forEach( (num) => {
    if(num > 5){
        newarr.push(num)
    }
})
console.log(newarr);   ////  [6,7,8,9,10]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbooks =  books.filter( (book) => book.genre==='History')      ////   filter return value

// console.log(userbooks);   
/*[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]*/

const U_books = books.filter( (book) => book.publish >= 2000)
// console.log(U_books);
/*[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

const USERBOOK = books.filter( (book) => {
    return book.publish >=1995 && book.genre === 'History'
})
console.log(USERBOOK);
/*[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/




const mynums = [1,2,3,4,5,6,7,8,9,10]
const NEWNUMS =  mynums.map(  (num)  => num+10)   /////  map  return value
console.log(NEWNUMS);  ///   [11,12,13,14,15,16,17,18,19,20]

const newnumber = mynums.map( (num) => num*10) . map( (num) => num+1) . filter( (num) => num > 50)
console.log(newnumber);   ////  [ 51, 61, 71, 81, 91, 101 ]


const initialValue = 0
// const totalsum = mynums.reduce( ( accumulator , curr_val) => ( accumulator + curr_val ),initialValue)
const totalsum = mynums.reduce( ( accumulator , curr_val) =>  {
//    console.log(`accumulator : ${accumulator}  and  curr_val : ${curr_val}`);
   return accumulator + curr_val 
    },initialValue)
console.log(totalsum);   ///   55




const shoppingCart = [
    {
        itemname : 'JS course',
        price : 2999
    },
    {
       itemname : 'web Dev' ,
       price : 4999
    } ,
    {
        itemname : 'Data science',
        price : 7999
    } , 
    {
        itemname : 'DSA',
        price : 3999
    }
]

const Price_To_Pay = shoppingCart.reduce(  (accumulator , item) => ( accumulator + item.price) , 0)
console.log('Price to Pay : ' ,Price_To_Pay)
