const accountID = 144553
let accountEmail = "abhishek@google.com"
var accountPassword = "123456"
accountCity = "BIHAR"
let accountState;

// accountID = 2    ////   not changed b/c const

accountEmail = "golu@facebook.com"
accountPassword = "98765"
accountCity = "Samastipur"

/*
prefered not used var b/c if anywhere in the code accountPassword is used then it change the original accountPassword
 ';' is not mendatory in JS
*/

console.log(accountID);
console.log(accountEmail)
console.log(accountPassword);
console.log(accountCity)
console.log(accountState);


console.table([accountID, accountEmail, accountPassword, accountCity , accountState]); //// print in the form of table
 



