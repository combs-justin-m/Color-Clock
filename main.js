function hexClock() {
  function check(i) {if (i < 10) {i = "0" + i;} return i;}
  var today = new Date();
  var hour = check(today.getHours());
  var minute = check(today.getMinutes());
  var second = check(today.getSeconds());
  var $clock = document.querySelector('#clock');
  $clock.innerHTML = '#' + hour + minute + second;
  second = check(second);
  document.querySelector('body').style.background = '#' + hour + minute + second;
}

hexClock();

var hexRunning = true;
var hexTimer = setInterval(function(){
  if (hexRunning){
    hexClock();
  }
}, 1000);

function regClock() {
  function check(i) {if (i < 10) {i = "0" + i;} return i;}
  var today = new Date();
  var hour = check(today.getHours());
  var minute = check(today.getMinutes());
  var second = check(today.getSeconds());
  var $clock = document.querySelector('#clock');
  $clock.innerHTML = hour + ':' + minute + ':' + second;
  second = check(second);
  document.querySelector('body').style.background = '#' + hour + minute + second;
}

var regRunning = false
var regTimer = setInterval(function(){
  if (regRunning){
    regClock();
  }
}, 1000);

function showColor() {
  regRunning = false;
  hexRunning = true;
};

function showTime() {
  hexRunning = false;
  regRunning = true;
};

document.querySelector('#showColor').addEventListener('click', showColor);
document.querySelector('#showTime').addEventListener('click', showTime);