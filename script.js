function navigateTo(screen) {
    switch (screen) {
        case 'LockerRoom':
            window.location.href = 'lockerRoom.html';
            break;
        case 'GameScreen':
            let audioElement = document.getElementById('backgroundAudio');

            // Play the audio and then navigate to GameScreen
            audioElement.oncanplaythrough = function() {
                audioElement.play();
                window.location.href = 'gameScreen.html';
            };
            audioElement.load(); // Trigger loading of the audio
            break;
        case 'Settings':
            window.location.href = 'settings.html';
            break;
        default:
            console.error(`Unknown screen: ${screen}`);
            break;
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

document.addEventListener('DOMContentLoaded', function() {
    let audioElement = document.getElementById('backgroundAudio');
    let startGameBtn = document.getElementById('startGameBtn');

    startGameBtn.addEventListener('click', function() {
        try {
            audioElement.play().catch(error => {
                // Log for debugging purposes
                console.error("Audio playback error:", error);
                
                // If there's an error, display an alert or some kind of message to the user
                alert("Audio could not be played. Please try again.");
            });
        } catch (error) {
            console.error("Audio playback error:", error);
        }
    });
});

