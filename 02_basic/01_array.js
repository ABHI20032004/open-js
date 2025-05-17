const array = [1,3,5,7,9,6,4,true,25.6]
console.log(array);

console.log(array[4]);
console.log();

const arr1 = ['abhi', 'raj' , 'golu']
console.log(arr1);

const arr2 = new Array(1,2,4,5,6,78,98,21)
console.log(arr2);
console.log(arr2.length);   ///   8 

arr1.push(21)
console.log(arr1);   /////   [ 'abhi', 'raj', 'golu', 21 ]
arr1.pop()
console.log(arr1);  ////   [ 'abhi', 'raj', 'golu' ]
arr1.unshift(100)
console.log(arr1); /////  [ 100, 'abhi', 'raj', 'golu' ]     add at start
arr1.shift()
console.log(arr1)  /////    [ 'abhi', 'raj', 'golu' ]     remove 1st element

console.log(arr1.includes(9));   //////   false
console.log(arr1.indexOf(9));   //////   -1   i.e value not exist in aray

const newarray = arr1.join()   //// convert array to string 
console.log(arr1);
console.log(newarray);   /// abhi,raj,golu      in string format 
console.log(typeof newarray);   ///  String


///////    slice and splice

console.log("A : ", arr2);   //////  A :  [1,  2,  4,  5, 6, 78, 98, 21]
const newarr = arr2.slice(1,4)  
console.log(newarr);    ///    [ 2, 4, 5]
console.log("B : ",arr2);   ////  B :  [1,  2,  4,  5, 6, 78, 98, 21]

// console.log("A : ", arr2);  ////  A :  [1,  2,  4,  5, 6, 78, 98, 21]
// const newarr1 = arr2.splice(1,4)     ////  change the array
// console.log(newarr1);   ///    [ 2, 4, 5, 6 ]
// console.log("B : ",arr2);  ////B :  [ 1, 78, 98, 21 ]  

 
const marvel  = ['ironman', 'thor', 'spiderman','monkeyman']
const dc = ['superman' , 'flash' , 'batman' ,'antman']

// marvel.push(dc)
// console.log(marvel);  ///// ['ironman','thor','spiderman','monkeyman',[ 'superman', 'flash', 'batman', 'antman' ]  ]

// marvel.concat(dc)
// console.log(marvel); ///// ['ironman','thor','spiderman','monkeyman',[ 'superman', 'flash', 'batman', 'antman' ]  ]

const all = marvel.concat(dc)
console.log(all); ///// ['ironman','thor','spiderman','monkeyman','superman', 'flash', 'batman', 'antman' ]

const allnew = [...marvel,...dc]      /// valid for more than two aray
console.log(allnew);  ///// ['ironman','thor','spiderman','monkeyman','superman', 'flash', 'batman', 'antman' ]

const arr3 = [1,2,3,[2,4,56,7,[2,[0,6,9]]],12,4,[3,4,7,8]]
console.log(arr3);  ////   [ 1, 2, 3, [ 2, 4, 56, 7, [ 2, [Array] ] ], 12, 4, [ 3, 4, 7, 8 ] ]

const arr4 = arr3.flat(2)   //// go in depth for 2 array
const arr5 = arr3.flat(Infinity)   //// go in depth for all array array
console.log(arr4);  ////[ 1, 2, 3, 2, 4, 56, 7, 2, [ 0, 6, 9 ], 12, 4, 3, 4, 7, 8 ]
console.log(arr5);   /////  [1, 2, 3, 2,  4, 56, 7,2, 0, 6, 9, 12,  4, 3,4, 7, 8] 

console.log(Array.isArray("ABHISHEK"))   /// false 
console.log(Array.from("ABHISHEK"));   //// ['A', 'B', 'H','I', 'S', 'H','E', 'K']

console.log(Array.from({'ABHI' : "RAJ"}));  ///  []   empty array

console.log(Array.of(arr3,arr4,arr5));   ///  combine all variable   [ [ 1, 2, 3, [ 2, 4, 56, 7, [Array] ], 12, 4, [ 3, 4, 7, 8 ] ],    [ 1, 2, 3, 2, 4, 56, 7, 2, [ 0, 6, 9 ], 12, 4, 3, 4, 7, 8 ],     [1, 2, 3, 2, 4, 56, 7, 2, 0, 6, 9, 12,  4, 3, 4, 7, 8]] 