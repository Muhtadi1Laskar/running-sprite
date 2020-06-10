class Run{
    constructor(){
        this.currentIndex = 1;
        this.spriteX = 10;
        this.spriteY = height-300;

        this.robot_size = 190;

        this.velocity = 0;
        this.gravity = 5;
    }

    update(){
        this.currentIndex++;
        if(this.currentIndex > 7){
            this.currentIndex = 1;
        }
        this.jumpIndex++;
        if(this.jumpIndex > 9){
            this.jumpIndex = 1;
        }
    }

    jump(){
        if(this.spriteY === height-300){
            this.velocity = -35;
        }
    }

    move(){
        this.spriteY += this.velocity;
        this.velocity += this.gravity;
        this.spriteY = constrain(this.spriteY, 0, height-300);
    }

    draw(){
        image(running_images[this.currentIndex], this.spriteX, this.spriteY, this.robot_size, this.robot_size);
    }
}