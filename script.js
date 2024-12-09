// Voice Login Script
document.getElementById("voiceButton").addEventListener("click", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = (event) => {
        const spokenWord = event.results[0][0].transcript.toLowerCase();
        console.log("You said:", spokenWord);

        // Expected voice input
        const expectedWord = "i jk open lock";

        // Check if spoken word matches
        if (spokenWord === expectedWord) {
            document.getElementById("message").textContent = "Welcome! Login successful.";
        } else {
            document.getElementById("message").textContent = "Login failed. Please try again.";
        }
    };

    recognition.onerror = (err) => {
        console.error("Speech recognition error:", err);
        document.getElementById("message").textContent = "Error occurred. Please try again.";
    };
});
