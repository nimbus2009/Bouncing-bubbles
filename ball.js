class Ball
{ 
  constructor(x, y, r) 
  {
  this.x = x;  
  this.y = y;  
  this.r = r;  
  this.speed = 0;
  this.gravity = 0.1
  }

  display() 
  {
    fill(255,100); 
    stroke(0); 
    ellipse(this.x,this.y,this.r,this.r); 
  }

  update() {
    this.y = this.y + this.speed; 
    this.speed = this.speed + this.gravity; 
    if (this.y > height) { 
      this.y = height;
      this.speed = this.speed * -0.79;  
    } 
  }
}
