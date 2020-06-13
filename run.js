class Run{
    constructor(){
        this.currentIndex = 1;
        this.spriteX = 50;
        this.spriteY = height-120;

        this.robot_size = 100;

        this.velocity = 0;
        this.lift = -41;
        this.gravity = 5;
    }

    update(){
        this.currentIndex++;
        if(this.currentIndex > 7){
            this.currentIndex = 1;
        }
    }

    jump(){
        if(this.spriteY === height-120){
            this.velocity = this.lift;
        }
    }

    move(){
        this.spriteY += this.velocity;
        this.velocity += this.gravity;
        this.spriteY = constrain(this.spriteY, 0, height-120);
    }

    draw(){
        image(running_images[this.currentIndex], this.spriteX, this.spriteY, this.robot_size, this.robot_size);
        // fill(255, 50);
        // rect(this.spriteX, this.spriteY, this.robot_size, this.robot_size);
    }
}