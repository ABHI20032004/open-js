#  solution code

## project 3

```javascript

const clock = document.getElementById('clock')
// const clock = document.querySelector('clock')    /// same


setInterval(function() {
  let date = new Date()
// console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
} , 1000)    ///  time in milisecond  1000 means 1 sec

```