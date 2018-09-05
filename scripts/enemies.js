let rat = function(){
    this.width = 54;
    this.height = 54;
    this.x = 54*5 - 24;
    this.y = 10;
    this.ratImage1 = new Image();
    this.ratImage1.src = "assets/rat1.png";
    this.ratImage2 = new Image();
    this.ratImage2.src = "assets/rat2.png";
    this.ratImage3 = new Image();
    this.ratImage3.src = "assets/rat3.png";
    this.ratImage4 = new Image();
    this.ratImage4.src = "assets/rat4.png";
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
        switch(enemiesArray[i].ratAnimationStage) {
        case 0:
            ctx.drawImage(enemiesArray[i].ratImage1, enemiesArray[i].x, enemiesArray[i].y-enemiesArray[i].height/2, enemiesArray[i].width, enemiesArray[i].height);
            break;
        case 1:
            ctx.drawImage(enemiesArray[i].ratImage2, enemiesArray[i].x, enemiesArray[i].y-enemiesArray[i].height/2, enemiesArray[i].width, enemiesArray[i].height);
            break;
        case 2:
            ctx.drawImage(enemiesArray[i].ratImage3, enemiesArray[i].x, enemiesArray[i].y-enemiesArray[i].height/2, enemiesArray[i].width, enemiesArray[i].height);
            break;
        case 3:
            ctx.drawImage(enemiesArray[i].ratImage4, enemiesArray[i].x, enemiesArray[i].y-enemiesArray[i].height/2, enemiesArray[i].width, enemiesArray[i].height);
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
                ctx.drawImage(enemiesArray[0].ratImage1,cw-140,ch-210,54,54);
                break;
            case 1:
                ctx.drawImage(enemiesArray[0].ratImage2,cw-140,ch-210,54,54);
                break;
            case 2:
                ctx.drawImage(enemiesArray[0].ratImage3,cw-140,ch-210,54,54);
                break;
            case 3:
                ctx.drawImage(enemiesArray[0].ratImage4,cw-140,ch-210,54,54);
                break;
        }
        ctx.fillStyle = "white";
        ctx.fillText('Rat', cw-140,ch-220);
}