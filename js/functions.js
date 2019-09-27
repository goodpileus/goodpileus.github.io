
// removes no-js class if user has javascript enabled
(function (doc, classToAdd) {
  doc.className = (doc.className).replace("no-js", classToAdd);
})(document.documentElement, "js");

// welcome messages
var loadMssg = [
 "cloudy ridges",
 "sunlit spaces",
 "silent for a few days",
 "treading slowly",
 "moving into a new space",
 "something's gone wrong in the garden",
 "archive maybe",
 "the sound of the fan on medium is the ideal sound"
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

  // hide loading mask
  document.getElementById("loading").style.display = "none";
  document.getElementById("wrapper").style.opacity = "1";
}

var interval = setInterval(timer, 5000);

function timer() {
  newPhrase();
}

// RANDOM LIST
// ---------------------------------------------
var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
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
    x[i].style.opacity = "0";
    x[i].style.zIndex = "0";
  }
  x[slideIndex-1].style.opacity = "1";
  x[slideIndex-1].style.zIndex = "999";
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //left
            plusDivs(-1);
            break;
        case 39:
            //right
            plusDivs(+1);
            break;
    }
};

function toggleAbout() {
  var about = document.querySelector(".about");
  about.classList.toggle("about-toggle");
}
