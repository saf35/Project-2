// Learning: push and splice

let circles = []; // Set up array
let b;

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0);
    // x.length and related variables are good for dynamically changing values
    for(let i=0; i<circles.length; i++){ // Iterate as long as i is less than the length of the circles array
        circles[i].display();
        circles[i].move();
        circles[i].rollover(mouseX,mouseY);
    }

    if(circles.length > 130){
        circles.splice(0,1);
    }
}

function mouseDragged(){ 
    c = new Circe(mouseX,mouseY,40,40); // Drawing this in mouseDragged b/c wouldn't want to do this every frame
    circles.push(b);
    for(let i=0;i<circles.length;i++){
        circles[i].clicked(mouseX,mouseY);
    }
}

class Circe(){
    // code will be uploaded to github

    constructor(tempX,tempY,tempW,tempH){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.over = false;
        this.isClicked = false;
    }

    rollover(mx,my){
        let d = dist(mx,my,this.x,this.y);
        if(d<this.w){ // if the distance is less than the width of the ball
            this.over = true;
        } else {
            this.over = false;
        }
    }

    clicked(mx,my){
        let d = dist(mx,my,this.x,this.y);
        if(d < this.w){
            this.isClicked = true;
        } else {
            this.isClicked = false;
        }
    }

    move(){
        // unfinished
        let speed = 0.1;
        this.y += speed;
    }

    display(){
        if(this.over){
            fill(255,0,0);
        }else{
            // unfinished
        }
    }
}