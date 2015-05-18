function clock() {
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
  document.bgColor = '#' + hour + minute + second;
}



setInterval(function(){
  clock();
}, 500);
