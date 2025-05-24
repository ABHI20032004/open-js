//////   LEXICAL SCOPE

// function init() {
//   let name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();


// function user(){
//     let username = 'Abhishek'
//     console.log(bhai); ///    not accessable

//     function printUserName(){
//         console.log(username);
//     }
        
//     function extraPrinting(){
//         let bhai = 'GOLU'
//         console.log(username);
//     }

//     function extraPrinting(){
//         console.log(username);
//         console.log(bhai); ///    not accessable
        
//     }

//     printUserName()
//     extraPrinting()
// }

// user()
// // console.log(username);   ///    not accessable



/////    CLOSER

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
