class Obstacle {
    constructor() {
        this.x = width;
        this.y = height - 70;
        this.size = 50;

        this.speed = -30;
    }

    update() {
        this.x += this.speed;
    }

    calculate_distance() {
        let distance;
        if (this.x > 10) {
            distance = Math.sqrt(Math.pow(this.x - run.spriteX, 2), Math.pow(this.y - run.spriteY, 2));
        }
        return distance;
    }

    detect_collusion(r) {
        return r.spriteX + 70 >= this.x && r.spriteX <= this.x + this.size && r.spriteY + 60 >= this.y && r.spriteY <= this.y + this.size;
    }

    draw() {
        image(obs_image, this.x, this.y, this.size, this.size);
        // fill(255, 50);
        // rect(this.x, this.y, this.size, this.size);
    }


}