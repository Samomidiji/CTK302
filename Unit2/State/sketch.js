let state = 0
let timer = 0

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background('red');
      noStroke();
      for (let i = 0; i <= width; i += 20) {
        for (let j = 0; j <= height; j += 20)
          rect(i, j, 15, 15);
      }
      break;

    case 1:
      background(19, 168, 58);
      noStroke();
      for (let i = 0; i <= width; i += 20) {
        for (let j = 0; j <= height; j += 20)
          ellipse(i, j, 15, 15);
      }
      break;

    case 2:
      background(38, 85, 224);
      noStroke();
      for (let i = 0; i <= width; i += 20) {
        for (let j = 0; j <= height; j += 20) {
          push();
          translate(i, j);
          triangle(20, 0, 30, 20, 10, 20);
          pop();
        }
      }
      break;

    case 3:
      background(242, 205, 17);
      for (let i = -200; i <= width; i += 20) {
        for (let j = 0; j <= height; j += 20) {
          push();
          translate(i, 0);
          strokeWeight(2);
          stroke('black');
          line(0, 0, 150, 500);
          pop();
        }
      }
      break;

    case 4:
      background(17, 175, 242);
      fill(255, 0, 0)
      beginShape();
      vertex(330, 180)
      vertex(250, 180)
      vertex(220, 95)
      vertex(180, 180)
      vertex(100, 180)
      vertex(165, 235)
      vertex(140, 305)
      vertex(215, 265)
      vertex(290, 305)
      vertex(265, 235)
      endShape(CLOSE);

      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;
}
