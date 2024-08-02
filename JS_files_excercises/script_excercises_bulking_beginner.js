const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
        alert('Speech Synthesis API is not supported in this browser.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1; // Speed of speech
    utterance.pitch = 1; // Pitch of speech
    utterance.volume = 1; // Volume of speech
    utterance.lang = 'en-US'; // Language

    utterance.onstart = () => console.log('Speech started');
    utterance.onend = () => console.log('Speech ended');
    utterance.onerror = (event) => console.error('Speech synthesis error:', event);

    try {
        speechSynthesis.speak(utterance);
    } catch (error) {
        console.error('Failed to speak:', error);
    }
};

document.getElementById('speak-btn').addEventListener('click', () => {
    speakText('Welcome to the beginner level bulking section champ. Please read the instructions for each and every excercise carefully before starting the workout. If still unfamiliar watch the respective video implementations to avoid any unnecessary injuries. You can view the respective excercise instructions and video implementations by clicking on the excercise cards. And Most importantly. Enjoy your workout');
});