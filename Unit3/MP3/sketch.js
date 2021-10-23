//Declaring the trash and dirts
let bottles = [];
let bottle;
let bottleTaken = 0;
let maxBottle = 7;
let cans = [];
let can;
let canTaken = 0;
let maxCan = 7;
let plastics = [];
let plastic;
let plasticTaken = 0;
let maxPlastic = 7;

//Declaring the trash can
let trashCan;

//Declaring the background and other asset
let bg;
let name;
let font;
let tryagain;
let play;
let save;
let fail;


//Declaring state and timer
let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 700);

  //Setting rmode to center
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);

  //Adding bottle, can and plastic images
  bottle = loadImage('assets/bottle.png');
  can = loadImage('assets/can.png');
  plastic = loadImage('assets/plastic.png');

  // Adding background and other assets
  bg = loadImage('assets/background.png');
  name = loadImage('assets/name.png');
  tryagain = loadImage('assets/tryagain.png');
  play = loadImage('assets/play.png');
  save = loadImage('assets/save.png');
  fail = loadImage('assets/fail.png');


  //Adding font
  font = loadFont('assets/text.ttf')

  // Adding trash Can
  trashCan = loadImage('assets/bin.png')

  //Spawn bottles
  for (let i = 0; i <= maxBottle; i++) {
    bottles.push(new Bottle());
  }
  //Spawn cans
  for (let j = 0; j <= maxCan; j++) {
    cans.push(new Can());
  }
  //Spawn plastic
  for (let k = 0; k <= maxPlastic; k++) {
    plastics.push(new Plastic());
  }

  //Trash can position
  canPos = createVector(width / 2, height - 80);
}

function draw() {
  background(220);

  switch (state) {
    case 0: // Home/onboarding
      image(bg, width / 2, height / 2, 400, 700);
      image(name, width / 2, height / 2 - 150, 94.4 * 3, 44.9 * 3);
      textFont(font);
      textSize(18);
      text('Save the world from trash invasion by preventing them from hitting the floor', width / 2, height / 2 + 50, 300, 200);
      image(play, width / 2, height / 2 + 70, 74.3 * 2, 21.1 * 2);
      // text(mouseX + " , " + mouseY, 350, 50);
      break;

    case 1: // Play game
      game();
      break;

    case 2: // Win game
      image(bg, width / 2, height / 2, 400, 700);
      image(save, width / 2, height / 2 - 150, 94.4 * 3, 44.9 * 3);
      textFont(font);
      textSize(18);
      text('Yaaaay! Your good deed has saved us from the trash apocalypse. Thank you!', width / 2, height / 2 + 50, 300, 200);
      image(tryagain, width / 2, height / 2 + 70, 74.3 * 2, 21.1 * 2);
      break;

    case 3: // lose game
      image(bg, width / 2, height / 2, 400, 700);
      image(fail, width / 2, height / 2 - 150, 94.4 * 3, 44.9 * 3);
      textFont(font);
      textSize(18);
      text('You have brougt upon us the doom of trash. Play again to redeem yourself!', width / 2, height / 2 + 50, 300, 200);
      image(tryagain, width / 2, height / 2 + 70, 74.3 * 2, 21.1 * 2);
      break;
  }

}

// Setting for clicks
function mouseReleased() {
  switch (state) {
    case 0:
      if ((mouseX > 128) && (mouseX < 273) && (mouseY > 400) && (mouseY < 440)) {
        state = 1;
      }
      break;

    case 1:

      break;

    case 2:
      if ((mouseX > 128) && (mouseX < 273) && (mouseY > 400) && (mouseY < 440)) {
        state = 0;
        resetGame();
      }
      break;

    case 3:
      if ((mouseX > 128) && (mouseX < 273) && (mouseY > 400) && (mouseY < 440)) {
        state = 0;
        resetGame();
      }
      break;


  }
}
// main game
function game() {
  background("white");

  //Display background
  image(bg, width / 2, height / 2, 400, 700);

  //Displays bottles falling
  for (let i = 0; i < bottles.length; i++) {
    bottles[i].display();
    bottles[i].move();

    if (bottles[i].pos.dist(canPos) < 60) {
      bottles.splice(i, 1);
      bottleTaken++;
    }
    // set game to fail when bottle hits the floor
    // if (bottles[i].pos.y >= height) state = 3
  }

  //Displays cans falling
  for (let j = 0; j < cans.length; j++) {
    cans[j].display();
    cans[j].move();

    if (cans[j].pos.dist(canPos) < 60) {
      cans.splice(j, 1);
      canTaken++;
    }

    // set game to fail when can hits the floor
    // if (cans[j].pos.y >= height) state = 3
  }

  //Displays plastics falling
  for (let k = 0; k < plastics.length; k++) {
    plastics[k].display();
    plastics[k].move();

    if (plastics[k].pos.dist(canPos) < 60) {
      plastics.splice(k, 1);
      plasticTaken++;
    }

    // set game to fail when plastic hits the floor
    // if (plastics[k].pos.y >= height) state = 3
  }

  if (bottles.length == 0 && cans.length == 0 && plastics.length == 0) {
    state = 2;
  }

  //Trash Can - change to image
  //fill("green");
  image(trashCan, canPos.x, canPos.y, 243 / 3, 356 / 3);
  checkForKey();
  touchMoved()
}

//Declare Key Functions
function checkForKey() {
  if (keyIsDown(LEFT_ARROW)) {
    canPos.x -= 5;
    if (canPos.x <= 0) canPos.x = 0;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    canPos.x += 5;
    if (canPos.x >= width) canPos.x = width;
  }
}

//Declare touch Functions
function touchMoved(){
  valueX = canPos.x -= 5
  valueY = canPos.x += 5
}

//Declaring the Bottle class
class Bottle {
  //Consructor takes properties like colors and position
  constructor() {
    this.pos = createVector(random(width), random(-800, 0));
    this.vel = createVector(0, random(0.3, 1));
    this.col = color(0, 19, 254);
  }

  //Display takes in what you want to showcase like images and shapes
  display() {
    // fill(this.col);
    //add image here
    image(bottle, this.pos.x, this.pos.y, 25.1, 40);
  }

  //Move determin the direction and velocity
  move() {
    this.pos.add(this.vel);
    if (this.pos.y >= height) state = 3;
  }
}

//Declaring the Can class
class Can {
  //Consructor takes properties like colors and position
  constructor() {
    this.pos = createVector(random(width), random(-800, 0));
    this.vel = createVector(0, random(0.3, 1));
    this.col = color("red");
  }

  //Display takes in what you want to showcase like images and shapes
  display() {
    // fill(this.col);
    //add image here
    image(can, this.pos.x, this.pos.y, 25.1, 35.6);
  }

  //Move determin the direction and velocity
  move() {
    this.pos.add(this.vel);
    if (this.pos.y >= height) state = 3;
  }
}

//Declaring the Plastic class
class Plastic {
  //Consructor takes properties like colors and position
  constructor() {
    this.pos = createVector(random(width), random(-800, 0));
    this.vel = createVector(0, random(0.3, 1));
    this.col = color("yellow");
  }

  //Display takes in what you want to showcase like images and shapes
  display() {
    // fill(this.col);
    //add image here
    image(plastic, this.pos.x, this.pos.y, 25.1, 39.7);
  }

  //Move determin the direction and velocity
  move() {
    this.pos.add(this.vel);
    if (this.pos.y >= height) state = 3;
  }
}

function resetGame() {
  //this will reset parameters to zero

  bottles = [];
  bottleTaken = 0;
  cans = [];
  canTaken = 0;
  plastics = [];
  plasticTaken = 0;
  state = 0;
  timer = 0;

  //Spawn bottles
  for (let i = 0; i <= maxBottle; i++) {
    bottles.push(new Bottle());
  }
  //Spawn cans
  for (let j = 0; j <= maxCan; j++) {
    cans.push(new Can());
  }
  //Spawn plastic
  for (let k = 0; k <= maxPlastic; k++) {
    plastics.push(new Plastic());
  }
}
