$(document).ready(function() {
  $('#container').autoscroll();
});

$(window).bind("load", function() {
    var typed5 = new Typed('#typed', {
      strings: [
        '^2000 BORNHERE',
        '^2000 DIEDHERE',
        '^2000 LIVEDHERE',
        '^2000 THINK<br> OF THE<br> CHILDREN'
      ],
      typeSpeed: 80,
      backSpeed: 1,
      backDelay: 7000,
      cursorChar: '',
      shuffle: true,
      smartBackspace: false,
      fadeOut: true,
      loop: true
    });
  });
