/*
Click on different buttons, algorithm produces season-inspired patterns

Spring color palette: mostly green, with splashes of the rainbow for flowers and blue for the 
sky

Summer color palette: Blue for sky, sand color for ground

Fall color palette: Dark green/brown for tree trunks, and orange-red & red for leaves and ground,
maybe with some green

Winter color palette: Very light or very deep blue-purple, with browns and greys, and 
yellow-orange for the Sun
*/

// Current goal: build spring graphic

var system; // From https://p5js.org/examples/simulate-particle-system.html

function setup(){
    createCanvas(windowWidth,windowHeight);

    // From https://p5js.org/examples/simulate-particle-system.html
    system = new ParticleSystem(createVector(width/2, 50)); 
}

function draw(){
    background(0);

    // From https://p5js.org/examples/simulate-particle-system.html
    system.addParticle();
    system.run();
}

// particle function
var Particle = function(position) { // From https://p5js.org/examples/simulate-particle-system.html
    this.acceleration = createVector(0, 0.05); 
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 400;
  };

  Particle.prototype.run = function() { // From https://p5js.org/examples/simulate-particle-system.html
    this.update();
    this.display();
  };

  // Method to update position
  Particle.prototype.update = function(){ // From https://p5js.org/examples/simulate-particle-system.html
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };

  // Method to display
  Particle.prototype.display = function() { // From https://p5js.org/examples/simulate-particle-system.html
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  };

  // Is the particle still useful?
  Particle.prototype.isDead = function(){ // From https://p5js.org/examples/simulate-particle-system.html
    return this.lifespan < 0;
  };
  
  var ParticleSystem = function(position) { // From https://p5js.org/examples/simulate-particle-system.html
    this.origin = position.copy();
    this.particles = [];
  };
  
  // From https://p5js.org/examples/simulate-particle-system.html
  ParticleSystem.prototype.addParticle = function() { 
    this.particles.push(new Particle(this.origin));
  };
  
  ParticleSystem.prototype.run = function() { // From https://p5js.org/examples/simulate-particle-system.html
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };