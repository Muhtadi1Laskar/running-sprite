class Obstacle {
    constructor() {
        this.index = 1;
        this.x = width;
        this.y = height - 70;
        this.size = 50;

        this.speed = 10;
    }

    update() {
        this.x -= this.speed;
        this.index++;
        if(this.index > 60){
            this.index = 1;
        }
    }

    calculate_distance() {
        let distance;
        if (this.x > 10) {
            distance = Math.sqrt(Math.pow(this.x - run.spriteX, 2), Math.pow(this.y - run.spriteY, 2));
        }
        return distance;
    }

    detect_collusion(r) {
        return r.spriteX + 70 >= this.x && r.spriteX <= this.x + this.size && r.spriteY + 60 >= this.y && r.spriteY <= this.y - 6;
    }

    draw() {
        image(obstacles[this.index], this.x, this.y, this.size, this.size);
        // fill(255, 50);
        // rect(this.x, this.y, this.size, this.size);
    }


}