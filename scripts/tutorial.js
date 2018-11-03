let tutorialStage = 0;
let tutorialSkipMenuActive = false;

function drawTutorial() {
    switch(tutorialStage) {
        case 0:
            drawTutorialStage0();
            break;
        case 1:
            drawTutorialStage1();
            break;
        case 2:
            drawTutorialStage2();
            break;
    }
    if(tutorialStage != 0) drawSkipTutorial();
}

function handleTutorialClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    handleSkipTutorialClick(posX,posY)
    if(tutorialSkipMenuActive) return null;
    
    switch(tutorialStage) {
        case 0:
            handleTutorial0Click(posX,posY);
            break;
        case 1:
            handleTutorial1Click(posX,posY);
            break;
        case 2:
            handleTutorial2Click(posX,posY);
            break;
    }
    
}

function drawSkipTutorial() {
    ctx.drawImage(backButton,10,10,80,25);
    if(tutorialSkipMenuActive) {
        ctx.drawImage(stopMenuImage,cw/2-200,50,400,150);
        ctx.drawImage(playButton,cw/2-120,130,100,50);
        ctx.drawImage(playButton,cw/2+20,130,100,50);
    }
}

function handleSkipTutorialClick(posX,posY) {
    if(tutorialSkipMenuActive){
        if(
          posX >= cw/2-120 && posX <= cw/2-20 &&
          posY >= 130 && posY <= 180
        ) {
            tutorialStage = 0;
            tutorialSkipMenuActive = false;
            setGameStage('adventureMapMenu');
        }
        else if (
          posX >= cw/2+20 && posX <= cw/2+120 &&
          posY >= 130 && posY <= 180
        ) {
            tutorialSkipMenuActive = false;
        }
    }
    else {
       if(
          posX >= 10 && posX <= 90 &&
          posY >= 10 && posY <= 35
    ) tutorialSkipMenuActive = true;
    };
}

// tutorial 0 ---
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
        tutorialStage = 1;
    } else if(
       posX >= cw/2+50 && posX <= cw/2+150 &&
       posY >= 262 && posY <= 312
    ) {
        setGameStage('adventureMapMenu');
    }
}


// tutorial 1 ---
function drawTutorialStage1() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,cw,ch);
    
    // tutorial character
    ctx.fillStyle = "blue";
    ctx.fillRect(cw-300,150,300,ch-150);
    
    // dialog
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,ch-150,cw,150);
    
    // next button
    ctx.fillStyle = 'red';
    ctx.fillRect(cw-50,ch-50,40,40);
    
    // dialog text
    ctx.fillStyle = "black";
    ctx.textAlign = 'left';
    ctx.font = '36px Arial';
    ctx.fillText('Welcome to PIXEL TOWER DEFENCE tutorial!',50,ch-80,cw-100);
}

function handleTutorial1Click(posX, posY) {
    if(
       posX >= cw-50 && posX <= cw-10 &&
       posY >= ch-50 && posY <= ch-10
    ) {
        tutorialStage = 2;
    }
}

// tutorial 2 ---

function drawTutorialStage2() {
    // dialog
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,ch-150,cw,150);
    
    // next button
    ctx.fillStyle = 'red';
    ctx.fillRect(cw-50,ch-50,40,40);
    
    // dialog text
    ctx.fillStyle = "black";
    ctx.textAlign = 'left';
    ctx.font = '36px Arial';
    ctx.fillText('Your goal is to defence your city from the enemies!',50,ch-80,cw-100);
}

function handleTutorial2Click(posX, posY) {
    if(
       posX >= cw-50 && posX <= cw-10 &&
       posY >= ch-50 && posY <= ch-10
    ) {
        tutorialStage = 3;
    }
}
