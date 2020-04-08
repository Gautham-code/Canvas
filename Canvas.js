var database;


var canvas1;

var drawing = [];
var currentPath = [];

function  setup() {
  canvas = createCanvas(2000, 2000);
  canvas.mousePressed(startPath);

  
  firebase.initializeApp(config);
  database = firebase.database();
}

function Paint(){
  currentPath = [];
  drawing.push(currentPath); 
  }

function draw(){
  background(220);
  stroke("red");
  textSize(25);
  fill(220);
  text("Press F5 to reload the canvas.",10 ,20);
  if (mouseIsPressed){
    var point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);  
  }
  stroke("red");
  strokeWeight(8);
  noFill();
  for (var i = 0; i < drawing.length;i++){
    var path = drawing[i];
    beginShape();
    for (var j = 0; j < path.length;j++){
      vertex(path[j].x,path[j].y)
    }
    endShape();
  }
}