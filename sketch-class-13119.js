// Creating a class
let zo = []; // Use array to put multiples of objects in it
let zo_num = 200;
let zo_img;

// Useful for loading images or music
function preload(){
    zo_img = loadImage('images/zephyr.png');
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    for( let i = 0; i < zo_num; i++ ){
        speed = random(1,5);
        // Use random function to place the rectangles in different places
        zo[i] = new Zephyr(random(0,width),random(0,height),40,40,speed,255*speed/5);
    }
}

function draw(){
    background(0);
    for( let i = 0; i < zo_num; i++ ){
        zo[i].display();
        zo[i].move();
    }
}

class Zephyr {
    // Constructor function holds var's that controls where zephyr car goes
    constructor(tempX, tempY, tempW, tempH, tempS, tempC){ 

        // Want to define a local, not global variable, so it just pertains to this class
        this.x = tempX; // . means "for this particular class"
        this.y = tempY;
        this.w = tempW; // width
        this.h = tempH; // height
        this.s = tempS; // speed
        this.c = tempC; // RGB color

    }
    
    // Making the rectangles move
    move(){
        this.x = this.x + this.s;
        if (this.x > width){
            this.x = 0;
        }
    }

    display(){
        colorMode(RGB);
        fill(this.c);
        image(zo_img, this.x, this.y, this.w, this.h);
    }
}