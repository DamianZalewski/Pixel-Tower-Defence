let tutorialStage = 0;

function drawTutorial() {
    switch(tutorialStage) {
        case 0:
            drawTutorialStage0();
            break;
    }
}

function handleTutorialClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    
    switch(tutorialStage) {
        case 0:
            handleTutorial0Click(posX,posY);
            break;
    }
}


function drawTutorialStage0() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
    ctx.font = '36px arial';
    ctx.fillStyle = 'white  ';
    ctx.textAlign = 'center';
    ctx.fillText('Do you want to play tutorial?',cw/2,180);
    
    ctx.drawImage(stopMenuButtonImage,cw/2-150,262,100,50);
    ctx.fillText('Yes',cw/2-100,300,200);
    
     ctx.drawImage(stopMenuButtonImage,cw/2+50,262,100,50);
    ctx.fillText('No',cw/2+100,300,200);
}

function handleTutorial0Click(posX, posY) {
    if(
       posX >= cw/2-150 && posX <= cw/2-50 &&
       posY >= 262 && posY <= 312
    ) {
        console.log('yes');
    } else if(
       posX >= cw/2+50 && posX <= cw/2+150 &&
       posY >= 262 && posY <= 312
    ) {
        setGameStage('adventureMapMenu');
    }
}
