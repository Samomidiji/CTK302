let font1;
let font2;
let font3;

function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  font1 = loadFont("fonts/Boank.ttf");
  font2 = loadFont("fonts/Jengotan.ttf");
  font3 = loadFont("fonts/TheFrankline.ttf");
}



function draw() {
  background(100);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    fill('red');
    ellipse (100,100,100,100);

  } else {
    // when the mouse isn't pressed!
    fill('blue');
rect(100,100,100,100);
  }



  // this shows mouse location - comment it out when you're done!

  fill(random(225),random(225),random(225));
  textFont(font3);
  textSize(50);
  text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
