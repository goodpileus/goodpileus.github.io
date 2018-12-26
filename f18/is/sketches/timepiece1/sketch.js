var cols = 1;
var rows = 60;

//blinds
var go = 0;
var speed = .05;

//sun growth
var grow = 0;
var speed2 = .5;

//color changing
var c = 0;
var speed3 = .5;

//easing
var yAx = 1;
var easing = 0.005;

var colors = [];

// var noise, env, analyzer;

var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.1;

var env, triOsc;
var reverb;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
   for (var i = 0; i < cols; i++) {
    colors[i] = [];
     for (var j = 0; j <rows; j++) {
      // colors[i][j] = random(255 + mouseX);
     }
   }
  
  reverb = new p5.Reverb();
   
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  triOsc = new p5.Oscillator('sine');
  triOsc.amp(env);
  triOsc.start();
  triOsc.freq(60);
  
  noStroke();
 }

 function draw() {
   
  // hr = hour();
  // mn = minute();
  sc = second();

  //easing
  var targetY = sc*(windowHeight/60);
  var dy = targetY - yAx;
  yAx += dy * easing;

   
   noStroke();
   fill (150+c,150-c,0);
  // ellipse(0,0+(sc*(windowHeight/60)),width/2,10+(grow/2));
  // ellipse(width,0+(sc*(windowHeight/60)),width/2,10+(grow/2));
  // ellipse(width/2,0+(sc*(windowHeight/60)),width/2,10+(grow/2));
  
  //suns
  ellipse(0,yAx ,width/2,10+(grow/2));
  ellipse(width,yAx,width/2,10+(grow/2));
  ellipse(width/2,yAx,width/2,10+(grow/2));
  
  // fill (100+c,100+c,250+c);
  // fill (150+c,150-c,0);
  // ellipse(0,height-yAx ,width/2,(grow/2));
  // ellipse(width/2,height-yAx ,width/2,(grow/2));
  // ellipse(width,height-yAx ,width/2,(grow/2));
   
  //blinds
  for (var i = 0; i < cols; i++) {
    // colors[i] = [];
    
    for (var j = 0; j < rows; j++) {
      colors[i][j] = (0);
      // colors[i][j] = mouseX;
      var x = i * width;
      var y = j * height/20;
      
      fill (colors[i][j]);
      noStroke();
      rect(x, y, width, height/20-go);
    }
  }
   
   go += speed;
   grow += speed2;
   c += speed3;
   
  if ((go > height/10)||(go < 0)) {
    // speed = 2;
    go = 0;
  }
  
  if ((grow > height)||(grow < 0)) {
    // speed2 = speed2 * -1;
    grow = 0;
  }
   
  
  if ((c > 255)||(c < 0)) {
    speed3 = speed3 * -1;
    // grow = 0;
  }
  
  env.play(triOsc, sc, sc);
}