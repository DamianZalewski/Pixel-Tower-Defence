let Profile = function() {
    this.name = '',
    this.active = false;
    this.level = 0;
    this.stars = 0;
}

let profileName = 'Anonymous';
let profileNameDefault = true;
let profileNameMaxLength = 10;
let confirmDelete = false;
    
let profile1 = new Profile();
let profile2 = new Profile();
let profile3 = new Profile();

let activeProfile = 0;

function createNewProfile(profile) {
    profile.name = profileName;
    profile.active = true;
}

function removeProfile() {
    if(activeProfile == 1) {
        localStorage.removeItem('profile1_active');
        localStorage.removeItem('profile1_name');
        localStorage.removeItem('profile1_level');
        localStorage.removeItem('profile1_stars');
    } else if(activeProfile == 2) {
        localStorage.removeItem('profile2_active');
        localStorage.removeItem('profile2_name');
        localStorage.removeItem('profile2_level');
        localStorage.removeItem('profile2_stars');
    } else if(activeProfile == 3) {
        localStorage.removeItem('profile3_active');
        localStorage.removeItem('profile3_name');
        localStorage.removeItem('profile3_level');
        localStorage.removeItem('profile3_stars');
    }
}

//-----------------------------
//--- profile menu
function drawProfileMenu() {
    let profile1Active = localStorage.getItem('profile1_active');
    let profile2Active = localStorage.getItem('profile2_active');
    let profile3Active = localStorage.getItem('profile3_active');
    ctx.fillStyle = 'gray';
    ctx.fillRect(0,0,cw,ch);
    ctx.font = '36px arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('Choose player profile!',cw/2,60);
    ctx.textAlign = "left";
    //profile 1
    ctx.drawImage(stopMenuButtonImage,cw/2-200,130,400,80);
    if(profile1Active) {
        ctx.drawImage(stopMenuButtonImage,cw/2+220,130,40,40);
        ctx.fillText(localStorage.getItem('profile1_name'),cw/2-180,175);
        ctx.fillText(localStorage.getItem('profile1_level'),cw/2+150,165);
        ctx.fillText(localStorage.getItem('profile1_stars'),cw/2+150,200);
    }
       
       
    //profile 2
    ctx.drawImage(stopMenuButtonImage,cw/2-200,230,400,80);
    if(profile2Active) {
        ctx.drawImage(stopMenuButtonImage,cw/2+220,230,40,40);
        ctx.fillText(localStorage.getItem('profile2_name'),cw/2-180,275);
        ctx.fillText(localStorage.getItem('profile2_level'),cw/2+150,265);
        ctx.fillText(localStorage.getItem('profile2_stars'),cw/2+150,300);
    }
    //profile 3
    ctx.drawImage(stopMenuButtonImage, cw/2-200,330,400,80);
    if(profile3Active) {
        ctx.drawImage(stopMenuButtonImage, cw/2+220,330,40,40);
        ctx.fillText(localStorage.getItem('profile3_name'),cw/2-180,375);
        ctx.fillText(localStorage.getItem('profile3_level'),cw/2+150,365);
        ctx.fillText(localStorage.getItem('profile3_stars'),cw/2+150,400);
    }
    
    ctx.textAlign = "center";
    ctx.drawImage(stopMenuButtonImage,cw/2-100,ch-100,200,50);
    ctx.fillText('BACK',cw/2,ch-65,200);
    
    
    if(confirmDelete) {
        ctx.drawImage(stopMenuButtonImage,cw/2-300,100,600,300);
        ctx.fillText('Are you sure you want to remove this profile?',cw/2,180, 500);
        ctx.drawImage(stopMenuButtonImage,cw/2-250,300,200,50);
        ctx.fillText('Yes',cw/2-150,340);
        ctx.drawImage(stopMenuButtonImage,cw/2+50,300,200,50);
        ctx.fillText('No',cw/2+150,340);
    }
}

function handleProfileMenuClick(ev) {
    let posX = Math.floor(ev.clientX - rect.left);
    let posY = Math.floor(ev.clientY - rect.top);
    let profile1Active = localStorage.getItem('profile1_active');
    let profile2Active = localStorage.getItem('profile2_active');
    let profile3Active = localStorage.getItem('profile3_active');
    if( confirmDelete && 
       posX >= cw/2-250 && posX <= cw/2-50 &&
       posY >= 300 && posY <= 350
    ) {
        // confirm delete dialog 'yes'
        confirmDelete = false;
        removeProfile();
    } else
    if( confirmDelete &&
       posX >= cw/2+50 && posX <= cw/2+250 &&
       posY >= 300 && posY <= 350
    ) {
        // confirm delete dialog 'no'
        confirmDelete = false;
    } else
    if(confirmDelete) {
        return 0;         
    } else
    if(
       posX >= cw/2-100 && posX <= cw/2+100 &&
       posY >= ch-100 && posY <= ch-50
    ) {
        setGameStage('mainMenu');
    } else
    if(
       posX >= cw/2-200 && posX <= cw/2+200 &&
       posY >= 130 && posY <= 210
    ) {
        // profile 1
        activeProfile = 1;
        if(profile1.active) {
            setGameStage('adventureMapMenu');
        } else {
            setGameStage('createProfileMenu');
        }
    } else
    if(
       posX >= cw/2-200 && posX <= cw/2+200 &&
       posY >= 230 && posY <= 310
    ) {
        // profile 2
        activeProfile = 2;
        if(profile2.active) {
            setGameStage('adventureMapMenu');
        } else {
            setGameStage('createProfileMenu');
        }
    } else
    if(
       posX >= cw/2-200 && posX <= cw/2+200 &&
       posY >= 330 && posY <= 410
    ) {
        // profile 3
        activeProfile = 3;
        if(profile3.active) {
            setGameStage('adventureMapMenu');
        } else {
            setGameStage('createProfileMenu');
        }
    } else
    if( // handle profile removes click
       posX >= cw/2+220 && posX <= cw/2+260 &&
       posY >= 130 && posY <= 170
    ) {
        if(profile1Active) {
            activeProfile = 1;
            confirmDelete = true;
        }
        
    } else
    if(
       posX >= cw/2+220 && posX <= cw/2+260 &&
       posY >= 230 && posY <= 270
    ) {
        if(profile2Active) {
            activeProfile = 2;
            confirmDelete = true;
        }
    } else
    if(
       posX >= cw/2+220 && posX <= cw/2+260 &&
       posY >= 330 && posY <= 370
    ) {
        if(profile3Active) {
            activeProfile = 3;
            confirmDelete = true;
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
        switch(activeProfile) {
            case 1: createNewProfile(profile1);
                localStorage.setItem('profile1_name',profile1.name);
                localStorage.setItem('profile1_active',profile1.active);
                localStorage.setItem('profile1_level',profile1.level);
                localStorage.setItem('profile1_stars',profile1.stars);
                break;
            case 2: createNewProfile(profile2);
                localStorage.setItem('profile2_name',profile2.name);
                localStorage.setItem('profile2_active',profile2.active);
                localStorage.setItem('profile2_level',profile2.level);
                localStorage.setItem('profile2_stars',profile2.stars);
                break;
            case 3: createNewProfile(profile3);
                localStorage.setItem('profile3_name',profile3.name);
                localStorage.setItem('profile3_active',profile3.active);
                localStorage.setItem('profile3_level',profile3.level);
                localStorage.setItem('profile3_stars',profile3.stars);
                break;
        }
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