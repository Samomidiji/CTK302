var abouts = [];
let url = "";
let response = ['Response 1', 'Response 2', 'Response 3', 'Response 4',
  'Response 5', 'Response 6', 'Response 7'
];
let num;
let resp = [];
let n = [];
let bg;
let sleep;

function setup() {
  let key = "1HRlWNFAid3KRgoOPiXRFlxUS0TcgAjea4QsLdw5o_iw"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  bg = loadImage('asset/bg.jpg');
  sleep = loadImage('asset/sleep.png');
}

// The data comes back as an array of objects

function gotData(data) {
  sheet = data;
  console.log(sheet); // Print the data in the console

  for (let i = -1; i < sheet.length; i++) {
    resp.push(new Response(width / 2 - 630 + i * 180, 253, n));
    num = i + 2
    n = "Response " + num;
    console.log(n);
  }

  // add each line to an array of bubbles
  for (let i = 0; i < sheet.length; i++) {
    abouts.push(
      new About(width / 2 - 630 + i * 180, 300,
        sheet[i]["Which is your best animal?"],
        sheet[i]["Who is your best teacher?"],
        sheet[i]["What music do you like?"],
        sheet[i]["What is your best day of the week?"],
      )
    ); // THESE NEED TO MATCH SPREADSHEET
  }
}

function draw() {
  background(212, 242, 255);
  image(bg,0,0, windowWidth, windowHeight);
image(sleep,width / 2 - 365, height / 2 - 80, 630, 446)
  let title = "Sam's Survey";
  let link = "Visit\nbit.ly/ctksamsurvey"
  textSize(25)
  fill(0, 7, 69);
  text(title, width / 2, height / 2 - 330);
  textSize(15)
  text(link, width / 2, height / 2 - 300);
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < abouts.length; i++) {
    abouts[i].display();
    // abouts[i].move();
    // console.log(abouts);
  }

  for (let i = 0; i < resp.length; i++) {
    resp[i].display();
    // console.log(resp)
  }
  // for (let i =0; i < response.length; i++){
  //   fill("black");
  //   textSize(15);
  //   text(response[i], width/2 - 540 + i * 180, 253);
  // }
}

// my About class
class About {
  constructor(x, y, animal, teacher, music, weekday) {
    // only the order of these parameters matters!
    this.animal = animal;
    this.teacher = teacher;
    this.music = music;
    this.weekday = weekday;
    this.pos = createVector(x, y);
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    // noFill();
    strokeWeight(0.5);
    stroke(255, 223, 179);
    fill('white')
    rect(this.pos.x, this.pos.y, 150, 150)
    fill(255, 223, 179)
    rect(this.pos.x, this.pos.y - 50, 150, 50)
    // ellipse(this.pos.x, this.pos.y + 15, 120, 120);
    noStroke();
    fill("black");
    textSize(12);
    text(
      this.animal +
      "\n" +
      this.teacher +
      "\n" +
      this.music +
      "\n" +
      this.weekday,
      this.pos.x,
      this.pos.y
    );
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
  }
}

class Response {
  constructor(x, y, response) {
    this.resp = response
    this.pos = createVector(x, y);
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    text(this.resp, this.pos.x, this.pos.y);
  }
}
