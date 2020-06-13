let bg;
let running_images = [];
let run;

let obstacle = [];
let obstacles = [];
let score = 0;

let bot_check;
let restart = false;

function preload() {
  for (let i = 1; i <= 16; i++) {
    running_images.push(loadImage(`run-mascot/robo-run/r_run_${i}.png`));
  }
  for(let i=0;i<=61;i++){
    obstacles.push(loadImage(`run-mascot/run//w_0${i}.png`));
  }
}

function setup() {
  createCanvas(1000, 400);
  bot_check = select("#box1").elt;
  frameRate(35);
  run = new Run();
}

function touchStarted() {
  run.jump();
  
  if (restart) {
    loop();
    score = 0;
    restart = false;
  }
}

function draw() {
  background("#3fc5f0");

  if (frameCount % 4 == 0) {
    score++;
  }

  if (random(1) < 0.9 && frameCount % 40 == 0) {
    obstacle.push(new Obstacle());
  }

  textSize(32);
  fill("white");
  text("Score:", width - 200, 40);
  text(score, width - 100, 40);
  strokeWeight(3);
  line(1, 382, 1000, 382);

  run.update();
  run.draw();
  run.move();

  obstacle.map((r) => {
    r.draw();
    r.update();

    let collusion = r.detect_collusion(run);
    if (collusion) {
      textSize(50);
      fill("white");
      text("Game Over !!!", width / 2 - 150, height / 2 - 50);
      text("Click Again to restart", width / 2 - 225, height / 2 + 50);
      restart = true;
      noLoop();
    }

    if (bot_check.checked) {
      let distance = r.calculate_distance();
      if (distance <= 100) {
        run.jump();
      }
    }
  });
}