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
    }

    jump(){
        this.velocity = -35;
    }

    move(){
        this.spriteY += this.velocity;
        this.velocity += this.gravity;
        this.spriteY = constrain(this.spriteY, 0, height-300);
    }

    draw(){
        image(images[this.currentIndex], this.spriteX, this.spriteY, this.robot_size, this.robot_size);
    }
}