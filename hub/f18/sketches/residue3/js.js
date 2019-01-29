// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//
// window.scrollTo(document.documentElement.scrollWidth*.4, document.documentElement.scrollHeight*.4); // values are x,y-offset
var box = document.querySelector('#container');

var bottom = document.querySelector('.bottom');
var upper = document.querySelector('.upper');
var inner = document.querySelector('.inner');

function blink() {
    // bigbox.classList.add('spin');
    upper.classList.toggle('grow');
    bottom.classList.toggle('grow');
    inner.classList.toggle('soften');
    console.log("click");
}

box.addEventListener('mousedown', blink);
box.addEventListener('mouseup', blink);


$(document).ready(function() {
  $('#container').autoscroll();
});
