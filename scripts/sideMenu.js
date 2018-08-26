let towerChoice = -1;

let goldCoinImage = new Image();
goldCoinImage.src = "assets/gold-coin.png"
let gold = 100;

function drawSideMenu() {
    
    towerChoice == 1 ? ctx.fillStyle = "red" : ctx.fillStyle = "white";
    ctx.fillRect(cw-200,100,54,54);
    ctx.drawImage(archerTower,cw-200,100,54,54);
    ctx.fillStyle = "black";
    ctx.fillRect(cw-200,150,54,20);
    ctx.drawImage(goldCoinImage, cw-210,145,30,30);
    ctx.fillStyle = 'white';
    ctx.font = "16px Arial";
    ctx.fillText('15',cw-175,166);
    
    towerChoice == 2 ? ctx.fillStyle = "red" : ctx.fillStyle = "white";
    ctx.fillRect(cw-100,100,54,54);
    ctx.drawImage(mageTower,cw-100,100,54,54);
    ctx.fillStyle = "black";
    ctx.fillRect(cw-100,150,54,20);
    ctx.drawImage(goldCoinImage, cw-110,145,30,30);
    ctx.fillStyle = 'white';
    ctx.font = "16px Arial";
    ctx.fillText('40',cw-75,166);
    
    drawGold();
    drawLife();
    drawEnemyInfo();
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

    function drawEnemyInfo() {
        ctx.fillStyle = 'black';
        ctx.fillRect(cw-190,ch-250,150,100);
        switch(ratObject.ratAnimationStage) {
            case 0:
                ctx.drawImage(ratObject.ratImage1,cw-140,ch-210,54,54);
                break;
            case 1:
                ctx.drawImage(ratObject.ratImage2,cw-140,ch-210,54,54);
                break;
            case 2:
                ctx.drawImage(ratObject.ratImage3,cw-140,ch-210,54,54);
                break;
            case 3:
                ctx.drawImage(ratObject.ratImage4,cw-140,ch-210,54,54);
                break;
        }
        ctx.fillStyle = "white";
        ctx.fillText('Rat', cw-140,ch-220);

    }