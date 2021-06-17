var balls=[];
var des;

function setup() {
  createCanvas(windowWidth,windowHeight);

  des=createButton("Destroy");
  des.position(20,100);
  des.mousePressed(destroyB);
}

function draw() {
  background(0,191,255);
  for(var x=0;x<balls.length;x++) {
    balls[x].update();
    balls[x].display();
  }

  text("Click anywhere on the \nscreen to create bubbles!",20,20); 
  text("Press any key on the \nkeyboard to destroy bubbles!",20,70);

  if(touches.length>0&&(touches[0]>des.position.x+100)) {
    var b=new Ball(touches[0],touches[1],20);
    balls.push(b);

    touches=[];
  }
  if(touches.length>0&&(des.position.x-50<touches[0]<des.position.x+50)&&(des.position.y-50<touches[0]<des.position.y+50)) {
    var b=new Ball(touches[0],touches[1],20);
    balls.push(b);

    touches=[];
  }

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
  balls.pop();
  console.log("great!");
  console.log(balls);
}