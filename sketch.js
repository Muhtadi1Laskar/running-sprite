let images = [];
let run;

function preload(){
  for(let i=0;i<=12;i++){
    images.push(loadImage(`images/skeleton-03_run_${i}.png`))
  }
}

function setup(){
  createCanvas(700, 750);
  frameRate(30);
  run = new Run();
}


function touchStarted(){
  run.jump();
}

function draw(){
  background("#ff9595");
  run.update();
  run.draw();
  run.move();
}