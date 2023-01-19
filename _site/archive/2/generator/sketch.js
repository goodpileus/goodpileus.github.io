var canvas;
var fontRegular;

//sliders
var wealth;
var power;
var hatred;
var health;
var left;
var up;
var fortune;
var yesterday;
var mph;
var sharp;

var toggle1;
var toggle2;
var toggle3;

var tog1 = false;
var tog2 = false;
var tog3 = false;

var gridBg;
var randomize;
var screenshot;

//measurements
var sliderVert = 70;
var headerS = 20;
var textS = 12;
var sidebarW = 460;

function preload() {
  fontRegular = loadFont('assets/LabMono-Regular.otf');
  fontBold = loadFont('assets/LabMono-Regular.otf');
  fontItalic = loadFont('assets/LabMono-Regular.otf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight-1);
  canvas.parent('generatorCanvas');
  textSize(textS);
  textFont(fontRegular);

  //sliders
    wealth = createSlider(0, 20, 3);
    wealth.position(130, sliderVert);
    wealth.style('width', '200px');
    wealth.class("slider");
  
    power = createSlider(0, width/2, 10);
    power.position(130, wealth.y+(height*.05));
    power.style('width', '200px');
    power.class("slider");
  
    hatred = createSlider(0, height/2, 10,5);
    hatred.position(130, power.y+(height*.05));
    hatred.style('width', '200px');
    hatred.class("slider");
    
    sharp = createSlider(0, 100, 10);
    sharp.position(130, hatred.y+(height*.05));
    sharp.style('width', '200px');
    sharp.class("slider");
    
  //-----------
    toggle1 = createButton('media empire [m]');
    toggle1.position(sidebarW/2-100, sharp.y+(height*.05)+15);
    toggle1.class("btntogOff");
    toggle1.mousePressed(toggleEv1);
  
    left = createSlider(-width*2, width*2, 150,5);
    left.position(130, toggle1.y+(height*.05));
    left.style('width', '200px');
    left.class("slider");
  
    up = createSlider(-height*2, height*2, 150,5);
    up.position(130, left.y+(height*.05));
    up.style('width', '200px');
    up.class("slider");
  
    yesterday = createSlider(0, 100, 10);
    yesterday.position(130, up.y+(height*.05));
    yesterday.style('width', '200px');
    yesterday.class("slider");
    
  //-----------
    toggle2 = createButton('social network [n]');
    toggle2.position(sidebarW/2-100, yesterday.y+(height*.05)+15);
    toggle2.class("btntogOff");
    toggle2.mousePressed(toggleEv2);
  
    fortune = createSlider(0, 300, 150,5);
    fortune.position(130, toggle2.y+(height*.05));
    fortune.style('width', '200px');
    fortune.class("slider");
  
    health = createSlider(0, 300, 150,5);
    health.position(130, fortune.y+(height*.05));
    health.style('width', '200px');
    health.class("slider");
    
    mph = createSlider(0, 10, 1);
    mph.position(130, health.y+(height*.05));
    mph.style('width', '200px');
    mph.class("slider");
    
    toggle3 = createButton('boost followers [b]');
    toggle3.position(sidebarW/2-100, mph.y+(height*.05));
    toggle3.class("btntogOff");
    toggle3.mousePressed(toggleEv3);
    
  //buttons
    randomize = createButton('re-brand [r]');
    randomize.position(sidebarW/2-150, toggle3.y+(height*.05)+15);
    randomize.class("button");
    randomize.mousePressed(randomizeEv);
    
    gridBg = createButton('new venture [v]');
    gridBg.position(sidebarW/2-150, randomize.y+(height*.05));
    gridBg.class("button");
    gridBg.mousePressed(changeBG);
    
    screenshot = createButton('remember this moment [s]');
    screenshot.position(sidebarW/2-150, gridBg.y+(height*.05));
    screenshot.class("button");
    screenshot.mousePressed(shootScreen);
    
  for (var x=0; x<=width; x+=20) {
    for (var y=0; y<=height; y+=20) {
      push();
        strokeWeight(1);
        stroke(255, 0, 0);
        fill(220);
        rect (x, y, 20, 20);
      pop();
    }
  }

}

function draw() {
  var wealthS = wealth.value();
  var powerS = power.value();
  var hatredS = hatred.value();
  var fortuneS = fortune.value();
  var healthS = health.value();
  var leftS = left.value();
  var upS = up.value();
  var yesterdayS = yesterday.value();
  var mphS = mph.value();
  var sharpS = sharp.value();

  var lightgray = color(220);
  var midgray = color(220,99);
  var softgray = color(220,10);
  var darkgray = color(50)
  
  var cream = color(225,205,181,200);
  var lightgreen = color(129, 255, 140,60);
  var darkgreen = color(111, 217, 120);
  var yellow = color(250, 249, 131,80);
  var redd = color(255, 63, 63);
  var bluee = color(90, 108, 255,80);
  

  var x=0;
  var y=0;

  background(240,240,240,sharpS)
  
 stroke(darkgray);
  if (mouseX > sidebarW && mouseX < width-2 && mouseY < height-2 && mouseY > 0){
    cursor(CROSS);
    
    //star
    push();
      fill(redd);
      translate(mouseX, mouseY);
      rotate(frameCount / 50);
      star(0, 0, hatredS, powerS, wealthS); 
    pop();
  }else{
    cursor(ARROW);
    //star
    push();
      fill(redd);
      translate(width/2+sidebarW/2, height/2);
      rotate(frameCount / 50);
      star(0, 0, hatredS, powerS, wealthS); 
    pop();
  }
  
 stroke(darkgray);
//spinning circle
  if (tog1 === true) {
    if (tog3 === true && mouseX > sidebarW && mouseX < width-2 && mouseY < height-2 && mouseY > 0) {
      push();
        fill(cream);
        translate(mouseX, mouseY);
        rotate(radians(frameCount)*(yesterdayS/10));
        ellipse(width/5, height/5, leftS,upS);
      pop();
    } else {
      push();
        fill(cream);
        translate(width/2+(sidebarW/2), height/2);
        rotate(radians(frameCount)*(yesterdayS/10));
        ellipse(width/5, height/5, leftS,upS);
      pop();
    }
  }
  

 stroke(darkgray);
//many spinning circles
  if (tog2 === true) {
    if (tog3 === true && mouseX > sidebarW && mouseX < width-2 && mouseY < height-2 && mouseY > 0) {
      push();
        translate(mouseX, mouseY);
        rotate(radians(frameCount)*(mphS/10)+height);
        for (x=-2000; x<=2000; x+=150) {
          for (y=-2000; y<=2000; y+=150) {
            fill (softgray);
            ellipse (x, y+100, fortuneS,healthS);
          }
        }
      pop();
    } else {
      push();
        translate(width/2+sidebarW/2, height/2);
        rotate(radians(frameCount)*(mphS/10)+height);
        for (x=-2000; x<=2000; x+=150) {
          for (y=-2000; y<=2000; y+=150) {
            fill (softgray);
            ellipse (x, y+100, fortuneS,healthS);
          }
        }
      pop();
    }
  }

//sidebar
  push();
    stroke(darkgray);
    fill(lightgray);
    rect(-2,-2,sidebarW+2,height+2);
  pop();

//sidebar text
  noStroke();
  textAlign(CENTER);
    textFont(fontBold);
    textSize(headerS);
      text ("TECH ETHICS DILEMMA GENERATOR", sidebarW/2, wealth.y-30);

    textFont(fontRegular);
    textSize(textS);
      // text("ethics", sidebarW/2, wealth.y-15);
      // text("digital product", sidebarW/2, toggle1.y-20);
      stroke (150);
      line(50,toggle1.y-20,sidebarW-50, toggle1.y-20);
      line(50,toggle2.y-20,sidebarW-50, toggle2.y-20);
      line(50,randomize.y-10,sidebarW-50, randomize.y-10);
      // text("scalability", sidebarW/2, yesterday.y-20);


  noStroke ();
  textAlign(RIGHT);
  textFont(fontRegular);
  textSize(textS);
    text("humanity", wealth.x-20, wealth.y+textS);
    text("convenience", power.x-20, power.y+textS);
    text("goodwill", hatred.x-20, hatred.y+textS);
    text("honesty", left.x-20, left.y+textS);
    text("utility", up.x-20, up.y+textS);
    text("solitude", fortune.x-20, fortune.y+textS);
    text("wellness", health.x-20, health.y+textS);
    text("yesterday", yesterday.x-20, yesterday.y+textS);
    text("0 mph", mph.x-20, mph.y+textS);
    text("sharpness", sharp.x-20, sharp.y+textS);

  textAlign(LEFT);
    text("wealth", wealth.x + wealth.width+20, wealth.y+textS);
    text("power", power.x + power.width+20, power.y+textS);
    text("malice", hatred.x + hatred.width+20, hatred.y+textS);
    text("aesthetic", left.x + left.width+20, left.y+textS);
    text("luxury", up.x + up.width+20, up.y+textS);
    text("frenzy", fortune.x + fortune.width+20, fortune.y+textS);
    text("success", health.x + health.width+20, health.y+textS);
    text("today", yesterday.x + yesterday.width+20, yesterday.y+textS);
    text("10,000 mph", mph.x + mph.width+20, mph.y+textS);
    text("softness", sharp.x + sharp.width+20, sharp.y+textS);
}

//toggle for toggle1
function toggleEv1() {
  if (tog1 === false) {
    tog1 = true;
    toggle1.class("btntogOn");
  } else if (tog1 === true) {
    tog1 = false;
    toggle1.class("btntogOff");
  }
}

//toggle for toggle2
function toggleEv2() {
  if (tog2 === false) {
    tog2 = true;
    toggle2.class("btntogOn");
  } else if (tog2 === true) {
    tog2 = false;
    toggle2.class("btntogOff");
  }
}

//toggle for toggle3
function toggleEv3() {
  if (tog3 === false) {
    tog3 = true;
    toggle3.class("btntogOn");
  } else if (tog3 === true) {
    tog3 = false;
    toggle3.class("btntogOff");
  }
}

//grid bg event
function changeBG() {
  for (var x=0; x<=width; x+=20) {
    for (var y=0; y<=height; y+=20) {
      push();
        strokeWeight(1);
        stroke(255, 0, 0);
        fill(220);
        rect (x, y, 20, 20);
      pop();
    }
  }
  
  wealth.value(0);
  power.value(0);
  hatred.value(0);
  fortune.value(0);
  health.value(0);
  up.value(0);
  left.value(0);
  yesterday.value(0);
  mph.value(0);
}

//randomize event
function randomizeEv() {
  wealth.value(random(0,20));
  power.value(random(0,width/2));
  hatred.value(random(0,height/2));
  fortune.value(random(0,300));
  health.value(random(0,300));
  up.value(random(-width/2,width/2));
  left.value(random(-height/2,height/2));
  yesterday.value(random(0,100));
  mph.value(random(0,10));
}

//key shortcuts
function keyTyped() {
  if (key === 'm') {
    toggleEv1();
  }  
  
  if (key === 'n') {
    toggleEv2();
  }   
  
  if (key === 'b') {
    toggleEv3();
  }  
  
  if (key === 's') {
    save('generator.png');
  }
  
  if (key === 'r') {
    randomizeEv();
  }
  
  if (key === 's') {
    shootScreen();
  }
  
  if (key === 'v') {
    changeBG();
  }
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function shootScreen() {
  save('generator.png');
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
