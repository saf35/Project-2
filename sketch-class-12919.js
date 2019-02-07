function preload(){
    
}

function setup(){
    
    createCanvas(800,800);
    background(255);

}

function draw(){

    if( mouseIsPressed ) {
        fill(0,255,0);
    } else {
        fill(0,0,255);
    }

    for( let i = 0; i < 50; i++ ) {
        rect(300*(i+30),300,20,20);
    }

    // Look at tutorials on arrays in p5.js website
    // Look at class tutorials on class website 
    
}

function keyTyped() {
    
}