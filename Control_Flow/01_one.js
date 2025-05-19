////    if 
const isuserloggedIn = true

if(isuserloggedIn){
   console.log('mazza aa gaya !');  ////  mazza aa gaya !
}

if(2=='2'){
   console.log('mazza aa gaya !');   ////  mazza aa gaya !
}

if(2==='2'){  ////   it also check the data type
   console.log('mazza aa gaya !');  /////  not executed
}


const score = 200
if(score > 100){
   const power = 'fly'
   console.log(`User power : ${power}`);    ////   User power : fly
}
// console.log(`User power : ${power}`);   ///  power is out of scope

if(score > 100)  console.log('test case passed') ,   
      console.log(`code executed`);    /////    test case passed    code executed


let month = 4
switch (month) {
         case 1:
            console.log('JANUARY');
            break;
          case 2:
            console.log('FEBRUARY');
            break;
         case 3:
            console.log('MARCH');
            break
          case 4:
            console.log('APRIL');
            break;
          case 5:
            console.log('MAY');
            break;
          case 6:
            console.log('JUNE');
            break;
          case 7:
            console.log('JULY');
            break;
         case 8:
            console.log('AUGUST');
            break;
          case 9:
            console.log('SEPTEMBER');
            break;
          case 10:
            console.log('OCTOBER');
            break;
           case 11:
            console.log('NOVMEMEBER');
            break;
           case 12:
            console.log('DECEMBER');
            break;         
         default:
            break;
      }
      