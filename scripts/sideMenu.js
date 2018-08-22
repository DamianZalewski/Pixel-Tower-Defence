let towerChoice = -1;

let goldCoinImage = new Image();
goldCoinImage.src = "assets/gold-coin.png"
let gold = 100;

function drawSideMenu() {
    
    towerChoice == 1 ? ctx.fillStyle = "red" : ctx.fillStyle = "white";
    ctx.fillRect(cw-200,100,54,54);
    ctx.drawImage(archerTower,cw-200,100,54,54);
    
    towerChoice == 2 ? ctx.fillStyle = "red" : ctx.fillStyle = "white";
    ctx.fillRect(cw-100,100,54,54);
    ctx.drawImage(mageTower,cw-100,100,54,54);
    
    drawGold();
}

function handleSideMenuClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
   if(
       posX >= cw-200 && posX <= cw - 146 &&
       posY >= 100 && posY <= 154
   ) {
       towerChoice = 1;
   }
   else    if(
       posX >= cw-100 && posX <= cw - 46 &&
       posY >= 100 && posY <= 154
   ) {
       towerChoice = 2;
   }
    
}

function drawGold() {
    ctx.fillStyle = 'gray';
    ctx.fillRect(cw-190,ch-70,150,40);
    ctx.drawImage(goldCoinImage,cw-220,ch-78,54,54);
    ctx.fillStyle = 'white';
    ctx.font = "30px Arial";
    ctx.fillText(gold,cw-165,ch-40);
    
}

function updateGold() {
    
}