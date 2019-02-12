/* 
Have random letters pop up, and when someone sees a word, they type it in and then whenever that beginning
letter pops up again, it may be accompanied by that word
*/

// Current step: have letters pop out from middle of screen and move outward at slow speed

// load strings of lowercase letters
let letterslist = ['a','b','c','d','e','f','g','h','i','j','k','j','l','m','n','o','p','q','r','s','t','u','v','w',
                'x','y','z'];
// set up variable to hold letters currently on screen
let currentLetters = [];

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0);

}

class Letters(){
    appear(){ // letters appear
        // Pick random letter from letters array
        this.letter = lettersList[random(0,25)];
        

    }

    move(){ // letters move outward at slow pace

    }

    display(){
        // Start showing letter at center and then move them outward
    }
}