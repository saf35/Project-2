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
*/

// Current goal: make interactive shapes for each season

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
let lefs1 = []; // leafs
let lefs2 = [];
let lefs3 = [];
let snos = []; // snowflakes

// variables for images
let floimg;
let lef1img;
let lef2img;
let lef3img;
let snoimg;
let sunimg;

let werimg;

function preload(){
    // loading interactive images
    floimg = loadImage('images/flower.png');
    // lef1img = loadImage('images/leaf1.png');
    // lef2img = loadImage('images/leaf2.png');
    // lef3img = loadImage('images/leaf3.png');
    // snoimg = loadImage('images/snowflake.png');
    sunimg = loadImage('images/sun.png');
}

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(rsea,bsea,gsea);

    if(sprboo){ // spring
        // display flowers
        for(let i = 0; i<flos.length; i++){
            flos[i].display(mouseX,mouseY);
            flos[i].rotating();
        }

        // splice
        if(flos.length > 100){
            flos.splice(0,1);
        }
    } else if (sumboo){ // summer
        // display flowers
        for(let i = 0; i<suns.length; i++){
            suns[i].display(mouseX,mouseY);
            suns[i].rotating();
        }
        
        // splice
        if(suns.length > 100){
            suns.splice(0,1);
        }
    } /*else if (falboo){ // fall
        // splice
        if(lefs.length > 100){
            lefs.splice(0,1);
        }
    } else if (winboo){ // winter
        // splice
        if(snos.length > 100){
            snos.splice(0,1);
        }
    }*/
}

// putting down objects wherever 
function mousePressed(){
    if(sprboo){ // spring
        let sp = new Flower(mouseX,mouseY);
        flos.push(sp);
        for(let j = 0; j<flos.length; j++){
            flos[j].yesorno();
        }
    } else if (sumboo){ // summer
        
    }
    /*} else if (falboo){ // fall
        
    //    }
    //} else if (winboo){ // winter
        
    }*/
}

// what to change/show if press a certain key
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
    /*} else if (key === 'd'){ // fall
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
    }*/
}

class Flower{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
        this.isPre = false;
    }

    display(mx,my){
        let werimg = image(floimg,this.x,this.y);
    }

    rotating(){
        werimg.rotate(PI/32);
    }

    yesorno(){
        if(mouseIsPressed){
            this.isPre = true;
        } else {
            this.isPre = false;
        }
    }
}

class Sun{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    // create sun shape

    display(){
        image(sunimg);
    }
}

/*class Leaf1{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    // create leaf shape

    display(){
        image(lef1img);
    }
}

class Leaf2{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    // create leaf shape

    display(){
        image(lef2img);
    }
}

class Leaf3{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    // create leaf shape

    display(){
        image(lef3img);
    }
}

class Snowflake{
    constructor(tempX,tempY){
        this.x = tempX;
        this.y = tempY;
    }

    // create snowflake shape

    display(){

    }
}*/
