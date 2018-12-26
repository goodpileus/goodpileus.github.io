// // Where is the circle
// var x, y;
// var img;

// function preload() {
//   img = loadImage('notes.gif');
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // Starts in the middle
//   x = 100;
//   y = height-200;
// }

// function draw() {
//   background(100);
//   image(img, x, y, 10, 20);
  
//   // Jiggling randomly on the horizontal axis
//   x = x + random(-2, 2);
//   // Moving up at a constant speed
//   y = y - 1;
  
//   // Reset to the bottom
//   if (y < random(200, 220)) {
//     y = height-random(190, 210);
//   }
// }

var suns = [];
// var yAx;
var yAx = 1;
var easing = 0.005;

var grow = 0;


var c = 0;
var speed3 = .5;


function setup(){
    createCanvas(windowWidth,windowHeight);
    suns.push(new Sun(width/2, height/2));
}

// function mousePressed(){
//   particles.push(new Particle(mouseX, mouseY));
// }

function draw(){
    background(0);
    
    for(var i = 0; i < suns.length; i++){
       suns[i].update();
       suns[i].show();
    }
}



function Sun(x, y){
  this.x = x;
   this.y = y;
  // this.x2 = x2;
  // this.y2 = y2;
   this.spdx = random(-10, 10);
   this.spdy = random(-10, 10);
   
  // yAx = targetY;
   
   this.history = [];
   
   this.update = function(){
     
      sc = second();
      targetY = sc*(windowHeight/60);
      dy = targetY - yAx;
      yAx += dy * easing;
      // yAx = targetY;
      
      c += speed3;
      
      grow += .5;
      // this.x2 = grow;
      
      // this.x += this.spdx;
      this.y = yAx;
      
      // if(this.x >= width - 25 || this.x <= 25){
      //   this.spdx = -this.yAx; 
      // }
      // if(this.y >= height - 25 || this.y <= 25){
      //   this.spdy = -this.spdy; 
      // }
      
      for(var i = 0; i < this.history.length; i++){
        // this.history[i].x += random(-2, 2);
        // this.history[i].y += random(-2, 2);
      }
      
      var v = createVector(this.x, this.y);
      this.history.push(v);
      if(this.history.length > width){
         this.history.splice(0, 1);
      }
   }
   
   this.show = function(){
       noStroke();
      fill (150-c,0,50+c);
      // fill(255,0,0);
      ellipse(this.x, this.y, this.grow, 200);
      
      // noFill();
      // beginShape();
      for(var i = 0; i < this.history.length; i++){
         var pos = this.history[i];
         ellipse(pos.x, pos.y, i, 200);
          // fill(255,0,0);
          //noStroke();
      }
      // endShape();
   }
}
