let bubls;
let flower;
let lights;

function setup() {
  createCanvas(1000, 1000);
  bulbs = loadImage("assests/bulbs.jpg");
  flower = loadImage("assests/flower.jpg");
  lights = loadImage("assests/lights.jpg");
  imageMode(CENTER);
}

function draw() {
  background(222);
  image(bulbs, width/2, height/2, 547/2, 364/2);
  image(lights, width/2, height/2 - 150, 600/2, 400/2);
  image(flower, width/2 + 150, height/2, 306/2, 459/2);
}
