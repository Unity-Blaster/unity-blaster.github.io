const tabs = document.querySelector('.tabs');
const photosPanel = document.querySelector('#photos-panel');
const videosPanel = document.querySelector('#videos-panel');
const musicPanel = document.querySelector('#music-panel');

// Store all panels in an array
var panels = [photosPanel, videosPanel, musicPanel];

tabs.addEventListener('click', function(event) {
    // Hide all panels
    panels.forEach(function(panel) {
    panel.setAttribute('hidden', '');
    });

    // Show the clicked panel
    // var clickedPanel;
    switch (event.clickedPanel.id) {
    case 'photos-tab':
        clickedPanel = photosPanel;
        break;
    case 'videos-tab':
        clickedPanel = videosPanel;
        break;
    case 'music-tab':
        clickedPanel = musicPanel;
        break;
    }
    clickedPanel.removeAttribute('hidden');
});