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

var interval = setInterval(timer, 10000);

function timer() {
  newPhrase();
}
