
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    // options
    cellAlign: 'center',
    contain: true,
    pageDots: false,
    freeScroll: false,
    selectedAttraction: 0.0005,
    friction: 0.999,
    prevNextButtons: false,
    wrapAround: true,
    draggable: false
});

var $carousel = $('.main-carousel').flickity()

function next() {
    $carousel.flickity('next');
    console.log('next');
}

function start() {
    $('.sleep').addClass('hide');
    $('html').addClass('bg-animate');

    document.getElementById('budd').play();

    setInterval(next, 1000);

    setTimeout(function () {
        setInterval(next, 500);
    }, 10000);
    
    setTimeout(function () {
        setInterval(next, 100);
    }, 30000);
    
    setTimeout(function () {
        setInterval(next, 50);
    }, 60000);
    
    setTimeout(function () {
        setInterval(next, 30);
    }, 120000);
}