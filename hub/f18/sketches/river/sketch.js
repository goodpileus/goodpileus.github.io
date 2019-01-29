var a;
var b;
var c;
var sound;

function preload() {
  sound = loadSound('assets/river.ogg');
}

function setup() {
  createCanvas(600, 400);
  sound.loop();
  a = height / 2;
  b = height;
  c = height /5;
}

function draw() {
  background(110, 153, 107);
  fill(83, 103, 252);
  noStroke();
  rect(0, a, width, a);
  a = a + 0.5;
  if (a > height) {
    a = 0;
  }
  
  fill(68, 84, 201);
  rect(0, b, width, b);
  b = b + 0.4;
  if (b > height) {
    b = 0;
  }
  
  fill(54, 67, 160);
  rect(0, c, width, c);
  c = c + 0.3;
  if (c > height) {
    c = 0;
  }
}

function mousePressed() {
  // location.reload(); 
}
