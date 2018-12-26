/*
 * @name Load and Play Sound
 * @description Load sound during preload(). Play a sound when canvas is clicked.
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */
var song;

function setup() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}


function draw() {
  var amplitude = map(mouseX, 0, width, 0, width);
  if (amplitude > width/2) {
    amplitude *= -1;
  }else {
    amplitude = map(mouseX, 0, width, 0, width);
  }
  ellipse(amplitude, 25, 25, 25);
  
  // if (xPos > width/2*1000) {
  //   xPos *= -1;
  // }
  
  song.setVolume(amplitude);
}