let emojis = [];
let emj;
let canon;

function setup() {
  createCanvas(500, 500);
  noStroke();

emj = loadImage('assets/emoji.png');
canon = loadImage('assets/canon.png');
}

function draw() {
  background(19, 168, 242);
  emojis.push(new Emoji());

  for (let i = 0; i < emojis.length; i++) {
    emojis[i].display();
    emojis[i].move();

    if (emojis[i].a <= 0) {
      emojis.splice(i, 2);
    }
  }
  image(canon, 0, height/2, 36.1 * 4, 29.4 * 4);
}

class Emoji {
  constructor() {
    // attributes
    this.pos = createVector(115, 260);
    this.vel = createVector(random(1, 5), random(-2, 1));
    this.a = random(200, 230);
    // this.col = color(random(255),random(255),random(255));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.size = random(10,40)
  }

  // methods
  display() {
    // fill(this.r, this.g, this.b, this.a);
    image(emj, this.pos.x, this.pos.y, 1*this.size, 1*this.size);

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
