let bg;
let running_images = [];
let run;

let obs_image;
let obstacle = [];

function preload() {
  obs_image = loadImage(`run-mascot/obstacle/4-obs.png`);
  for (let i = 1; i <= 8; i++) {
    running_images.push(loadImage(`run-mascot/run/${i}-Run.png`));
  }
}

function setup() {
  createCanvas(1000, 450);
  frameRate(20);
  run = new Run();
  
}


function touchStarted() {
    run.jump();
}

function draw() {
  background("#ff9595");
  if(random(1) < 0.01){
    obstacle.push(new Obstacle());
  }

  run.update();
  run.draw();
  run.move();
  for(let t of obstacle){
    t.draw();
    t.update();
  }
}