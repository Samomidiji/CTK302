// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
let humidity = 0;
let temp = 0;
let tempc = 0;
let bg;
let font;
let fontB;
let loct;
let cloud;
let jack;
let freeze;
let wind;
let tempt;
let drop;
let dots = [];
let maxDots = 500;
let lat;
let long;

var locationData;

function preload() {
  locationData = getCurrentPosition();
}

// function positionPing(position) {
//   distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');
//   let lat = locationData.latitude;
//   let long = locationData.longitude;
//   let latPos = position.latitude;
//   let longPos = position.longitude;
//
//   print(lat);
//   print(long);
//
// }


function setup() {
  createCanvas(windowWidth, windowHeight);

  // // this is what calls positionPing function
  // getCurrentPosition(positionPing);

  //Declaing Latitude and Longitude from locationData
  let lat = locationData.latitude;
  let long = locationData.longitude;
  print(lat);
  print(long);

  // // HERE is the call to get the weather.
  //
  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&';
  //
  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';
  //
  var myIDString = 'appid=fd701dfb06f440d56db96fbdd2cbc3cf'; // USE YOUR ID HERE, take out the x's!!!
  //
  var myBigString = myCityString + myIDString;
  //
  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
  textAlign(LEFT);
  imageMode(CENTER);
  rectMode(CENTER);
  bg = loadImage('asset/bg.jpg');
  font = loadFont('asset/GilroyR.otf')
  fontB = loadFont('asset/GilroySB.otf')
  loct = loadImage('asset/loct.png');
  cloud = loadImage('asset/cloud.png');
  jack = loadImage('asset/jack.png');
  tempt = loadImage('asset/temp.png');
  freeze = loadImage('asset/freeze.jpg');
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
  temp = round(weather.main.temp);
  humidity = weather.main.humidity;
  desc = weather.weather[0].description;


}


function draw() {
  // image(bg, width / 2, height / 2, 1920, 1080);
  background(235, 235, 235);

  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      //background('blue');
      for (let i = 0; i < dots.length; i++) {
        dots[i].display();
        dots[i].move();
      }

      drawingContext.shadowOffsetX = 0;
      drawingContext.shadowOffsetY = 0;
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = color(222, 222, 222);
      fill('white');
      image(freeze, width / 2 - 160, height / 2, 300, 500);
      // rect(width / 2 - 160, height / 2, 300, 500);

      drawingContext.shadowOffsetX = 0;
      drawingContext.shadowOffsetY = 0;
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = color(222, 222, 222);
      fill('white');
      rect(width / 2 + 160, height / 2 - 200, 300, 100);

      drawingContext.shadowOffsetX = 0;
      drawingContext.shadowOffsetY = 0;
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = color(222, 222, 222);
      fill('white');
      rect(width / 2 + 80, height / 2 - 30, 140, 200);

      drawingContext.shadowOffsetX = 0;
      drawingContext.shadowOffsetY = 0;
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = color(222, 222, 222);
      fill('white');
      rect(width / 2 + 240, height / 2 - 30, 140, 200);

      drawingContext.shadowOffsetX = 0;
      drawingContext.shadowOffsetY = 0;
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = color(222, 222, 222);
      fill('white');
      rect(width / 2 + 160, height / 2 + 170, 300, 160);

      textAlign(LEFT);
      image(loct, width / 2 + 50, height / 2 - 200, 432 / 15, 650 / 15);
      fill('Black');
      textFont(font);
      textSize(16);
      text("You are in", width / 2 + 80, height / 2 - 210);
      textFont(fontB);
      textSize(30);
      text(weather.name, width / 2 + 80, height / 2 - 180);

      image(tempt, width / 2 + 80, height / 2 - 70, 168 / 3.5, 232 / 3.5);
      image(wind, width / 2 + 240, height / 2 - 70, 78, 46);
      textAlign(CENTER);
      textFont(fontB);
      textSize(35);
      // tempc = round((temp - 32) / 1.8);
      text(temp + "°C", width / 2 + 80, height / 2 + 10);
      text(windspeed, width / 2 + 240, height / 2 + 10);
      textFont(font);
      textSize(16);
      text("Temperature", width / 2 + 80, height / 2 + 35);
      text("Windspeed", width / 2 + 240, height / 2 + 35);

      // image(jack, width / 2, height / 2 + 30, 177, 403);
      textAlign(LEFT);
      textFont(fontB);
      textSize(14);
      text("NOTE", width / 2 + 35, height / 2 + 125);
      textFont(font);
      textSize(16);
      text("Today, " + desc + " is expected, with a humidity of " + humidity +". Put on a jacket as shown. It would be cold and windy." ,
      width / 2 + 165, height / 2 + 220, 260, 160);

      // textFont(fontB);
      // textSize(20);
      // text("Description is " + desc, width / 2, height / 2 + 340);


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
    fill(48, 217, 255, this.a);
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }

  move() {
    this.pos.x = this.pos.x + windspeed;
    if (this.pos.x > width) this.pos.x = 0;
  }
}
