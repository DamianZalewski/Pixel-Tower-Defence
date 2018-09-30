let stars = [];
let starsInitFlag = true;
let starImage = new Image();
starImage.src = 'assets/star.png';
let starOffImage = new Image();
starOffImage.src = 'assets/starOff.png';
function initStars() {
    for(let i = 0;i<10;i++) {
        stars[i] = 0;
    }
}

function setStars(level) {
    if (life == 10) {
        stars[level] = 3;
    }
    else if(life > 5) {
        stars[level] = 2;
    }
    else stars[level] = 1;
}

function drawStarsAdventureMap() {
    let x1 = 60;  let y1 = 140;
    let x2 = 150; let y2 = 200;
    let x3 = 20;  let y3 = 450;
    let x4 = 200; let y4 = 420;
    let x5 = 300; let y5 = 450;
    let x6 = 500; let y6 = 520;
    let x7 = 600; let y7 = 450;
    let x8 = 450; let y8 = 340;
    let x9 = 500; let y9 = 140;
    let x10 = 700; let y10 = 100;
    
    let fieldsX = [
      60,
      150,
      20,
      200,
      300,
      500,
      600,
      450,
      500,
      700
    ];
    
    let fieldsY = [
      140,
      200,
      450,
      420,
      450,
      520,
      450,
      340,
      140,
      100
    ];
    
    let starSize = 15;
    for(let j = 0;j < mapLevel; j++) {
        let starCounter = 0;
        for(let k = 0;k<60;k+=20) {
            if(starCounter < stars[j])
                ctx.drawImage(starImage,fieldsX[j]+k-7,fieldsY[j]-starSize-5,starSize,starSize);
            else 
                ctx.drawImage(starOffImage,fieldsX[j]+k-7,fieldsY[j]-starSize-5,starSize,starSize);
            starCounter++;
        }
    }

}