$(window).bind("load", function() {
    var typed5 = new Typed('#typed', {
      strings: [
        // 'i look at the surface with love and love and love and love and love and fear',
        // 'i move closer to it',
        // 'i want to open it up',
        'i see myself',
        // 'i offer myself',
        // 'one can tell it is hungry',
        'needs nourishment',
        'never satiated',
        'moves faster',
        'new minds falling on to the surface',
        'overflowing but weightless',
        'the window',
        'the desk',
        'the body or mind(?)',
        'i lost my body a long time ago <br> dont know when <br> dont know where'
      ],
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 7000,
      cursorChar: '_',
      shuffle: true,
      smartBackspace: false,
      loop: true
    });
  });

//------ marquee
$('.marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 192000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,
    startVisible:true,
    pauseOnHover: false
});

// var scroll = new SmoothScroll('a[href*="#"]');

// import SweetScroll from 'sweet-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const sweetScroll = new SweetScroll({
    vertical: true,
    horizontal: true,
  });
}, false);
