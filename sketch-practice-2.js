/*
Click on different buttons, algorithm produces season-inspired patterns

Spring color palette: mostly green, with splashes of the rainbow for flowers and blue for the 
sky
Summer color palette: Blue for sky, sand color for ground
Fall color palette: Dark green/brown for tree trunks, and orange-red & red for leaves and ground,
maybe with some green
Winter color palette: Very light or very deep blue-purple, with browns and greys, and 
yellow-orange for the Sun
*/

// Current goal: build spring graphic

let season = 1; // setting for season

function setup(){
    createCanvas(windowWidth,windowHeight);

    // Spring
    {
       
    }
}

function draw(){
    background(0);

    // if click mouse, changes the season
    if(mouseIsPressed){
        season++;
        if(season===5){
            season=1;
        }
    }

    if(season===1){ // spring
        
    } else if(season===2){ // summer

    } else if(season===3){ // fall

    } else if(season===4){ // winter

    }
}

// Spring
