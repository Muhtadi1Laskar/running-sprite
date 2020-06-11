class Run{
    constructor(){
        this.currentIndex = 1;
        this.spriteX = 50;
        this.spriteY = height-120;

        this.robot_size = 100;

        this.velocity = 0;
        this.gravity = 7;
    }

    update(){
        this.currentIndex++;
        if(this.currentIndex > 7){
            this.currentIndex = 1;
        }
        this.jumpIndex++;
        if(this.jumpIndex > 15){
            this.jumpIndex = 1;
        }
    }

    jump(){
        if(this.spriteY === height-120){
            this.velocity = -50;
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