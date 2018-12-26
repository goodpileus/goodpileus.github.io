//Alan Chan
//Clock and Hourglass in P5.js
//Inspired by Daniel Shiffman's Coding Train

function setup() {
   createCanvas(800, 400);
   angleMode(DEGREES);
     
   hr = hour();
   mn = minute();
   sc = second();
 }

 function draw() {
  // background(0);
   translate(200, 200);
   
     
   hr = hour();
   mn = minute();
   sc = second();

   fill(255,255,255);
   noStroke();
   textSize(22);
   text((hr%12) + ':' + mn + ':' + sc, -42, -175);
   text((hr%12), 288, 0);
   text(mn, 388, 0);
   text(sc, 488, 0);


   rotate(-90);

     
   //SECONDS
  // strokeWeight();
   stroke(255, 100, 150);
  // noFill();
   secondAngle = map(sc, 0, 60, 1, 360);
   rotate (sc*6);
   ellipse(0, 50, 40* noise(0.01*frameCount + 10),40* noise(0.01*frameCount + 10));
   strokeWeight(2);
   fill(255,100,150);
   arc(-77, 500, 88, 88, -1*(180 + (secondAngle/2)), (180 + (secondAngle/2)), CHORD);
   arc(77, 500, 88, 88,((secondAngle/2))%180, (-1*(secondAngle/2))%180, CHORD);

   //MINUTES
   strokeWeight(8);
   noFill();
   stroke(150, 100, 255);
   minuteAngle = map(mn, 0, 60, 1, 360);
   arc(0, 0, 280, 280, 0, minuteAngle);
   fill(150,100,255);
   strokeWeight(2);
   arc(-77, 400, 88, 88, -1*(180 + (minuteAngle/2)), (180 + (minuteAngle/2)), CHORD);
   arc(77, 400, 88, 88,((minuteAngle/2))%180, (-1*(minuteAngle/2))%180, CHORD);

   //HOURS
   strokeWeight(8);
   noFill();
   stroke(150, 255, 100);
   hourAngle = map(hr % 12, 0, 12, 1, 360);
   arc(0, 0, 260, 260, 0, hourAngle);
   fill(150,255,100);
   strokeWeight(2);
   arc(-77, 300, 88, 88, -1*(180 + (hourAngle/2)), (180 + (hourAngle/2)), CHORD);
   arc(77, 300, 88, 88,((hourAngle/2))%180, (-1*(hourAngle/2))%180, CHORD);
     
     
   //Clock Hands
   push();
   rotate(secondAngle);
   stroke(255, 100, 150);
   line(0, 0, 100, 0);
   pop();

   push();
   rotate(minuteAngle);
   stroke(150, 100, 255);
   line(0, 0, 75, 0);
   pop();

   push();
   rotate(hourAngle);
   stroke(150, 255, 100);
   line(0, 0, 50, 0);
   pop();

   fill(255,255,255);
   strokeWeight(8);
   point(0, 0);
   stroke(255,255,255);
   noFill();
   ellipse(-77, 300,100,100);
   ellipse(-77, 500,100,100);
   ellipse(-77, 400,100,100);
   ellipse(77, 300,100,100);
   ellipse(77, 500,100,100);
   ellipse(77, 400,100,100);

}