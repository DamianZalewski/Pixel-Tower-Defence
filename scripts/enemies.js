let rat = function(){
    this.width = 54;
    this.height = 54;
    this.x = 54*5 - 24;
    this.y = 10;
    // left
    this.ratImageLeft1 = new Image();
    this.ratImageLeft1.src = "assets/rat-left-1.png";
    this.ratImageLeft2 = new Image();
    this.ratImageLeft2.src = "assets/rat-left-2.png";
    this.ratImageLeft3 = new Image();
    this.ratImageLeft3.src = "assets/rat-left-3.png";
    this.ratImageLeft4 = new Image();
    this.ratImageLeft4.src = "assets/rat-left-4.png";
    // top
    this.ratImageTop1 = new Image();
    this.ratImageTop1.src = "assets/rat-top-1.png";
    this.ratImageTop2 = new Image();
    this.ratImageTop2.src = "assets/rat-top-2.png";
    this.ratImageTop3 = new Image();
    this.ratImageTop3.src = "assets/rat-top-3.png";
    this.ratImageTop4 = new Image();
    this.ratImageTop4.src = "assets/rat-top-4.png";
    // right
    this.ratImageRight1 = new Image();
    this.ratImageRight1.src = "assets/rat-right-1.png";
    this.ratImageRight2 = new Image();
    this.ratImageRight2.src = "assets/rat-right-2.png";
    this.ratImageRight3 = new Image();
    this.ratImageRight3.src = "assets/rat-right-3.png";
    this.ratImageRight4 = new Image();
    this.ratImageRight4.src = "assets/rat-right-4.png";
    // bottom
    this.ratImageBottom1 = new Image();
    this.ratImageBottom1.src = "assets/rat-bottom-1.png";
    this.ratImageBottom2 = new Image();
    this.ratImageBottom2.src = "assets/rat-bottom-2.png";
    this.ratImageBottom3 = new Image();
    this.ratImageBottom3.src = "assets/rat-bottom-3.png";
    this.ratImageBottom4 = new Image();
    this.ratImageBottom4.src = "assets/rat-bottom-4.png";
    //---
    this.ratAnimationStage = 0;
    this.ratHp = 10;
    this.ratMaxHp = 10;
    this.pathIndex = -1;
    this.pathCounter = 0;
    this.direction = '';
}

let enemiesArray = [];
enemiesArray[0] = new rat();
// refactoring the code below
function checkNewPath(index) {
      if(fields[index-10] != undefined && fields[index-10].type == 'path') { 
                    return 'top';
                }
      if(fields[index+10] != undefined && fields[index+10].type == 'path') { 
                    return 'bottom';
                }
                
      if(fields[index-1] != undefined && fields[index-1].type == 'path') { 
                    return 'left';
                }
      if(fields[index+1] != undefined && fields[index+1].type == 'path') {
                    return 'right';
                }
}
// refactoring the code below
function checkPath(direction,index) {
    switch(direction) {
        case 'top' :
            return (fields[index-10] != undefined && fields[index-10].type == 'path');
            break;
        case 'bottom' :
            return (fields[index+10] != undefined && fields[index+10].type == 'path');
            break;
        case 'left' :
            return (fields[index-1] != undefined && fields[index-1].type == 'path');
            break;
        case 'right' :
            return (fields[index+1] != undefined && fields[index+1].type == 'path');
            break;         
    }
}
// refactoring the code below
function checkPathIndex(direction) {
        switch(direction) {
        case 'top' :
            return -10
            break;
        case 'bottom' :
            return 10
            break;
        case 'left' :
            return -1
            break;
        case 'right' :
            return 1
            break;         
    }
}
// refactoring the code below
function findNewPath(direction,index) {
      if(direction != 'bottom' && fields[index-10] != undefined && fields[index-10].type == 'path') { 
                    return 'top';
                }
      if(direction != 'top' && fields[index+10] != undefined && fields[index+10].type == 'path') { 
                    return 'bottom';
                }
                
      if(direction != 'right' && fields[index-1] != undefined && fields[index-1].type == 'path') { 
                    return 'left';
                }
      if(direction != 'left' && fields[index+1] != undefined && fields[index+1].type == 'path') {
                    return 'right';
                }
}

function updateEnemy() {
    for(let i = 0; i<enemiesArray.length;i++){
        // initial enemy path
        if (enemiesArray[i].pathIndex == -1) {
            enemiesArray[i].pathIndex = pathArray[0];
            enemiesArray[i].direction = checkNewPath(enemiesArray[i].pathIndex);
        }
        // move enemy
        switch(enemiesArray[i].direction) {
                case 'top':
                    enemiesArray[i].y--;
                    break;
                case 'bottom':
                    enemiesArray[i].y++;
                    break;
                case 'left':
                    enemiesArray[i].x--;
                    break;
                case 'right':
                    enemiesArray[i].x++;
                    break;
        }
        enemiesArray[i].pathCounter++;
        // reset pathCounter and find new path in the same direction
        if(enemiesArray[i].pathCounter == 54) {
            enemiesArray[i].pathCounter = 0;
            if (checkPath(enemiesArray[i].direction,enemiesArray[i].pathIndex)) {
                enemiesArray[i].pathIndex += checkPathIndex(enemiesArray[i].direction);
            }
            else {
                enemiesArray[i].direction = findNewPath(enemiesArray[i].direction,enemiesArray[i].pathIndex);
                enemiesArray[i].pathIndex += checkPathIndex(enemiesArray[i].direction);
            }
        }

    }
}


function drawEnemy() {
    for(let i = 0; i<enemiesArray.length;i++){
        let drawX = enemiesArray[i].x;
        let drawY = enemiesArray[i].y-enemiesArray[i].height/2;
        let drawWidth = enemiesArray[i].width;
        let drawHeight = enemiesArray[i].height;
        let draw1, draw2, draw3, draw4;
        switch(enemiesArray[i].direction) {
            case 'left':
                draw1 = enemiesArray[i].ratImageLeft1;
                draw2 = enemiesArray[i].ratImageLeft2;
                draw3 = enemiesArray[i].ratImageLeft3;
                draw4 = enemiesArray[i].ratImageLeft4;
                break;
            case 'top':
                draw1 = enemiesArray[i].ratImageTop1;
                draw2 = enemiesArray[i].ratImageTop2;
                draw3 = enemiesArray[i].ratImageTop3;
                draw4 = enemiesArray[i].ratImageTop4;
                break;
            case 'right':
                draw1 = enemiesArray[i].ratImageRight1;
                draw2 = enemiesArray[i].ratImageRight2;
                draw3 = enemiesArray[i].ratImageRight3;
                draw4 = enemiesArray[i].ratImageRight4;
                break;
            case 'bottom':
                draw1 = enemiesArray[i].ratImageBottom1;
                draw2 = enemiesArray[i].ratImageBottom2;
                draw3 = enemiesArray[i].ratImageBottom3;
                draw4 = enemiesArray[i].ratImageBottom4;
                break;        
            case '':
                draw1 = enemiesArray[i].ratImageBottom1;
                draw2 = enemiesArray[i].ratImageBottom2;
                draw3 = enemiesArray[i].ratImageBottom3;
                draw4 = enemiesArray[i].ratImageBottom4;
                break;
        }
        switch(enemiesArray[i].ratAnimationStage) {
            case 0:
                ctx.drawImage(draw1, drawX, drawY, drawWidth, drawHeight);
                break;
            case 1:
                ctx.drawImage(draw2, drawX, drawY, drawWidth, drawHeight);
                break;
            case 2:
                ctx.drawImage(draw3, drawX, drawY, drawWidth, drawHeight);
                break;
            case 3:
                ctx.drawImage(draw4, drawX, drawY, drawWidth, drawHeight);
                break;
    }
    //hp bar
    ctx.fillStyle = 'green';
    if(enemiesArray[i].ratHp < 7) ctx.fillStyle = 'yellow'
    if(enemiesArray[i].ratHp < 4) ctx.fillStyle = 'red';
    ctx.fillRect(enemiesArray[i].x+ (enemiesArray[i].width - enemiesArray[i].ratHp * 5)/2, enemiesArray[i].y-5-enemiesArray[i].height/2,enemiesArray[i].ratHp * 5,5);
        }
}



function enemyAnimation() {
    for(let i = 0; i<enemiesArray.length;i++){
        enemiesArray[i].ratAnimationStage++;
        if(enemiesArray[i].ratAnimationStage == 4) enemiesArray[i].ratAnimationStage = 0;
    }
}

 function drawEnemyInfo() {
        ctx.fillStyle = 'black';
        ctx.fillRect(cw-190,ch-250,150,100);
        switch(enemiesArray[0].ratAnimationStage) {
            case 0:
                ctx.drawImage(enemiesArray[0].ratImageBottom1,cw-140,ch-210,54,54);
                break;
            case 1:
                ctx.drawImage(enemiesArray[0].ratImageBottom2,cw-140,ch-210,54,54);
                break;
            case 2:
                ctx.drawImage(enemiesArray[0].ratImageBottom3,cw-140,ch-210,54,54);
                break;
            case 3:
                ctx.drawImage(enemiesArray[0].ratImageBottom4,cw-140,ch-210,54,54);
                break;
        }
        ctx.fillStyle = "white";
        ctx.fillText('Rat', cw-140,ch-220);
}