// Learning: push and splice

let circles = []; // Set up array

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

function mousePressed(){ 
    c = new Circe(mouseX,mouseY,40,40); // Drawing this in mousePressed b/c wouldn't want to do this every frame
    circles.push(b);
    for(let i=0;i<circles.length;i++){
        circles[i].clicked(mouseX,mouseY);
    }
}

class Circe(){
    // code will be uploaded to github
}