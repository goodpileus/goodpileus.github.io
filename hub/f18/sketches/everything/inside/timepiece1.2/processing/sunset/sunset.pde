float cols = 1;
float rows = 60;

//blinds
float go = 0;
float speed = .05;

//sun growth
float grow = 0;
float speed2 = .5;

//color changing
float c = 0;
float speed3 = .5;

//easing
float yAx = 1;
float easing = 0.005;

import spout.*;
Spout spout;
String sendername;

void setup() {
  //fullScreen();
  size(700, 300, P3D);
  frameRate(60);
  background(0);
  noStroke();
  spout = new Spout(this);
  sendername = "SpoutBox";
  spout.createSender (sendername, width, height);
 }

 void draw() {
   
  // hr = hour();
  // mn = minute();
  float sc = second();

  //easing
  float targetY = sc*(height/60);
  float dy = targetY - yAx;
  yAx += dy * easing;

   
  noStroke();
  // fill (150+c,150-c,0);
  // noFill();
   fill (-50+c,60,0);
  // ellipse(0,0+(sc*(windowHeight/60)),width/2,10+(grow/2));
  // ellipse(width,0+(sc*(windowHeight/60)),width/2,10+(grow/2));
  // ellipse(width/2,0+(sc*(windowHeight/60)),width/2,10+(grow/2));
  
  //suns
  ellipse(0,yAx ,width/2,10+(grow/2));
  ellipse(width,yAx,width/2,10+(grow/2));
  ellipse(width/2,yAx,width/2,10+(grow/2));
  
  fill (-50+c,60,0);
  // fill (150+c,150-c,0);
  // ellipse(0,height-yAx ,width/2,(grow/2));
  // ellipse(width/2,height-yAx ,width/2,(grow/2));
  // ellipse(width,height-yAx ,width/2,(grow/2));
   
   
   go += speed;
   grow += speed2;
   c += speed3;
   
  if ((go > height/10)||(go < 0)) {
    // speed = 2;
    go = 0;
  }
  
  if ((grow > height)||(grow < 0)) {
    speed2 = speed2 * -1;
    // grow = 0;
  }
   
  
  if ((c > 355)||(c < 0)) {
    speed3 = speed3 * -1;
    // grow = 0;
  }
  
  spout.sendTexture();
}
