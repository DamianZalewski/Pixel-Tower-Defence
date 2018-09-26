let enemiesMax = 10;
let enemiesCounter = 0;
let enemiesArray = [];
let enemiesType = ['snake', 'rat'];
let enemiesTypeCounter = 0;
let killedEnemy = 0;

function killEnemy(i) {
    enemiesArray[i].alive = false;
    killedEnemy++;
}

function addEnemy() {
    if(enemiesCounter != enemiesMax) {
        switch(enemiesType[enemiesTypeCounter]) {
            case 'snake':
                enemiesArray[enemiesCounter] = new snake();
                break;
            case 'rat':
                enemiesArray[enemiesCounter] = new rat();
                break;
        }
        enemiesCounter++;
    }
    
    if(killedEnemy == 10) {
        killedEnemy = 0;
        enemiesCounter = 0;
        enemiesTypeCounter++;
        if(enemiesTypeCounter == enemiesType.length) {
            enemiesTypeCounter = 0;
            levelRounds ++;
            if(levelRounds == 1) {
                mapLevel++;
                clearGameVariables();
                setGameStage('adventureMapMenu');
            }
        }
    }
}

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
        if(!enemiesArray[i].alive) continue;
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
        
        if (enemiesArray[i].y > ch - 30 - 54 || enemiesArray[i].x > 30 + 10*54) {
            lifeDamage();
            resetEnemy(i);
        }

    }
}

function resetEnemy(i) {
            enemiesArray[i].x = 54*5 - 24;
            enemiesArray[i].y = 10;
            enemiesArray[i].ratAnimationStage = 0;
            enemiesArray[i].ratHp = 10;
            enemiesArray[i].ratMaxHp = 10;
            enemiesArray[i].pathIndex = -1;
            enemiesArray[i].pathCounter = 0;
            enemiesArray[i].direction = '';
}


function drawEnemy() {
    for(let i = 0; i<enemiesArray.length;i++){
        if (!enemiesArray[i].alive) continue;
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
    ctx.textAlign = 'center';
        ctx.fillText(enemiesArray[0].name, cw-115,ch-220);
     ctx.textAlign = 'left';
}