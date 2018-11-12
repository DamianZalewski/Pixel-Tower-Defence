let Profile = function() {
    this.name = '',
    this.active = false;
    this.level = 0;
    this.stars = 0;
}

let profileName = 'Anonymous';
let profileNameDefault = true;
let profileNameMaxLength = 10;
    
let profile1 = new Profile();
let profile2 = new Profile();
let profile3 = new Profile();

function setProfileName(profile,name){
    profile.name = name;
}


//-----------------------------
//--- profile menu
function drawProfileMenu() {
    ctx.fillStyle = 'gray';
    ctx.fillRect(0,0,cw,ch);
    ctx.font = '36px arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('Choose player profile!',cw/2,60);
    ctx.drawImage(stopMenuButtonImage,cw/2-200,130,400,80);
    ctx.drawImage(stopMenuButtonImage,cw/2-200,230,400,80);
    ctx.drawImage(stopMenuButtonImage,  cw/2-200,330,400,80);
    ctx.drawImage(stopMenuButtonImage,cw/2-100,ch-100,200,50);
    ctx.fillText('BACK',cw/2,ch-65,200);
}

function handleProfileMenuClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    if(
       posX >= cw/2-100 && posX <= cw/2+100 &&
       posY >= ch-100 && posY <= ch-50
    ) {
        setGameStage('mainMenu');
    } else
    if(
       posX >= cw/2-200 && posX <= cw/2+200 &&
       posY >= 130 && posY <= 180
    ) {
        // profile 1
        if(profile1.active) {
            setGameStage('adventureMapMenu');
        } else {
            setGameStage('createProfileMenu');
        }
    } else
    if(
       posX >= cw/2-200 && posX <= cw/2+200 &&
       posY >= 230 && posY <= 280
    ) {
        // profile 2
        if(profile2.active) {
            setGameStage('adventureMapMenu');
        } else {
            setGameStage('createProfileMenu');
        }
    } else
    if(
       posX >= cw/2-200 && posX <= cw/2+200 &&
       posY >= 330 && posY <= 380
    ) {
        // profile 3
        if(profile3.active) {
            setGameStage('adventureMapMenu');
        } else {
            setGameStage('createProfileMenu');
        }
    }
}

//---------------------

//profile create map
function drawCreateProfileMenu() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
    ctx.font = '32px arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('What is your name?',cw/2,60);
    ctx.fillText(profileName,cw/2,200);
    ctx.drawImage(stopMenuButtonImage,cw/2-250,ch-100,200,50);
    ctx.fillText('BACK',cw/2-150,ch-65,200);
    ctx.drawImage(stopMenuButtonImage,cw/2+50,ch-100,200,50);
    ctx.fillText('CONTINUE',cw/2+150,ch-65,200);
}

function handleCreateProfileMenuClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    if(
       posX >= cw/2-250 && posX <= cw/2-50 &&
       posY >= ch-100 && posY <= ch-50
    ) {
        setGameStage('profileMenu');
    } else
    if(
       posX >= cw/2+50 && posX <= cw/2+250 &&
       posY >= ch-100 && posY <= ch-50
    ) {
        setGameStage('tutorial');
    } 
}

function handleCreateProfileMenuKeyUp(ev) {
    if (profileNameDefault) {
        profileNameDefault = false;
        profileName = '';
    }
    let key = ev.key;
    if(key === 'Backspace') {
        profileName = profileName.substr(0,profileName.length-1);
        return true;
    } 
    if(key.length > 1) return true;
    if(profileName.length < profileNameMaxLength) profileName += key;
}
//--------------------