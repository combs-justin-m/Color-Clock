function hexClock() {
  function check(i) {if (i < 10) {i = "0" + i;} return i;}
  var today = new Date();
  var hour = check(today.getHours());
  var minute = check(today.getMinutes());
  var second = check(today.getSeconds());
  var $clock = document.querySelector('#clock');
  $clock.innerHTML = '#' + hour + minute + second;
  second = check(second);
  document.querySelector('body').style.background = '#'+ toHex(hour)+ toHex(minute) + toHex(second);
}

function trueClock() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var $clock = document.querySelector('#clock');
  $clock.innerHTML = '#'+ toHex(hour)+ toHex(minute) + toHex(second);

  document.querySelector('body').style.background = '#'+ toHex(hour)+ toHex(minute) + toHex(second);
}

function regClock() {
  function check(i) {if (i < 10) {i = "0" + i;} return i;}
  var today = new Date();
  var hour = check(today.getHours());
  var minute = check(today.getMinutes());
  var second = check(today.getSeconds());
  var $clock = document.querySelector('#clock');
  $clock.innerHTML = hour + ':' + minute + ':' + second;
  second = check(second);
  document.querySelector('body').style.background = '#'+ toHex(hour)+ toHex(minute) + toHex(second);
}


function toHex(i) {
  var result = i.toString(16);
  while (result.length < 2) {
    result = '0' + result;
  }
  return result;
};

//////////////////////
regClock()

var regRunning = true;
var regTimer = setInterval(function(){
  if (regRunning){
    regClock();
  }
}, 1000);

var hexRunning = false;
var hexTimer = setInterval(function(){
  if (hexRunning){
    hexClock();
  }
}, 1000);

var trueRunning = false;
var trueTimer = setInterval(function(){
  if (trueRunning){
    trueClock();
  }
}, 1000);

function showColor() {
  trueRunning = false;
  regRunning = false;
  hexRunning = true;
};

function showTime() {
  trueRunning = false;
  hexRunning = false;
  regRunning = true;
};

function trueTime() {
  trueRunning = true;
  hexRunning = false;
  regRunning = false;
};

document.querySelector('#showColor').addEventListener('click', showColor);
document.querySelector('#showTime').addEventListener('click', showTime);
document.querySelector('#trueTime').addEventListener('click', trueTime);