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

document.addEventListener('DOMContentLoaded', function() {
    let iconWrappers = document.querySelectorAll('.iconWrapper');
    
    iconWrappers.forEach(function(wrapper) {
        wrapper.addEventListener('click', function() {
            // Determine the selected plane's source
            let planeImageSrc = wrapper.querySelector('.plane-icon').getAttribute('src');
            let planeName = planeImageSrc.split('/').pop().split('.')[0]; // e.g., "bluePlane"
            
            // Redirect to the Game Screen with a query parameter
            window.location.href = `gameScreen.html?plane=${planeName}`;
        });
    });
});

