let sound1;
let sound2;
let sound3;

function preload() {
  sound1 = loadSound("assest/ForKitchen.mp3");
  sound2 = loadSound("assest/SoftAbstraction.mp3");
  sound3 = loadSound("assest/UpbeatMusic.mp3");
}

function setup() {
  sound3.loop();
}

function draw() {
  createCanvas(500, 500);
  background(20, 233, 20);
}

function mouseReleased() {
  if (sound3.isPlaying()) {
    sound3.pause();
  } else {
    sound3.loop();
  }
}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
