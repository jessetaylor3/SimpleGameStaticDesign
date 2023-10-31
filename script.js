function navigateTo(screenName){
    switch(screenName) {
        case 'Settings':
            window.location.href = 'settings.html';
            break;
        case 'GameScreen':
            window.location.href = 'gameScreen.html';
            break;
        case 'LockerRoom':
            window.location.href = 'lockerRoom.html';
            break;
        default:
            console.error("Unknown screen: " + screenName);
    }
}