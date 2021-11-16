


// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.a = random(255);  // alpha opacity value for fill!


  // methods
  this.display = function() {

    // maybe use an image here instead!
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x - 50, this.pos.y, 50, 50);
    ellipse(this.pos.x + 50, this.pos.y, 50, 50);
    rect(this.pos.x + 17, this.pos.y - 30, 80, 60) ;

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
