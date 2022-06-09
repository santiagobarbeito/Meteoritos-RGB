let tasa=0.001;
let snowflakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(2/width);
  fill(240);
  noStroke();
}

function draw() {
  background(0,20);
  let t = frameCount / 60;

 for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
  }

  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display();
  }
}

function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(tasa*width, 2.5*tasa*width);
  this.color=int(random(0,4)%3);
  if((this.color==0)==true){
    this.dr=1;
    this.dg=0;
    this.db=0;
  };
  if((this.color==1)==true){
    this.dg=1;
    this.dr=0;
    this.db=0;
  };
  if((this.color==2)==true){
    this.db=1;
    this.dr=0;
    this.dg=0;
  };

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    
    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

 
    this.posY += pow(this.size, 0.5);

  
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    stroke(this.dr*255,this.dg*255,this.db*255,125)
    fill(this.dr*255,this.dg*255,this.db*255,125);
    ellipse(this.posX, this.posY, this.size);
  };
}
