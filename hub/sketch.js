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

function setup() {
  var canvas = createCanvas(560, 50);
  canvas.parent('sketch');

  // createCanvas(10, windowHeight);
  frameRate(60);
   for (var i = 0; i < cols; i++) {
    colors[i] = [];
     for (var j = 0; j <rows; j++) {
      // colors[i][j] = random(255 + mouseX);
     }
   }

  noStroke();
 }

 function draw() {

  // hr = hour();
  // mn = minute();
  sc = second();

  //easing
  var targetY = sc*(height/60);
  var dy = targetY - yAx;
  yAx += dy * easing;


   noStroke();
   fill (100+c,-10+c,0);
  // ellipse(0,0+(sc*(windowHeight/60)),width/2,10+(grow/2));
  // ellipse(width,0+(sc*(windowHeight/60)),width/2,10+(grow/2));
  // ellipse(width/2,0+(sc*(windowHeight/60)),width/2,10+(grow/2));

  //suns
  // ellipse(0,yAx ,width/2,10+(grow/2));
  // ellipse(width,yAx,width/2,10+(grow/2));
  ellipse(width/2,yAx,width,10+(grow/2));

  //blinds
  // for (var i = 0; i < cols; i++) {
  //   // colors[i] = [];
  //
  //   for (var j = 0; j < rows; j++) {
  //     colors[i][j] = (0);
  //     // colors[i][j] = mouseX;
  //     var x = i * width;
  //     var y = j * height/20;
  //
  //     fill (colors[i][j]);
  //     noStroke();
  //     rect(x, y, width, height/20-go);
  //   }
  // }

   go += speed;
   grow += speed2;
   c += speed3;

  if ((go > height/10)||(go < 0)) {
    // speed = 2;
    go = 0;
  }

  if ((grow > height/2)||(grow < 0)) {
    speed2 *= -1;
    // grow = 0;
  }


  if ((c > 255)||(c < 0)) {
    speed3 = speed3 * -1;
    // grow = 0;
  }
}
