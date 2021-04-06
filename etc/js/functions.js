
// SHOW GRID
function gridShow() {
  $( ".grid-overlay" ).toggleClass( "active" );
}

// 10% ZOOM
function tenP() {
  $( "img" ).css({
    'max-height': '10%'
  });
  $( ".hor" ).css({
    'height': '10%'
  });
  console.log("10%");
}

// 20% ZOOM
function twentyP() {
  $( "img" ).css({
    'max-height': '20%'
  });
  $( ".hor" ).css({
    'height': '20%'
  });
  console.log("20%");
}

// 33.3333% ZOOM
function thirtyP() {
  $( "img" ).css({
    'max-height': '33.3333%'
  });
  $( ".hor" ).css({
    'height': '33.3333%'
  });
  console.log("33.3333%");
}

// 50% ZOOM
function fiftyP() {
  $( "img" ).css({
    'max-height': '50%'
  });
  $( ".hor" ).css({
    'height': '50%'
  });
  console.log("50%");
}

// 100% ZOOM
function hundredP() {
  $( "img" ).css({
    'max-height': '100%'
  });
  $( ".hor" ).css({
    'height': '100%'
  });
  console.log("100%");
}

// RE-ROLL IMAGE ORDER
function nu() {
  var random = document.querySelector('.random');
  for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
  }
}

// TOGGLE LIGHTS
function lights() {
  $( "body" ).toggleClass( "lights" );
  $( ".vert" ).toggleClass( "border-color" );
  $( ".hor" ).toggleClass( "border-color" );
  $( ".h-base" ).toggleClass( "border-color" );
}

// RANDOMIZE CONTAINER CHILDREN
$( document ).ready(function() {
  console.log(':-)');

  var random = document.querySelector('.random');
  for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
  }
});

var interval = setInterval(timer, 1500);

function timer() {
  $('.content-collection').css({
    'opacity': '1'
  });
}

// ENLARGE IMAGE
// $( "img" ).click(function() {
//   $( "img" ).css({
//     'max-height': '33.3333%'
//   });
//   $( this ).css({
//     'max-height': '66.6666%'
//   });
// });

// ELEMENT SCREEN LOCATION CHECK
// checks location of element on screen to determine what the origin point for the transform scale should be
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

$('img').click(function(){
	var pos = offset(this);
  console.log(pos);
  if((pos.left) <= window.screen.width/4){
    $( 'img' ).removeClass( "zoom" );
    $( this ).toggleClass( "zoom" );
  	$(this).css({
    	'transform-origin': 'left'
    });
  }
  else if((pos.left) >= window.screen.width - window.screen.width/4){
    $( 'img' ).removeClass( "zoom" );
    $( this ).addClass( "zoom" );
  	$(this).css({
    	'transform-origin': 'right'
    });
  }
  else if((pos.left) >= window.screen.width/4){
    $( 'img' ).removeClass( "zoom" );
    $( this ).addClass( "zoom" );
  	$(this).css({
    	'transform-origin': 'center'
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})
