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
    speakText('Welcome to the Intermediate Cutting Challenge! It’s time to level up and push your limits. Dive into each exercise by clicking on the exercise cards mention above to view detailed instructions and watch video demonstrations. Stay focused, be consistent, and transform your hard work into results. Remember, every click brings you closer to your goals. Lets crush it and enjoy the journey!.  Enjoy your workout.');
});