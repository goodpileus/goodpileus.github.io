var box = document.querySelector('.bigbox');

var bottom = document.querySelector('.bottom');
var upper = document.querySelector('.upper');

function blink() {
    // bigbox.classList.add('spin');
    upper.classList.toggle('grow');
    bottom.classList.toggle('grow');
    console.log("click");
}

box.addEventListener('mousedown', blink);
box.addEventListener('mouseup', blink);
