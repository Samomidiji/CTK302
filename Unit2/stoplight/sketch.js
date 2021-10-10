let timer = 0;
let state = 0;
let x = 0;


function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background('white');

  fill('grey');
  rect(width / 2, height / 2, 200, 600);

  switch (state) {
    case 0: //green
    fill('black');
    ellipse(width / 2, height / 2 - 180, 150, 150);
    ellipse(width / 2, height / 2, 150, 150);
    fill('green');
    ellipse(width / 2, height / 2 + 180, 150, 150);
    vel = 8
      timer++
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1: //yellow
    fill('black');
    ellipse(width / 2, height / 2 - 180, 150, 150);
    fill('yellow');
    ellipse(width / 2, height / 2, 150, 150);
    fill('black');
    ellipse(width / 2, height / 2 + 180, 150, 150);
    vel = 2
      timer++
      if (timer > 3.59 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2: //red
    fill('red');
    ellipse(width / 2, height / 2 - 180, 150, 150);
    fill('black');
    ellipse(width / 2, height / 2, 150, 150);
    ellipse(width / 2, height / 2 + 180, 150, 150);
    vel = 0
      timer++
      if (timer > 3 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }

  //car movement
  push();
  translate(x, 0);
  car();
  pop();

  x = x + vel
  if (x >= width) {
    x = 0;
  }


}

function car() {
  //car rect
  fill('purple');
  rect(120, height - 275 / 2, 200, 100);
  fill('black');
  ellipse(70, height - 75, 75, 75);
  ellipse(170, height - 75, 75, 75);
}

function mouseReleased() {
  state++
  if (state > 2) state = 0;
}
