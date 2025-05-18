
(function chai(){
    console.log(`DB connected`)  /////   DB connected 
})  ();   /////  semi colon is necessary to run more IIFE


(  ()  =>  {
    console.log(`DB Connected too.`)    /////    DB Connected too.
} )  () ;


(  (name)  =>  {
    console.log(`DB Connected too ${name}.`)    /////    DB Connected too.
} )  ('Abhishek') ;