const audioContext = new AudioContext();

const NOTE_DETAILS = [
    { note: 'C', key: 'Z', frequency: 261.626, active: false },
    { note: 'Db', key: 'S', frequency: 277.183, active: false },
    { note: 'D', key: 'X', frequency: 293.665, active: false },
    { note: 'Eb', key: 'D', frequency: 311.127, active: false },
    { note: 'E', key: 'C', frequency: 329.628, active: false },
    { note: 'F', key: 'V', frequency: 349.228, active: false },
    { note: 'Gb', key: 'G', frequency: 369.994, active: false },
    { note: 'G', key: 'B', frequency: 391.995, active: false },
    { note: 'Ab', key: 'H', frequency: 415.305, active: false },
    { note: 'A', key: 'N', frequency: 440, active: false },
    { note: 'Bb', key: 'J', frequency: 466.164, active: false },
    { note: 'B', key: 'M', frequency: 493.883, active: false },
];

document.addEventListener('keydown', e => {
    if (e.repeat) return;

    const enteredKey = e.code;
    const note = getNote(enteredKey);
    if (!note) return;

    note.active = true;
    playNotes();
});

document.addEventListener('keyup', e => {
    const enteredKey = e.code;
    const note = getNote(enteredKey);

    if (!note) return;
    note.active = false;
    playNotes();
});

function playNotes() {
    NOTE_DETAILS.forEach(n => {
        const keyElement = document.querySelector(`[data-note="${n.note}"]`);
        keyElement.classList.toggle('active', n.active);

        if (n.oscillator) {
            n.oscillator.stop();
            n.oscillator.disconnect();
        }
    });

    const activeNotes = NOTE_DETAILS.filter(n => {
        return n.active == true;
    });

    activeNotes.forEach(n => {
        startNote(n, 1 / activeNotes.length);
    });
}

function getNote(key) {
    return NOTE_DETAILS.find(n => `Key${n.key}` === key);
}

function startNote(n, gain) {
    const gainNode = audioContext.createGain();
    gainNode.gain.value = gain;
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = n.frequency;
    oscillator.connect(gainNode).connect(audioContext.destination);
    oscillator.start();
    n.oscillator = oscillator;
}
