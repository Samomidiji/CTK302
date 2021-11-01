let cars = [];

function setup() {
  createCanvas(500, 500);
  noStroke();

  //   for (let i = 0; i < 20; i++) {
  //     cars.push(new Car());
  //   }
}

function draw() {
  background("grey");

  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 0) {
      cars.splice(i, 2);
    }
  }
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(width / 2, height - 80);
    this.vel = createVector(random(-1, 3), random(-5, -6));
    this.a = random(200, 230);
    // this.col = color(random(255),random(255),random(255));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.size = random(10,25)
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 1*this.size, 1*this.size);
  }
  move() {
    this.pos.add(this.vel);
    this.a -= 1;
    //if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    //if (this.pos.y < 0) this.pos.y = height;
  }
}
