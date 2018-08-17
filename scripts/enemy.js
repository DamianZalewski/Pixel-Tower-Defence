let ratImage = new Image();
ratImage.src = "assets/rat.png";

let width = 54;
let height = 54;
let x = 54*5 -24;
let y = 10;

function drawEnemy() {
    ctx.drawImage(ratImage,x,y,width,height);
}

function updateEnemy() {
    moveEnemy();
}

function moveEnemy() {
    y += 1;
    if (y>54*10) y = 10;
        
}