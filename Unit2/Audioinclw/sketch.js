var mic;
var vol;
var c = 'green';
let x = 0 ;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);

  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1
  if (vol > .15) {
    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  }




 x = map(vol, 0, 0.2, 0, 300) ;
ellipse(width/2, height/2, x, x);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
