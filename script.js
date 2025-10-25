const player = document.getElementById('player');
const trackName = document.getElementById('track-name');
const record = document.querySelector('.record');

const tracks = [
    { src: 'audio/track1.mp3', name: 'ÓÍÍÂ - Ñâîáîäà' },
    { src: 'audio/track2.mp3', name: 'Disco Shit' },
    { src: 'audio/track3.mp3', name: 'BE ft. MM' },
    { src: 'audio/track4.mp3', name: 'Lyrics of 2 scoundrels' },
    { src: 'audio/track5.mp3', name: 'White Gold' },
    { src: 'audio/track6.mp3', name: 'Boasting' },
    { src: 'audio/track7.mp3', name: 'WSITYG' }
];

let currentTrack = 0;

function updateTrack() {
    player.src = tracks[currentTrack].src;
    trackName.textContent = tracks[currentTrack].name;
    player.play();
    record.classList.add('rotating');
}

player.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    updateTrack();
});

player.addEventListener('play', () => {
    record.classList.add('rotating');
});

player.addEventListener('pause', () => {
    record.classList.remove('rotating');
});

// Initialize first track
updateTrack();