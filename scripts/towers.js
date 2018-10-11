//Archer tower variables
let archerTower = new Image();
archerTower.src = "assets/archer-tower.png";
let archerCost = 15;

//Mage tower variables
let mageTower = new Image();
mageTower.src = "assets/mage-tower.png";
let mageCost = 40

let towerChoice = 'none';

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


function buildTower(i) {
    switch(towerChoice) {
        case 'archerTower' : 
            if(gold - archerCost >= 0) {
            fields[i].tower = 'archerTower';
            fields[i].type = 'building';
            fields[i].damage = 1;
            fields[i].range = 10;
            gold -= archerCost;
            }
            break;
        case 'mageTower' : 
            if(gold -mageCost >= 0) {
            fields[i].tower = 'mageTower';
            fields[i].type = 'building';
            fields[i].damage = 2;
            fields[i].range = 10;
            gold -= mageCost;
            }
            break;
    }
}

