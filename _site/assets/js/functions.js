window.onload = function() {
  console.log('page loaded :-)');
};

// --- lightbox
$(".item img").click(function() {
  if ($(this).parent().hasClass("active")) {
    $(".lightbox-bg").removeClass('active');

    $(".item").removeClass( 'hide');
    $(".img-nav").removeClass( 'active');
    $( this ).parent().removeClass( 'active');
  } else {
    $(".lightbox-bg").addClass('active');

    $(".item").addClass( 'hide');
    $(".img-nav").addClass( 'active');
    $( this ).parent().removeClass( 'hide');
    $( this ).parent().addClass( 'active');
  }
});

$(".lightbox-bg").click(function() {
  $(".lightbox-bg").removeClass('active');
  $(".item").removeClass( 'hide');
  $(".item").removeClass('active');
});


// --- lightbox navigation
$(".img-btn").on('click',function(){
  var id = $(this).attr('id');
  var nav;

  if(id=="prev") {
    nav = $(".item.active").prev('.item.hide');
    if(nav.length == 0) nav = $(".item.hide").last();
  } else if(id=="next") {
    nav = $(".item.active").next('.item.hide');
    if(nav.length == 0) nav = $(".item.hide").first();
  }
  
  $(".item.active").addClass("hide");
  $(".item.active").removeClass("active");
  nav.removeClass("hide");
  nav.addClass("active");
});

$(document).keydown(function(e) {
  switch(e.which) {
    
      // left arrow
      case 37:
      $( "#prev" ).click();
      break;
  
      // right arrow
      case 39:
      $( "#next" ).click();
      break;
  
      default: return;
  }
  e.preventDefault();
  
});


// --- studio image functions
$(".studio img").click(function() {

  if ($(this).hasClass("active")) {
    $(".studio img").removeClass( 'active');
    $( this ).removeClass( 'active');
  } else {
    $(".studio img").removeClass( 'active');
    $( this ).addClass( 'active');
  }
});

// --- lazy load
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
});

// --- if url has hash, open that specific element
function openTarget() {
  var hash = location.hash.substring(1);
  console.log(hash);
  if(hash) var details = document.getElementById(hash);
  if(details && details.tagName.toLowerCase() === 'details') details.open = true;
}
window.addEventListener('load', openTarget);
openTarget();



