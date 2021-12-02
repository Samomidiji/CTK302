// Declaring for gyro
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;

let permissionGranted = false;
let cx, cy;


// Declaring Aliens
let aliens = [];
let aliensB = [];
let aliensC = [];
let aliensD = [];
let alienKilled = 0;
let alienBKilled = 0;
let alienCKilled = 0;
let alienDKilled = 0;


// Declearing Bullet
let bullets = [];

// Delecaring Ship position
let shipPos;

// Declearing max aleins
let maxAliens = 10;

// Declearing images
let bg;
let alien;
let alienb;
let alienc;
let aliend;
let bulet;
let ship;
let dots = [];
let maxDots = 100;


function setup() {
  createCanvas(displayWidth, displayHeight);
  rectMode(CENTER);
  noStroke();
  imageMode(CENTER);

  cx = width / 2;
  cy = height - 60;

  // DeviceOrientationEvent, DeviceMotionEvent
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    // ios 13 device

    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        // show permission dialog only the first time
        let button = createButton("click to allow access to sensors");
        button.style("font-size", "24px");
        button.center();
        button.mousePressed(requestAccess);
        throw error;
      })
      // .then(() => {
      //   // on any subsequent visits
      //   permissionGranted = true;
      // });
  } else {
    // non ios 13 device
    textSize(48);
    // text("non ios 13 device", 100, 100);
    permissionGranted = true;
  }

  alpha = 0;
  beta = 0;
  gamma = 0;



  // Adding background, images and font assets
  bg = loadImage('assets/bg.png');
  alien = loadImage('assets/1.png');
  alienb = loadImage('assets/2.png');
  alienc = loadImage('assets/3.png');
  aliend = loadImage('assets/4.png');
  ship = loadImage('assets/ship.png');
  bulet = loadImage('assets/bul.png');

  for (let i = 0; i <= maxDots; i++) {
    dots.push(new Dot());
  }

  //  Spawn alliens
  for (let j = 0; j < maxAliens; j++) {
    aliens.push(new Aliens());
  }

  for (let j = 0; j < maxAliens; j++) {
    aliensB.push(new AliensB());
  }

  for (let j = 0; j < maxAliens; j++) {
    aliensC.push(new AliensC());
  }

  for (let j = 0; j < maxAliens; j++) {
    aliensD.push(new AliensD());
  }
  //  Spawn bullets
  //bullets = new Bullet(width / 2, height / 2);

  //  Spaceship position
  // shipPos = createVector(width / 2, height - 60);

}

function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        permissionGranted = true;
        // window.addEventListener("devicemotion", e);
      } else {
        permissionGranted = false;
      }
    })
    .catch(console.error);

  this.remove();
}

function draw() {
  background(220);
  image(bg, width / 2, height / 2, displayWidth, displayHeight);
  for (let i = 0; i < dots.length; i++) {
    dots[i].display();
    dots[i].move();
  }

  textSize(20);
  textAlign(CENTER);
  fill('white');
  let deadaliens = alienKilled + alienBKilled + alienCKilled + alienDKilled;
  text(deadaliens + " Aliens Dead", width / 2, 100);
  game();
}

function game() {
  //  Display aliens
  for (let j = 0; j < aliens.length; j++) {
    aliens[j].display();
    aliens[j].move();
  }

  for (let j = 0; j < aliensB.length; j++) {
    aliensB[j].display();
    aliensB[j].move();
  }

  for (let j = 0; j < aliensC.length; j++) {
    aliensC[j].display();
    aliensC[j].move();
  }

  for (let j = 0; j < aliensD.length; j++) {
    aliensD[j].display();
    aliensD[j].move();
  }

  //  Display bullets
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].display();
    bullets[i].move();
  }

  // Taking out aliens
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < aliens.length; j++) {
      let d = dist(
        bullets[i].pos.x,
        bullets[i].pos.y,
        aliens[j].pos.x,
        aliens[j].pos.y
      );
      if (d < bullets[i].r + aliens[j].r) {
        // print("KABOOM " + d);
        aliens.splice(j, 1);
        alienKilled++
        bullets[i].dead = true;
      }
    }
  }

  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < aliensB.length; j++) {
      let d = dist(
        bullets[i].pos.x,
        bullets[i].pos.y,
        aliensB[j].pos.x,
        aliensB[j].pos.y
      );
      if (d < bullets[i].r + aliensB[j].r) {
        // print("KABOOM " + d);
        aliensB.splice(j, 1);
        alienBKilled++
        bullets[i].dead = true;
      }
    }
  }

  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < aliensC.length; j++) {
      let d = dist(
        bullets[i].pos.x,
        bullets[i].pos.y,
        aliensC[j].pos.x,
        aliensC[j].pos.y
      );
      if (d < bullets[i].r + aliensC[j].r) {
        // print("KABOOM " + d);
        aliensC.splice(j, 1);
        alienCKilled++
        bullets[i].dead = true;
      }
    }
  }

  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < aliensD.length; j++) {
      let d = dist(
        bullets[i].pos.x,
        bullets[i].pos.y,
        aliensD[j].pos.x,
        aliensD[j].pos.y
      );
      if (d < bullets[i].r + aliensD[j].r) {
        // print("KABOOM " + d);
        aliensD.splice(j, 1);
        alienDKilled++
        bullets[i].dead = true;
      }
    }
  }

  // This Kills the bullets
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].dead == true) {
      bullets.splice(i, 1);
    }
  }
  //  Space ship
  // fill("green");
  // rect(shipPos.x, shipPos.y, 50, 50);

  //  Spaceship position
  // shipPos.x = cx;
  // shipPos.y = cy;

  cx = width / 2;
  cy = height - 60;
  // cx = map(gamma, -18, 18, 0, width);
  // cy = map(beta, 25, 45, 0, height);
  // rotationX, rotationY
  const dx = constrain(rotationY, -3, 3);
  const dy = constrain(rotationX, -3, 3);
  cx += dx * 2;
  cy += dy * 2;
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);

  // shipPos = (width / 2, height - 60);

  image(ship, cx, cy, 70, 109);
  if (cx >= width) cx = width;
  if (cx <= 0) cx = 0;
  if (cy >= height) cx = height;
  if (cy <= 0) cy = 0;
  checkForKey();
  //  Touch screen to shoot
  if (mouseIsPressed) {
    bullets.push(new Bullet());
  }
}



// Spawns Bullets when spacebar is pressed
function keyPressed() {
  if (keyCode === 32) {
    bullets.push(new Bullet());
  }
}

function checkForKey() {
  // if (keyIsDown(32)){
  //   let bullet = new Bullet(width/2, height/2);
  //   bullets.push(bullet);
  // }

  if (keyIsDown(LEFT_ARROW)) {
    cx -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    cx += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    cy -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    cy += 5;
  }
}

class Aliens {
  //  Constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(-500));
    this.vel = createVector(random(-3, 3), random(0.5, 1));
    this.col = color(14, 22, 145);
    this.r = 12;
  }

  //   Display content
  display() {
    // fill(this.col);
    // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    image(alien, this.pos.x, this.pos.y, this.r * 3.67, this.r * 4.5);
  }

  //  Movement
  move() {
    this.pos.add(this.vel);
    if (this.pos.x >= width) this.pos.x = 1;
    if (this.pos.x <= 0) this.pos.x = width;
  }
}

class AliensB {
  //  Constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(-500));
    this.vel = createVector(random(-3, 3), random(0.5, 1));
    this.col = color(235, 122, 135);
    this.r = 12;
  }

  //   Display content
  display() {
    // fill(this.col);
    // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    image(alienb, this.pos.x, this.pos.y, this.r * 3.92, this.r * 3.54);
  }

  //  Movement
  move() {
    this.pos.add(this.vel);
    if (this.pos.x >= width) this.pos.x = 1;
    if (this.pos.x <= 0) this.pos.x = width;
  }
}

class AliensC {
  //  Constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(-500));
    this.vel = createVector(random(-3, 3), random(0.5, 1));
    this.col = color(167, 22, 15);
    this.r = 12;
  }

  //   Display content
  display() {
    // fill(this.col);
    // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    image(alienc, this.pos.x, this.pos.y, this.r * 4.83, this.r * 3.92);
  }

  //  Movement
  move() {
    this.pos.add(this.vel);
    if (this.pos.x >= width) this.pos.x = 1;
    if (this.pos.x <= 0) this.pos.x = width;
  }
}

class AliensD {
  //  Constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(-500));
    this.vel = createVector(random(-3, 3), random(0.5, 1));
    this.col = color(54, 245, 75);
    this.r = 12;
  }

  //   Display content
  display() {
    // fill(this.col);
    // ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    image(aliend, this.pos.x, this.pos.y, this.r * 5.125, this.r * 4.33);
  }

  //  Movement
  move() {
    this.pos.add(this.vel);
    if (this.pos.x >= width) this.pos.x = 1;
    if (this.pos.x <= 0) this.pos.x = width;
  }
}


class Bullet {
  //Constructor and attributes
  constructor() {
    this.pos = createVector(cx, cy;
    this.vel = createVector(0, -5);
    this.col = color("red");
    this.r = 12;
    this.dead = false;
  }

  //   Display content
  display() {
    // fill(this.col);
    // ellipse(this.pos.x, this.pos.y - 60, this.r * 2, this.r * 2);
    image(bulet, this.pos.x, this.pos.y, this.r * 10.64 / 4.5, this.r * 15.33 / 4.5);
  }

  //  Movement
  move() {
    this.pos.add(this.vel);
  }

}

class Dot {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.a = 100;
  }

  display() {
    noStroke();
    fill(255, 255, 255, this.a);
    ellipse(this.pos.x, this.pos.y, random(2, 5));
  }

  move() {
    this.pos.y = this.pos.y + 0.5;
    if (this.pos.y > height) this.pos.y = 0;
  }
}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
// window.addEventListener('deviceorientation', function(e) {
//   alpha = e.alpha;
//   beta = e.beta;
//   gamma = e.gamma;
// });
//
//
// // accelerometer Data
// window.addEventListener('devicemotion', function(e) {
//   // get accelerometer values
//   x = e.acceleration.x;
//   y = e.acceleration.y;
//   z = e.acceleration.z;
// });
