let vector
let h = screen.height
let w = screen.width
let wheelVal=0
const sun = getElementById("sun")

function setup() {
  let cnv = createCanvas(w,h);
  cnv.parent("sun")
}

function draw() {
  background(200,50,50);
  translate(width / 2, height / 2);
  noStroke()
  
  rotate(wheelVal,vector)
  fill(255,150,50)
  triangle(0,0,0,w,w,w)
  triangle(0,0,-w,0,-w,w)
  triangle(0,0,0,-w,-w,-w)
  triangle(0,0,w,-w,w,0)
  fill(220,150,25)
  circle(0,0,150)
}

function mouseWheel(event){
  wheelVal-=event.delta
  
}