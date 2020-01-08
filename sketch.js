var r=0;
var g=50
var b=255
function setup(){
createCanvas=createSprite= (800,400)
}
function draw(){
  r=map(mouseX,0,800,0,255)
  g=map(mouseX,50,400,50,100)
  b=map(mouseX,0,800,255,0)
  background(r,b,g)
  fill(255)
  ellipse(mouseX,100,50,50)
}