var balls=[];
var des;

function setup() {
  createCanvas(windowWidth,windowHeight);

  des=createButton("Destroy");
  des.position(20,100);
  des.mousePressed(destroyB());
}

function draw() {
  background(0,191,255);
  for(var x=0;x<balls.length;x++) {
    balls[x].update();
    balls[x].display();
  }

  text("Click anywhere on the \nscreen to create bubbles!",20,20); 
  text("Press any key on the \nkeyboard to destroy bubbles!",20,70);

  if(touches.length>0) {
    var b=new Ball(touches[0],touches[1],20);
    balls.push(b);

    touches=[];
  }

  console.log(touches[0]);

}

function keyPressed() {
  balls.pop();
}

function mousePressed() {
  var b=new Ball(mouseX,mouseY,20);
  balls.push(b);
}

function destroyB() {
  balls.pop();
}