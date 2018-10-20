let goldCoinImage = new Image();
goldCoinImage.src = "assets/gold-coin.png"
let gold = 100;

let sideMenuInfoImage = new Image();
sideMenuInfoImage.src = "assets/side-menu-info.png";

function drawGold() {
    ctx.textAlign = 'left';
    ctx.fillStyle = 'gray';
    ctx.drawImage(sideMenuInfoImage,cw-188,ch-70,155,40);
    ctx.drawImage(goldCoinImage,cw-206,ch-74,45,45);
    ctx.fillStyle = 'white';
    ctx.font = "30px Arial";
    ctx.fillText(gold,cw-160,ch-40);
}