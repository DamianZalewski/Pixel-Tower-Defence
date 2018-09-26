let tileWidth = 54;
let tileHeight = tileWidth;
let level = 1;
let mapLevel = 1;
let levelRounds = 0;
//--------------------------------------------
// Level 1 tilemap

let tile1 = new Image();
tile1.src = "assets/grass.png";

let tile2 = new Image();
tile2.src = "assets/rock.png";

let tile3 = new Image();
tile3.src = "assets/path.png"

let pathArray = [];

let level1_grass =[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let level1_adds = [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0, 2, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 2, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 2, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0];

let level2_grass =[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let level2_adds = [0, 0, 2, 2, 3, 2, 0, 0, 2, 2, 2, 3, 3, 3, 3, 0, 2, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 2, 0, 3, 0, 0, 0, 3, 2, 0, 3, 3, 3, 3, 0, 0, 0, 3, 0, 2, 0, 0, 2, 2, 2, 2, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 1, 0, 2, 2, 2, 2];
function drawLevel1(x,y,index) {
    // level 1
    // tile grass
    switch(level) {
        case 1:
            level_grass = level1_grass;
            level_adds = level1_adds;
            break;
        case 2:
            level_grass = level2_grass;
            level_adds = level2_adds;
            break;
    }

    switch(level_grass[index]){
        case 1:
            ctx.drawImage(tile1,x,y,tileWidth,tileHeight);
            break;
    } 
    // tile adds
    switch(level_adds[index]){
        case 0:
            null;
            break;
        case 2:
            ctx.drawImage(tile2,x,y,tileWidth,tileHeight);
            fields[index].type = 'obstacle';
            break;
        case 3:
            ctx.drawImage(tile3,x,y,tileWidth,tileHeight);
            pathArray.push(index);
            fields[index].type = 'path';
            break;
    }
}