
// removes no-js class if user has javascript enabled
(function (doc, classToAdd) {
  doc.className = (doc.className).replace("no-js", classToAdd);
})(document.documentElement, "js");

// welcome messages
var loadMssg = [
 ". . .",
 ". . .",
 ". . .",
 ". . .",
 ". . ."
];
// randomize
document.getElementById("loading-obj").innerHTML = loadMssg[
  Math.floor(Math.random() * loadMssg.length)
];

// only loads once the window completely loads
window.onload = function() {
  console.log(':-)');

  // hide loading mask
  document.getElementById("loading").style.display = "none";
  document.getElementById("wrapper").style.opacity = "1";

  // CAROUSEL CONTAINER
  // specifies panel-fullImg as the container for flickity carousels
  var carouselContainers = document.querySelectorAll('.panel-fullImg');

  for (var i = 0; i < carouselContainers.length; i++) {
    var container = carouselContainers[i];
    initCarouselContainer(container);
  }

  //creating
  function initCarouselContainer(container) {
    var carousel = container.querySelector('.carousel');
    var flkty = new Flickity(carousel, {
      wrapAround: true,
      prevNextButtons: true,
      draggable: true,
      pageDots: false,
      imagesLoaded: true,
      lazyLoad: true,
      dragThreshold: 20
    });

    var carouselStatus = container.querySelector('.carousel-status');

    // carousel slide counter function
    function updateStatus() {
      var slideNumber = flkty.selectedIndex + 1;
      carouselStatus.textContent = slideNumber + ' / ' + flkty.slides.length;
    }
    updateStatus();
    //when a slide is in focus, the number is updated
    flkty.on('select', updateStatus);

    // carousel static click to advance slide
    flkty.on('staticClick', function(event, pointer, cellElement, cellIndex) {
      if (!cellElement) {
        return;
      }

      if (cellIndex == flkty.selectedIndex) {
        flkty.next();
      } else {
        flkty.select(cellIndex);
      }
    });

    //removes hidden class on page load and resizes carousel
    carousel.classList.remove('is-hidden');
    // trigger redraw for transition
    carousel.offsetHeight;
    // init Flickity
    new Flickity(carousel);
  }

};

//---------------------------------------

// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    // resizes window to fix flickity height
    window.dispatchEvent(new Event('resize'));

    // toggles active class on accordion
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// ABOUT PANEL ACCORDION
var about = document.querySelector('.about-button');
var gradient = document.querySelector('.gradient');
var panel = document.querySelector('.about-panel');

function openAbout() {
    about.classList.toggle("active");

    //expand height
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    //activate opacity on dropdown
    if (panel.style.opacity) {
      panel.style.opacity = null;
    } else {
      panel.style.opacity = "1";
    }

    gradient.classList.toggle("gradient-active");
  }

about.addEventListener('click', openAbout);


//---------------------------------------


// SMOOTH SCROLL
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });


var topBtn = document.querySelector('.topBtn');
var footer = document.querySelector('.footer');

topBtn.onmouseover = function(){
  footer.style.background =  'rgb(251,238,168)';
};

topBtn.onmouseout = function(){
  footer.style.background = 'rgb(214,211,207)';
}

//maintains accessibility when using tabs but hides focus outlines in browsers that always display outlines on click
$("button").keypress(function() {
  this.blur();
  this.hideFocus = false;
  this.style.outline = null;
});
$("button").mousedown(function() {
  this.blur();
  this.hideFocus = true;
  this.style.outline = 'none';
});
