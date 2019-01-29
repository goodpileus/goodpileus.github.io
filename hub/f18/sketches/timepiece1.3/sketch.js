var cols = 1;
var rows = 60;

//blinds
var go = 0;
var speed = .05;

//sun growth
var grow = 0;
var speed2 = .5;

//sun x-axis
var xMove = 0;
var speed4 = .1;

//color changing
var c = 0;
var speed3 = .5;

//sound modulation
var mod = 90;
var modSpeed = .1;

//easing
var yAx = 1;
var easing = 0.005;

var colors = [];

// var noise, env, analyzer;

var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.5;
var decayTime = 0.9;
var susPercent = 0.1;
var releaseTime = 0.8;

var env, env2, env3, env4, env5, env6, env8, osc1, osc2, osc3, osc4, osc5, osc6, osc7, osc8;
var reverb;

var note = 0;
var song;

var hourosc;

function preload() {
  song = loadSound('assets/falling1.mp3')
  song.amp(0.5);
}

function setup() {
  createCanvas(windowWidth*1.5, windowHeight+windowHeight/2);
  frameRate(60);
   for (var i = 0; i < cols; i++) {
    colors[i] = [];
     for (var j = 0; j <rows; j++) {
      // colors[i][j] = random(255 + mouseX);
     }
   }
   
  // song.loop();
   
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);
  
  env2 = new p5.Env();
  env2.setADSR(3, 3, 0.01, 0.01);
  env2.setRange(attackLevel, releaseLevel);
  
  env3 = new p5.Env();
  env3.setADSR(0.001, 0.1, 0.001, 0.01);
  env3.setRange(attackLevel, releaseLevel);
  
  env4 = new p5.Env();
  env4.setADSR(0.1, 0.2, 0.8, 0.01);
  env4.setRange(attackLevel, releaseLevel);
  
  //~every 4 seconds
  osc1 = new p5.Oscillator('sine');
  osc1.amp(env);
  osc1.start();

  //every minute
  osc2 = new p5.Oscillator('square');
  osc2.amp(env2);
  osc2.start();
  
  //longer wait
  osc3 = new p5.Oscillator('sine');
  osc3.amp(env3);
  osc3.start();
  
  //persistent hum
  osc4 = new p5.Oscillator();
  osc4.setType('sine');
  // osc4.start();
  
  osc5 = new p5.Oscillator('square');
  osc5.amp(env8);
  // osc5.start();

  osc6 = new p5.Oscillator('sine');
  osc6.amp(env4);
  osc6.start();
  
  osc7 = new p5.SinOsc();
  env5 = new p5.Env();
  env5.setADSR(0.001, 0.5, 0.1, 0.5);
  env5.setRange(1, 0);
  osc7.start();
  
  osc8 = new p5.SinOsc();
  env6 = new p5.Env();
  env6.setADSR(0.001, 0.5, 0.1, 0.5);
  env6.setRange(1, 0);
  osc8.start();
  
  env7 = new p5.Env();
  env7.setADSR(0.1, 0.2, 0.8, 0.01);
  env7.setRange(attackLevel, releaseLevel);
  
  env8 = new p5.Env();
  env8.setADSR(.9, .9, 0.8, 0.5);
  env8.setRange(attackLevel, releaseLevel);
  
  hourosc = new p5.SqrOsc();
  hourosc.start();
  hourosc.amp(env7);
  
  noStroke();
 }


 function draw() {
   
  hr = hour();
  mn = minute();
  sc = second();
  
  console.log('hour'+hr);
  console.log('minute'+mn);
  console.log('second'+sc);
  
  var r = -20+c;
  var g = -120+c;
  var b = 0;
  
  //easing
  var targetY = sc*(height/60);
  var dy = targetY - yAx;
  yAx += dy * easing;
  noStroke();
  // fill (150+c,150-c,0);
  // noFill();
  
  //red and green
  // fill (-100+c,60,0);
  fill (r,g,b);
   
   //blue and green
  // fill (0,60,-60+c);
  
  //suns
  ellipse(0+xMove,yAx ,width/2,10+(grow/2));
  ellipse(width+xMove,yAx,width/2,10+(grow/2));
  ellipse(width/2+xMove,yAx,width/2,10+(grow/2));
   
  //blinds
  fill (0,0,0);
  for (var i = 0; i < cols; i++) {
    // colors[i] = [];
    
    for (var j = 0; j < rows; j++) {
      colors[i][j] = (0);
      // colors[i][j] = mouseX;
      var x = i * width;
      var y = j * height/40;
      
      // fill (colors[i][j]);
      noStroke();
      rect(x, y, width, height/40-go);
    }
  }
   
   go += speed;
   grow += speed2;
   xMove += speed4;
   c += speed3;
   mod += modSpeed;
   
  if ((go > height/20)||(go < 0)) {
    // speed = 2;
    go = 0;
  }
  
  if ((grow > height)||(grow < 0)) {
    speed2 = speed2 * -1;
    // grow = 0;
  }
  
  if ((xMove > 60)||(xMove < 0)) {
    speed4 = speed4 * -1;
    // grow = 0;
  }
   
  if ((c > 305)||(c < -20)) {
    speed3 = speed3 * -1;
    // grow = 0;
  }
   
  if ((mod > 120)||(mod < 90)) {
    modSpeed = modSpeed * -1;
  }
  
  // rectMode(CENTER);
  // noFill();
  // strokeWeight(5);
  // stroke(255,255,255);
  // rect(width/2,height/2,width/1.5,height);
  
  osc1.freq(120);
  osc2.freq(130-sc);
  osc3.freq(100+sc);
  osc5.freq(200+sc);
  
  //persistent hum
  // osc4.freq(110+(hr*3));
  // osc4.amp(0.1, 0.1);
  
  osc6.freq(80);
  
  env.play(osc1, sc*3, 2);
  // env2.play(osc2, sc*60, 0.05);
  env3.play(osc3, sc*10, 0.1);
  env4.play(osc6, sc/4, 0.1);
  env8.play(osc5, sc*15, 0.1);
  
  hourosc.freq(midiToFreq(50+sc))
  // env7.play(hourosc, sc*30, 0.1);

  osc7.freq(midiToFreq(60));
  env5.play(osc7, sc*50, 0.1);
  
  osc8.freq(midiToFreq(65));
  env6.play(osc8, sc*100, 0.1);
}