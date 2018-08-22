let ratImage1 = new Image();
ratImage1.src = "assets/rat1.png";
let ratImage2 = new Image();
ratImage2.src = "assets/rat2.png";
let ratImage3 = new Image();
ratImage3.src = "assets/rat3.png";
let ratImage4 = new Image();
ratImage4.src = "assets/rat4.png";

let ratAnimationStage = 0;

let EnemyWidth = 54;
let EnemyHeight = 54;
let EnemyX = 54*5 -24;
let EnemyY = 10;

function drawEnemy() {
    switch(ratAnimationStage) {
        case 0:
            ctx.drawImage(ratImage1,EnemyX,EnemyY,EnemyWidth,EnemyHeight);
            break;
        case 1:
            ctx.drawImage(ratImage2,EnemyX,EnemyY,EnemyWidth,EnemyHeight);
            break;
        case 2:
            ctx.drawImage(ratImage3,EnemyX,EnemyY,EnemyWidth,EnemyHeight);
            break;
        case 3:
            ctx.drawImage(ratImage4,EnemyX,EnemyY,EnemyWidth,EnemyHeight);
            break;
    }
}

function updateEnemy() {
    moveEnemy();

}

function moveEnemy() {
    EnemyY += 1;
    if (EnemyY>54*10) EnemyY = 10;
}

function enemyAnimation() {
    ratAnimationStage++;
    if(ratAnimationStage == 4) ratAnimationStage = 0;
}