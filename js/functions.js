// welcome messages
var loadMssg = [
 "cloudy ridges",
 "sunlit spaces",
 "silent for a few days",
 "treading slowly",
 "moving into a new space",
 "something's gone wrong in the garden",
 "archive maybe",
 "the sound of the fan on medium is the ideal sound",
 "is a secret enough?",
 "soft-hitting message",
 "no arrival",
 "moving to Nevada to buy waterfront property",
 "spent the night worrying",
 "when I leave I am replaced by a bench",
 "hesitating",
 "maybe the sun will rise tomorrow",
 "no solution",
 "ambiguous wall",
 "trembling with un-academic panic",
 "going over the hill into the dim world",
 "horizontal ritual",
 "good error",
 "more elipses...",
 "fearing the end of bees",
 "a space built by worry",
 "sunless, sunset, sunfull, sunrise, stretch",
 "horizontal ritual",
 "I cancel myself",
 "I have not met Alexa"
];
// randomize
document.getElementById("phrase").innerHTML = loadMssg[
  Math.floor(Math.random() * loadMssg.length)
];

function newPhrase() {
  document.getElementById("phrase").innerHTML = loadMssg[
    Math.floor(Math.random() * loadMssg.length)
  ];
}

// only loads once the window completely loads
window.onload = function() {
  console.log(':-)');
  document.body.style.opacity = "1";
}

var interval = setInterval(timer, 10000);

function timer() {
  newPhrase();
}

// RANDOM LIST
// ---------------------------------------------
// var random = document.querySelector('.random');
// for (var i = random.children.length; i >= 0; i--) {
//     random.appendChild(random.children[Math.random() * i | 0]);
// }

function playSound() {
  var obj = document.createElement("audio");
      obj.src = "sound/click.wav";
      obj.play();
      obj.volume = 0.05;
}


// ADVANCE SLIDES
// ---------------------------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    // x[i].style.zIndex = "0";
  }
  x[slideIndex-1].style.display = "block";
  // x[slideIndex-1].style.zIndex = "999";
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //left
            plusDivs(-1);
            playSound();
            break;
        case 39:
            //right
            plusDivs(+1);
            playSound();
            break;
    }
};

$('.slide-img').click(function() {
  plusDivs(+1);
  playSound();
}
);

$('.magnify').click(function() {
  playSound();
  }
);

$('.fw').click(function() {
  plusDivs(+1);
  playSound();
  }
);

$('.bw').click(function() {
  plusDivs(-1);
  playSound();
  }
);

var tooltips = document.querySelectorAll('.toolspan span');

window.onmousemove = function (e) {
    var x = (e.clientX + 5) + 'px',
        y = (e.clientY + 10) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};

$('.magnify').click(function() {
  $('.magnify').toggleClass( "active" );
  $('.slide-img').toggleClass( "grow" );
  $('.embed-wrap').toggleClass( "video-grow" );
  // $('.slide img').css( "max-height", "80vh" );

  }
);
