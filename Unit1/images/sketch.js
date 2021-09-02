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
  image(bulbs, width/2 - 198, height/2, 547/2, 364/2);
  image(lights, width/2 - 210, height/2 - 191, 600/2, 400/2);
  image(flower, width/2 + 15, height/2 - 22, 306/2, 459/2);
}
