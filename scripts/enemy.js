let ratImage = new Image();
ratImage.src = "assets/rat.png";

let EnemyWidth = 54;
let EnemyHeight = 54;
let EnemyX = 54*5 -24;
let EnemyY = 10;

function drawEnemy() {
    ctx.drawImage(ratImage,EnemyX,EnemyY,EnemyWidth,EnemyHeight);
}

function updateEnemy() {
    moveEnemy();
}

function moveEnemy() {
    EnemyY += 1;
    if (EnemyY>54*10) EnemyY = 10;
}