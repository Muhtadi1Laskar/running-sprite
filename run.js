class Run{
    constructor(){
        this.currentIndex = 1;
        this.spriteX = 40;
        this.spriteY = height-300;

        this.velocity = 0;
        this.gravity = 2;
    }

    update(){
        this.currentIndex++;
        if(this.currentIndex > 12){
            this.currentIndex = 1;
        }
    }

    jump(){
        this.velocity = -25;
    }

    move(){
        this.spriteY += this.velocity;
        this.velocity += this.gravity;
        this.spriteY = constrain(this.spriteY, 0, height-300);
    }

    draw(){
        image(images[this.currentIndex], this.spriteX, this.spriteY, 150, 150);
    }
}