let finger1;
let finger2;
let finger3;
let font;
let numberOfTouches;

function setup() {
  createCanvas(400, 400);
  finger1 = loadImage('assets/1.svg');
  finger2 = loadImage('assets/2.svg');
  finger3 = loadImage('assets/3.svg');
  font = loadFont('assets/DC.ttf')
  imageMode(CENTER);
  textAlign(CENTER);

}

function draw() {

  clear();
  numberOfTouches = touches.length;
  //text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      background('white');
      fill('black')
      textFont(font);
      textSize(24);
      text("no one is touching the screen", width / 2, 100);
      break;

    case 1:
      background('white');
      fill('black')
      textFont(font);
      textSize(24);
      text("Hi, it's just you here", width / 2, 100);
      image(finger1, width / 2, height/2, 300, 300)
      break;

    case 2:
      background('white');
      fill('black')
      textFont(font);
      textSize(24);
      text("Oh, it two of you now!", width / 2, 100);
      image(finger2, width / 2, height/2, 300, 300)
      break;

    case 3:
      background('white');
      fill('black')
      textFont(font);
      textSize(24);
      text("Three of you? You rock!", width / 2, 100);
      image(finger3, width / 2, height/2, 300, 300)
      break;

  }

}
