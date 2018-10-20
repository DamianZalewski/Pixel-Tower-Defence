let life;

let lifeImage = new Image();
lifeImage.src = "assets/life-heart.png";


function drawLife() {
    ctx.drawImage(sideMenuInfoImage,cw-188,ch-120,155,40);
    ctx.drawImage(lifeImage,cw-206,ch-124,45,45);
    
    ctx.fillStyle = 'white';
    ctx.font = "30px Arial";
    ctx.fillText(life,cw-160,ch-90);
}

function lifeDamage() {
    life --;
    if (life == 0) setGameStage('gameOver');
}


//function drawGold() {
//    ctx.drawImage(sideMenuInfoImage,cw-188,ch-70,155,40);
//    ctx.drawImage(goldCoinImage,cw-206,ch-74,45,45);
//    
//        ctx.fillRect(cw-190,ch-130,150,40);
//    ctx.drawImage(lifeImage,cw-220,ch-138,54,54);
//    
//        ctx.textAlign = 'left';
//    ctx.fillStyle = 'white';
//    ctx.font = "30px Arial";
//    ctx.fillText(gold,cw-165,ch-40);
//}