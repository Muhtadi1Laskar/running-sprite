let running_images = [];
let run;

function preload(){
  for(let i=1;i<=8;i++){
    // images.push(loadImage(`images/skeleton-03_run_${i}.png`));
    running_images.push(loadImage(`run-mascot/run/${i}-Run.png`));
  }

}

function setup(){
  createCanvas(700, 750);
  frameRate(17);
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