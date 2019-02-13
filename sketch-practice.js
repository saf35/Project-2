/* 
Have random letters pop up, and when someone sees a word, they type it in and then whenever that beginning
letter pops up again, it may be accompanied by that word
*/

// Current step: have letters pop drop from top of screen and move downward

// load strings of lowercase letters
let letterslist = ['a','b','c','d','e','f','g','h','i','j','k','j','l','m','n','o','p','q','r','s','t','u','v',
                    'w','x','y','z'];
// set up variable to hold letters currently on screen
let currentLetters = [];

let reaBot = false;

let xposArray = [];
let yposArray = [];

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0);
    // load function into variable
    let l = new Letters();
    currentLetters.push(l);
    // display moving letters
    for(let i=0; i<currentLetters.length; i++){
        currentLetters.display();
        currentLetters.move();
    }
}

class Letters{
    appear(){ // letters appear (aka, choose a new letter)
        // Pick random letter from letters array
        this.letter = lettersList[random(0,25)];
        // store it in current letters array
        currentLetters[i] = this.letter;
        
    }

    move(){ // letters move down the screen at slow pace
        xspeed = 0.1;
        yspeed = random();
        this.x += xspeed;
        this.y += yspeed;
        if(this.y > windowHeight){
            this.y = 0;
        }
    }

    display(){
        text(this.letter,this.x,this.y);
        fill(0);
    }
}