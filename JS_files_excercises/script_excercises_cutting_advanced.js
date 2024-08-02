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
    speakText('Welcome to the Advanced Cutting Zone! You are at the peak of your fitness journey, where every detail counts. Dive into each exercise cards mentioned above for comprehensive instructions and video demos. Ensure impeccable form, especially with high-intensity moves, to optimize results and steer clear of injuries. Push your limits, perfect your technique, and cut through to your best self. Your dedication is about to pay off—lets make every session legendary!.  Enjoy your workout.');
});