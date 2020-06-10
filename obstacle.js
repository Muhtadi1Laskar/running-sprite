class Obstacle{
    constructor(){
        this.index = random(1, 5);
        this.x = width;
        this.y = height-78;
        this.size = 60;

        this.speed = -10
    }

    update(){
        this.index = random(1, 5);
        this.x += this.speed;
    }

    draw(){
        image(obs_image, this.x, this.y, this.size, this.size);
    }


}