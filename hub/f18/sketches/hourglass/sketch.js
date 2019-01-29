//Alan Chan
//Clock and Hourglass in P5.js
//Inspired by Daniel Shiffman's Coding Train

function setup() {
   createCanvas(800, 400);
   angleMode(DEGREES);
 }

 function draw() {
   background(0);
   
   hr = hour();
   mn = minute();
   sc = second();

   fill(255,255,255);
   noStroke();
  // textSize(22);
  // text((hr%12) + ':' + mn + ':' + sc, -42, -175);
  // text((hr%12), 288, 0);
  // text(mn, 388, 0);
  // text(sc, 488, 0); 

   //SECONDS
   fill(39,55,116);
  push();
    rotate(180);
    rect (-width/2-50, -200, 100, 60-sc);
  pop();
  rect (width/2-50, 260, 100, 0-sc);
  
  noFill();
  strokeWeight(2);
  stroke(39,55,116);
  rect (width/2-50, 140, 100, 60);
  rect (width/2-50, 200, 100, 60);

   //MINUTES
  // strokeWeight(8);
  // noFill();
  // stroke(150, 100, 255);
  // minuteAngle = map(mn, 0, 60, 1, 360);
  // fill(150,100,255);
  // strokeWeight(2);
  // arc(-77, 400, 88, 88, -1*(180 + (minuteAngle/2)), (180 + (minuteAngle/2)), CHORD);
  // arc(77, 400, 88, 88,((minuteAngle/2))%180, (-1*(minuteAngle/2))%180, CHORD);

   //HOURS
  // strokeWeight(8);
  // noFill();
  // stroke(150, 255, 100);
  // hourAngle = map(hr % 12, 0, 12, 1, 360);
  // fill(150,255,100);
  // strokeWeight(2);
  // arc(-77, 300, 88, 88, -1*(180 + (hourAngle/2)), (180 + (hourAngle/2)), CHORD);
  // arc(77, 300, 88, 88,((hourAngle/2))%180, (-1*(hourAngle/2))%180, CHORD);
     
     

  // fill(255,255,255);
  // strokeWeight(1);
  // point(0, 0);
  // stroke(255,255,255);
  // noFill();
  // ellipse(-77, 300,100,100);
  // rect(-127, 450,100,100);
  // rect(-77, 400,100,100);
  // rect(77, 300,100,100);
  // rect(27, 450,100,100);
  // rect(77, 400,100,100);

}