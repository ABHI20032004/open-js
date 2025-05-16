// let mydate = new Date()
// console.log(mydate);   //////   2025-05-16T09:59:30.230Z

// console.log(mydate.toString());  ////   Fri May 16 2025 09:59:30 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString())   ////   Fri May 16 2025
// console.log(mydate.toISOString());  ////   2025-05-16T10:01:40.677Z
// console.log(mydate.toJSON());    ////    2025-05-16T10:04:59.654Z
// console.log(mydate.toLocaleString());  ///5/16/2025, 10:04:59 AM
// console.log(typeof(mydate));    // /// object

// let date = new Date(2026,1,5)     ////   year ,month , date : month start from 0->jan,1->feb ....
// console.log(date);  /////   2026-02-05T00:00:00.000Z
// console.log(date.toDateString());   ////   Thu Feb 05 2026

let data = new Date(20246,3,24,5,7,8)
console.log(data.toLocaleString());   ///  4/24/20246, 5:07:08 AM

let newdate = new Date('2026-3-24')    ////  yy-mm-dd
console.log(newdate.toLocaleString());     //////     3/24/2026, 12:00:00 AM

let newdates = new Date('3-24-2026')    ////  mm-dd-yy
console.log(newdates.toLocaleString());   ///////      3/24/2026, 12:00:00 AM

let timestamp  = Date.now()
console.log(timestamp);
console.log(data.getTime());

console.log(Math.floor(Date.now()/1000));  ////  in seconds

let d = new Date()
console.log(d);
console.log(d.getDate());   ///// 16
console.log(d.getDay());    ////  5  ->  friday
console.log(d.getMonth());  /////  4    ->   may

let newDate = d.toLocaleString('default', {
    weekday : "long",
})
console.log(newDate);



