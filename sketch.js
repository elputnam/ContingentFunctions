// Fade in/out variables
const MIN = 0; MAX = 100;
let alf = 100;
let inc = 1;
// Swarm
let dance = [];
let num_particles = 500;
let hue1 = 0;
let x = -200;
let y = -200;



function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  frameRate=20;
  for (let i = 0; i < num_particles; i++) {
    dance.push(new particle(random(100, width-100), random(100, height-100)));
  }
}

function draw() {
  background(0, 1);
  
  if(frameCount%10==0){
  for(let i=0; i < dance.length; i++){
   
    dance[i].update();
    dance[i].display();
    dance[i].edges();
    // dance[i].colorCorrect();
    }
  }
    

  
  
    //shifting grid
  push();
  translate(width/2, height/2);
  // fill(180, random(100), random(100), 100);
  fill(random(100));
  rectMode(CENTER);
  rect(x, y, 200, 200);
  pop();

  if (frameCount%5==0){
    if (y < 200){
      y += 200
    } else {
      y = -200
    }
  }
    // if (frameCount%10==0){
    if (x < 200){
    x += 200
    } else {
      x = -200;
    }
  // }

  // // Fade in and out
  // alf -= inc;
  // if (alf == MIN || alf == MAX){
  // inc *= -1;
  
  // }
  
if(frameCount%100==0){
  fill(random(360), 100, 100)
  rectMode(CENTER);
  rect(width/2, height/2, random(width/2, width), random(height/2, height));
}

}

//resize canvas when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
//Particle class
function particle(x, y){
  this.loc = createVector(x, y);
  this.vel = createVector(0,0);
  this.ts = random(3, 5);
  // this.H = 0;

  this.display = function(){
    noStroke();

    fill(100, 100, random(100));
    // fill(this.H, random(360), random(360), 0.5);
    rect(this.loc.x, this.loc.y, random(10));
  }

  this.update = function() {
    this.a = p5.Vector.random2D();
    this.a.mult(random(3,5));
    this.vel.add(this.a);
    this.vel.limit(this.ts);
    this.loc.add(this.vel);
    this.H += 1;
  }

  this.edges = function() {
    if (this.loc.x < 100) {
      this.loc.x = width-100;
      }
    if (this.loc.x > width-100) {
      this.loc.x = 100;
      }
    if (this.loc.y < 100) {
      this.loc.y = height-100;
      }
    if (this.loc.y > height-100) {
      this.loc.y = 100;
      }
    }
  this.colorCorrect = function()  {
    if (this.H > 360){
      this.H = 00;
    }
  }
  }

