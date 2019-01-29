var cols = 60;
var rows = 60;

//blinds
var go = 0;
var speed = .05;

//sun growth
var grow = 0;
var speed2 = .2;

//color changing
var c = 0;
var speed3 = .5;

//easing
var yAx = 1;
var easing = 0.01;

var img;

function preload() {
  img = loadImage('assets/tea.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(60);
  
  noStroke();
  
  // typed = createSpan('typed');
  // typed.id('typed');
  // // typed.style("color", "white");
  // fill(100+c,100+grow,100+c, 50);
  // typed.position(width/3, height/1.2);
 }

 function draw() {
   translate(width/2, height/2);
   background (0, 10);
   
   //grid array
   push();
    translate(-width/2, -height/2);
    for (var i = 0; i < cols; i++) {
      // rect(x, y, i, 10);
      for (var j = 0; j < rows; j++) {
        var x = i * width/20;
        var y = j * height/20;
        
        rectMode(CENTER);
        noFill();
        strokeWeight(1);
        stroke(100+c,100+grow,100+c, 50);
        // rect(x, y, 1, 1);
      }
    }
  pop();
   
  hr = hour();
  mn = minute();
  sc = second();

push();
  rotate (90);
  //easing
  var targetY = sc*6;
  var dy = targetY - yAx;
  yAx += dy * easing;
  
  rotate (yAx);
  
  var ang1 = TWO_PI * noise(0.001*frameCount + 10);		
	var ang2 = TWO_PI * noise(0.01*frameCount + 20);
	var ang3 = TWO_PI * noise(0.01*frameCount + 30);
	var bx = 60 * noise(0.001*frameCount + 40);
  // 	var tx = width/4 * noise(0.001*frameCount + width*9);
	var tx = height/2-yAx;
	var size1 = 50 * noise(0.001*frameCount + 0);
	var size2 = 20 * noise(0.001*frameCount + 3000);

  //primary orbiter
	for (var u = 0; u < 8; u++) {
		push();
		rectMode(CENTER);
		// fill(255,0,0);
		fill (100+c,100+grow,100+c);
		// noFill();
		rotate(ang1 + TWO_PI * u * 7.2);
		translate(tx, 0);
		rect(0, 0, 0-yAx/2, 0-yAx/2);
		// image(img,0, 0, 0-yAx, 0-yAx);
		
		translate();
		pop();
	}
	
	//orbiter 2
	for (var d = 0; d < 8; d++) {
		push();
		// fill(255,0,0);
		fill (100+c,10-grow,0);
		// noFill();
		rotate(ang1 + TWO_PI * d * 7.2);
		translate(tx, 0+yAx+300);
		// rect(0, 0, size2, size2);
		translate();
		pop();
	}
  
  rectMode(CENTER);
  fill(10);
  rect (0,0,200,100);
  rect (0,0,150,180);
  rect (0,0,180,150);
  rect (0,0,100,200);
pop();
  
  //sun face
push();
    var eyeH = 10;
    if (sc === 0) {
      eyeH = 2;
    } else { eyeH = 10; }
    
    rectMode(CENTER);
    fill(100+c,100+grow,100+c);
    
    //left eye
    rect (-20,-20,10,eyeH);
    
    //right eye
    rect (20,-20,10,eyeH);
    // rect (-20,-10+grow,5,5);
    
    //mouth
    rect (2,27,30,10 * noise(0.05*frameCount + 60));
    
    //nose
    stroke (100+c,100+grow,100+c);
    strokeWeight(4);
    strokeCap(PROJECT);
    line (3,-25,5,10);
    line (0,10,5,10);
    // line (-28,-26,-12,-26);
    // line (28,-26,12,-26);
    
    //ground/textbox
    translate(-width/2,-height/2)
    fill(0);
    stroke(100+c,100+grow,100+c);
    strokeWeight(.5);
    // rect (width/2, height-200, width/1.8, 200);
  pop();

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
  
  if ((c > 255)||(c < 0)) {
    speed3 = speed3 * -1;
    // grow = 0;
  }
}