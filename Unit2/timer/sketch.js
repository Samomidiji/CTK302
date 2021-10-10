let state = 0;
let timer = 0;
let font;
function setup() {
  createCanvas(400, 400);
  font = loadFont('assets/DC.ttf')
  textAlign(CENTER);

}

function draw() {
  background(220);
fill('white');
textFont(font);
textSize(20);
  switch (state) {
    case 0:
      background("red");
      text("state 1 stays for 1 sec", width/2, height/2);
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
          state = 1;
        }
      break;

    case 1:
      background("green");
      text("state 2 stays for 2 sec", width/2, height/2);
       timer++;
      if (timer > 2 * 60) {
        timer = 0;
          state = 2;
        }
      break;

    case 2:
      background("yellow");
      fill('black');
      text("state 3 stays for 3 sec", width/2, height/2);
      timer++;
        if (timer > 3 * 60) {
        timer = 0;
          state = 3;
        }
      break;

    case 3:
      background("blue");
      fill('white');
      text("state 4 stays for 4 sec", width/2, height/2);
      timer++;
        if (timer > 4 * 60) {
        timer = 0;
          state = 4;
        }
      break;

    case 4:
      background("purple");
      text("state 5 stays for 5 sec", width/2, height/2);
      timer++;
        if (timer > 5 * 60) {
        timer = 0;
          state = 0;
        }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
