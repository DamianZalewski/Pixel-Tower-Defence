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
    this.pathIndex = 4; // should update dynamic
    this.pathCounter = 1;
    this.pathIndexCounter = 0;
    this.direction = 'bottom';
}

let enemiesArray = [];
enemiesArray[0] = new rat();
function updateEnemy() {
    for(let i = 0; i<enemiesArray.length;i++){
//        let pathVar = pathArray[enemiesArray[i].pathIndex+1];
//        let enemyVar = pathArray[enemiesArray[i].pathIndex];
//        let summary = enemyVar - pathVar;
//        console.log(summary);
//        if (summary == 1) enemiesArray[i].x--
//        else if (summary == -1) enemiesArray[i].x++
//        else if (summary > 1) enemiesArray[i].y--
//        else if (summary < -1) enemiesArray[i].y++;    
//        enemiesArray[i].pathCounter++;
//        if(enemiesArray[i].pathCounter == 54) {
//            enemiesArray[i].pathCounter = 1;
//            enemiesArray[i].pathIndex ++;
//        }
//        let index = enemiesArray[i].pathIndex;
//        if(enemiesArray[i].direction != 'left' && fields[index+1].type == 'path') {
//            enemiesArray[i].x++;
//            enemiesArray[i].direction = 'right';
//            console.log('right');
//        }
//        else if(enemiesArray[i].direction != 'top' && fields[index+10].type == 'path') { 
//            enemiesArray[i].y++;
//            enemiesArray[i].direction = 'bottom';
//            console.log('bottom');
//        }
//        else if(enemiesArray[i].direction != 'right' && fields[index-1].type == 'path') { 
//            enemiesArray[i].x--;
//            enemiesArray[i].direction = 'left';
//            console.log('left');
//        }
//        else if(enemiesArray[i].direction != 'bottom' && fields[index-10].type == 'path') { 
//            enemiesArray[i].y--;
//            enemiesArray[i].direction = 'top';
//            console.log('right');
//        }
//        enemiesArray[i].pathCounter++;
//        if(enemiesArray[i].pathCounter == 54) {
//            enemiesArray[i].pathCounter = 1;
//            enemiesArray[i].pathIndexCounter ++;
//            switch( enemiesArray[i].direction) {
//                case 'top':
//                    enemiesArray[i].pathIndex -= 10;
//                    break;
//                case 'right':
//                    enemiesArray[i].pathIndex += 1;
//                    break;
//                case 'bottom':
//                    enemiesArray[i].pathIndex += 10;
//                    break;
//                case 'left':
//                    enemiesArray[i].pathIndex -= 1;
//                    break;
//            }
//        
//        }
        let index = enemiesArray[i].pathIndex;
        // find another field 
        if(enemiesArray[i].pathCounter == 54) {
            console.log('test');

            enemiesArray[i].pathCounter = 1;
            enemiesArray[i].pathIndexCounter ++;
            let directionPathIsFound = false;
            // check if there is another path in the same direction
            switch(enemiesArray[i].direction) {
                case 'top':
                    if(fields[index-10].type == 'path') { 
                        directionPathIsFound = true;
                         enemiesArray[i].pathIndex -= 10;
                    }
                    break;
                case 'bottom':
                    if(fields[index+10].type == 'path') { 
                        directionPathIsFound = true;
                         enemiesArray[i].pathIndex += 10;
                    }
                    break;
                case 'left':

                    if(fields[index-1].type == 'path') { 
                        directionPathIsFound = true;
                         enemiesArray[i].pathIndex -= 1;
                    }
                    break;
                case 'right':
                    enemiesArray[i].pathIndex += 1;
                    if(fields[index+1].type == 'path') {
                        directionPathIsFound = true;
                         enemiesArray[i].pathIndex += 1;
                    }  
                    break;
            }
            // if there are not path in the same direction find new one
            if(!directionPathIsFound) {        
                if(enemiesArray[i].direction != 'bottom' && fields[index-10].type == 'path') { 
                    enemiesArray[i].direction = 'top';
                    console.log('top');
                }
                if(enemiesArray[i].direction != 'top' && fields[index+10].type == 'path') { 
                    enemiesArray[i].direction = 'bottom';
                    console.log('bottom');
                }
                
                if(enemiesArray[i].direction != 'right' && fields[index-1].type == 'path') { 
                    enemiesArray[i].direction = 'left';
                    console.log('left');
                }
                
                if(enemiesArray[i].direction != 'left' && fields[index+1].type == 'path') {
                    enemiesArray[i].direction = 'right';
                    console.log('right');
                }
            }
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
        
    }
}


function drawEnemy() {
    for(let i = 0; i<enemiesArray.length;i++){
        switch(enemiesArray[i].ratAnimationStage) {
        case 0:
            ctx.drawImage(enemiesArray[i].ratImage1, enemiesArray[i].x, enemiesArray[i].y, enemiesArray[i].width, enemiesArray[i].height);
            break;
        case 1:
            ctx.drawImage(enemiesArray[i].ratImage2, enemiesArray[i].x, enemiesArray[i].y, enemiesArray[i].width, enemiesArray[i].height);
            break;
        case 2:
            ctx.drawImage(enemiesArray[i].ratImage3, enemiesArray[i].x, enemiesArray[i].y, enemiesArray[i].width, enemiesArray[i].height);
            break;
        case 3:
            ctx.drawImage(enemiesArray[i].ratImage4, enemiesArray[i].x, enemiesArray[i].y, enemiesArray[i].width, enemiesArray[i].height);
            break;
    }
    //hp bar
    ctx.fillStyle = 'green';
    if(enemiesArray[i].ratHp < 7) ctx.fillStyle = 'yellow'
    if(enemiesArray[i].ratHp < 4) ctx.fillStyle = 'red';
    ctx.fillRect(enemiesArray[i].x+ (enemiesArray[i].width - enemiesArray[i].ratHp * 5)/2, enemiesArray[i].y-5,enemiesArray[i].ratHp * 5,5);
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