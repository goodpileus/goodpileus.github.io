var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
  random.appendChild(random.children[Math.random() * i | 0]);
}

var imgDuration = 5000;
var fadeSpeed = 0;
var container = $('.ged-wrap');
var curIndex = -1;

function slideShow() {
    container + $('img').eq(curIndex).fadeOut(fadeSpeed);
    container + $('img').eq(curIndex  = curIndex < container.children().length - 1 ? curIndex + 1 : 0).fadeIn(fadeSpeed);
    setTimeout("slideShow()", imgDuration);
}

slideShow();