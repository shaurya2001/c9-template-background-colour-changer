var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(3000, 3000);  

  btn_red=createButton("red");
  btn_red.position(550,50);
  btn_red.mousePressed(red_bg);

  btn_green=createButton("green");
  btn_green.position(650,50);
  btn_green.mousePressed(green_bg);
}


function draw(){
  background(r,g,b);
}


  function red_bg(){
    r=400;
    g=0;
    b=0;
  }

  function green_bg(){
    r=0;
    g=400;
    b=0;
  }