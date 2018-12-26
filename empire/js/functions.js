// only loads once the window completely loads
window.onload = function() {

  document.querySelector('.load').style.opacity = "0";

  var carousel = document.querySelector('.carousel');
  var flkty = new Flickity(carousel, {
    wrapAround: false,
    prevNextButtons: false,
    draggable: true,
    pageDots: false,
    // imagesLoaded: true,
    // lazyLoad: true,
    // dragThreshold: 20,
    freeScroll:false,
    freeScrollFriction: 0.03,
    initialIndex: 1
  });

  //------ marquee
  $('.marquee').marquee({
      //speed in milliseconds of the marquee
      duration: 12000,
      //gap in pixels between the tickers
      gap: 50,
      //time in milliseconds before the marquee will start animating
      delayBeforeStart: 0,
      //'left' or 'right'
      direction: 'left',
      //true or false - should the marquee be duplicated to show an effect of continues flow
      duplicated: true,
      startVisible:true,
      pauseOnHover: true
  });

  //------ type effect
  new TypeIt('#searchtype', {
       strings: 'Good Morning, Empire',
       speed: 70,
       autoStart: false
  });

  //------ modal
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.querySelector('#Btn');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modalBtn")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  //-- flickity resize hack
  Flickity.prototype._createResizeClass = function() {
    this.element.classList.add('flickity-resize');
  };

  Flickity.createMethods.push('_createResizeClass');

  var resize = Flickity.prototype.resize;
  Flickity.prototype.resize = function() {
    this.element.classList.remove('flickity-resize');
    resize.call( this );
    this.element.classList.add('flickity-resize');
  };

  // resizes window to fix flickity height
  window.dispatchEvent(new Event('resize'));

  //-- hover tips
  var hoverPrev = document.querySelector('.prev-panel');

  var prevDest = document.querySelector('.prev-dest');

  function togglePrev() {
      prevDest.classList.toggle('show-dest');
  }

  hoverPrev.addEventListener('mouseover', togglePrev);
  hoverPrev.addEventListener('mouseout', togglePrev);

  //--

  var hoverNext = document.querySelector('.next-panel');

  var nextDest = document.querySelector('.next-dest');

  function toggleNext() {
      nextDest.classList.toggle('show-dest');
  }

  hoverNext.addEventListener('mouseover', toggleNext);
  hoverNext.addEventListener('mouseout', toggleNext);

  carousel.offsetHeight;
  // init Flickity
  new Flickity(carousel);
};
