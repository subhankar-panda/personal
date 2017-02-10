var d = 4;
var n = 9;
var maxX = 120;
var maxY = 140;
var count = 3;
var growing = true;
var rainbow_array = ["#FF0", "#789", "#0FF", "#0F0", "#FFF", "#F00", "00F"]


function setup() {
  createCanvas(700, 700);
  smooth();
  noFill();
  frameRate(120);
}

function draw() {
  background(225);  
  if((maxX <= 240 && maxX >= 120)){
    if(growing){
      maxX++;
    }
    else{
      maxX--;
    }
  }
  else if(maxX <= 120){
    growing = true;
    maxX = 120;
  }
  else if(maxX >= 240){
    growing = false;
    maxX = 240;
  }
  translate(width / 2, height / 2);
  for (var i = 0; i < 360; i+=3) {
    var x = sin(radians(i)) * maxX;
    var y = cos(radians(i)) * maxX;
    push();
    translate(x, y);
    rotate(radians(i-frameCount));
    //rect(0, 0, 80, 80);
    polygon(0, 0, 80, count,(rainbow_array[Math.floor((i/21)%rainbow_array.length)]));
    pop();   
    push();
    translate(-x, -y);
    rotate(radians(i-frameCount));
    //rect(0, 0, 80, 80);
    polygon(0, 0, 80, count, rainbow_array[Math.floor(i/21)%rainbow_array.length]);
    pop();

    //frameRate(300);
  }
}

function polygon(x, y, radius, npoints, color) {
  var angle = TWO_PI / npoints;
  beginShape();
  stroke(color);
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mouseClicked(){
  if(count > 3){
    count--;
  }
}
