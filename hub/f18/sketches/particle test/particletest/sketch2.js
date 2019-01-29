var system;
var img;

function preload() {
  img = loadImage('notes.gif');
}

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width/2, 300));
}

function draw() {
  background(51);
  system.addParticle();
  system.run();
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-.8, .8), random(.1, -1));
  this.position = position.copy();
  this.lifespan = 12;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= .1;
};

// Method to display
Particle.prototype.display = function() {
  // stroke(200, this.lifespan);
  // strokeWeight(2);
  // fill(127, this.lifespan);
  // tint(255, this.lifespan);
  image(img, this.position.x, this.position.y);
  // ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};