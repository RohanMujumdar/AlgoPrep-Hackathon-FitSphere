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
    speakText('Welcome to the Advanced Bulking Zone! You’re in the high stakes of muscle growth, where precision and safety are crucial. As you push your limits with heavier weights, it’s vital to maintain flawless form to avoid injuries. Click on each exercise card for detailed instructions and video demonstrations. Equip yourself with a weight belt for added support during intense lifts. Embrace the challenge, stay sharp, and watch your strength and size soar. Your hard work here will set new benchmarks—lets bulk up safely and effectively!. Enjoy your workout.');
});