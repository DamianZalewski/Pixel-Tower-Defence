let tileWidth = 54;
let tileHeight = tileWidth;

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
let level1_adds = [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0];
//---------------------------------------------
    

function drawLevel1(x,y,index) {
    // level 1
    // tile grass
 
    switch(level1_grass[index]){
        case 1:
            ctx.drawImage(tile1,x,y,tileWidth,tileHeight);
            break;
    } 
    // tile adds
    switch(level1_adds[index]){
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