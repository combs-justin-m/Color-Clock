function hexClock() {
  function check(i) {if (i < 10) {i = "0" + i;} return i;}
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  minute = check(minute);
  var second = today.getSeconds();
  second = check(second);
  var $clock = document.querySelector('#clock');
  $clock.innerHTML = '#' + hour + minute + second;
  second = check(second);
  document.querySelector('body').style.background = '#' + hour + minute + second;
}

// function regClock() {
//   function check(i) {if (i < 10) {i = "0" + i;} return i;}
//   var today = new Date();
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   minute = check(minute);
//   var second = today.getSeconds();
//   second = check(second);
//   var $clock = document.querySelector('#clock');
//   $clock.innerHTML = hour + ':' + minute + ':' + second;
//   second = check(second);
//   document.querySelector('body').style.backgroundColor = '#' + hour + minute + second;
// }

// var regTimer = setInterval(function(){
//   regClock();
// }, 500);

var hexTimer = setInterval(function(){
    hexClock();
}, 500);

// function showColor() {
//   clearInterval(regTimer);
//   setInterval(function(){
//   hexClock();
// }, 500);
// }

// function showTime() {
//   clearInterval(hexTimer);
//   setInterval(function(){
//   regClock();
// }, 500);
// }

// document.querySelector('#showColor').addEventListener('click', showColor);
// document.querySelector('#showTime').addEventListener('click', showTime);