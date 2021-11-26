// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
let humidity = 0;
let temp = 0;
let bg;
let font;
let fontB;
let loct;
let cloud;
let wind;
let drop;
let dots = [];
let maxDots = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Normal,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=fd701dfb06f440d56db96fbdd2cbc3cf'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
  textAlign(CENTER);
  imageMode(CENTER);
  bg = loadImage('asset/bg.jpg');
  font = loadFont('asset/GilroyR.otf')
  fontB = loadFont('asset/GilroySB.otf')
  loct = loadImage('asset/loct.png');
  cloud = loadImage('asset/cloud.png');
  wind = loadImage('asset/wind.png');
  drop = loadImage('asset/drop.png');

  for (let i = 0; i <= maxDots; i++) {
    dots.push(new Dot());
  }

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humidity = weather.main.humidity;
  desc = weather.weather[0].description;


}


function draw() {
  image(bg, width / 2, height / 2, windowWidth, windowHeight);

  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      // background(200);

      image(loct, width / 2 - 65, height / 2 - 300, 240 / 20, 368 / 20);
      fill('White');
      textFont(fontB);
      textSize(30);
      text(weather.name, width / 2, height / 2 - 290);

      textFont(font);
      textSize(80);
      text(temp + "°F", width / 2, height / 2 - 190);

      image(cloud, width / 2, height / 2 + 30, 683 / 1.5, 576 / 1.5);

      image(wind, width / 2 - 165, height / 2 + 273, 235 / 10, 235 / 10);
      image(drop, width / 2 + 40, height / 2 + 273, 221 / 10, 217 / 10);
      textFont(font);
      textSize(20);
      text("Windspeed: " + windspeed, width / 2 - 68, height / 2 + 280);
      text("Humidity: " + humidity, width / 2 + 120, height / 2 + 280);

      textFont(fontB);
      textSize(20);
      text("Description is " + desc, width / 2, height / 2 + 340);

      for (let i = 0; i < dots.length; i++) {
        dots[i].display();
        dots[i].move();
}
        // cloud
        // fill('white');
        // noStroke();
        // ellipse(x, 300, 200, 100);
        //
        // // move the cloud's x position
        // x = x + windspeed;
        // if (x > width) x = 0;

        break;


  }
}

class Dot {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.a = 50
  }

  display() {
    noStroke();
    fill(255,255,255, this.a);
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }

  move() {
    this.pos.x = this.pos.x + windspeed;
    if (this.pos.x > width) this.pos.x = 0;
  }
}
