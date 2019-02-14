/*
Click on different buttons, algorithm produces season-inspired patterns

Spring color palette: mostly green, with splashes of the rainbow for flowers and blue for the 
sky
Summer color palette: Blue for sky, sand color for ground
Fall color palette: Dark green/brown for tree trunks, and orange-red & red for leaves and ground,
maybe with some green
Winter color palette: Very light or very deep blue-purple, with browns and greys, and 
yellow-orange for the Sun

Spring shape: flower
Summer shape: sun
Fall shape: leaf
Winter shape: snowflake

Help from https://stackoverflow.com/questions/12066870/how-to-check-if-an-element-is-overlapping-other-elements
on seeing if elements are overlapping.
*/

// Current goal: build spring graphic

// setting for initial season color
let rsea = 250; 
let bsea = 135;
let gsea = 255;

// booleans for different seasons
let sprboo = true; // "spring boolean"...and so on
let sumboo = false;
let falboo = false;
let winboo = false;

// arrays that hold objects
let flos = []; // flowers
let suns = []; // suns
let lefs = []; // leafs
let snos = []; // snowflakes

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(rsea,bsea,gsea);

    if(sprboo){ // spring
        // splice
        if(flos.length > 100){
            flos.splice(0,1);
        }
    } else if (sumboo){ // summer
        // splice
        if(suns.length > 100){
            suns.splice(0,1);
        }
    } else if (falboo){ // fall
        // splice
        if(lefs.length > 100){
            lefs.splice(0,1);
        }
    } else if (winboo){ // winter
        // splice
        if(snos.length > 100){
            snos.splice(0,1);
        }
    }
}

function keyTyped(){
    if(key === 'a'){ // spring
        // bg colors
        rsea = 250;
        bsea = 135;
        gsea = 255;

        // new boolean values
        let sprboo = true;
        let sumboo = false;
        let falboo = false;
        let winboo = false;
    } else if (key === 's'){ // summer
        // bg colors
        rsea = 127;
        bsea = 232;
        gsea = 238;

        // new boolean values
        let sprboo = false;
        let sumboo = true;
        let falboo = false;
        let winboo = false;
    } else if (key === 'd'){ // fall
        // bg colors
        rsea = 64;
        bsea = 52;
        gsea = 33;

        // new boolean values
        let sprboo = false;
        let sumboo = false;
        let falboo = true;
        let winboo = false;
    } else if (key === 'w'){ // winter
        // bg colors
        rsea = 44;
        bsea = 21;
        gsea = 129;

        // new boolean values
        let sprboo = false;
        let sumboo = false;
        let falboo = false;
        let winboo = true;
    }
}

class Flower{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    display(){

    }
}

class Sun{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    display(){

    }
}

class Leaf{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    display(){

    }
}

class Snowflake{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    display(){

    }
}
