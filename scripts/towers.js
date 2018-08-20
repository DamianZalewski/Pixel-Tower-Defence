let archerTower = new Image();
archerTower.src = "assets/archer-tower.png";
let mageTower = new Image();
mageTower.src = "assets/mage-tower.png";


function drawTower(tower,x, y, width, height) {
    switch(tower) {
        case 'archerTower':
            ctx.drawImage(archerTower,x,y,width,height);
            break;
        case 'mageTower':
            ctx.drawImage(mageTower,x,y,width,height);
            break;    
    }
}

