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
    speakText('Its Core and Cardio day. Keep your intensity extremely high for better results. Please maintain proper form. ');
});