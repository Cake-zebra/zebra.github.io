// Voice reader setup
let speechSynthesisInstance = window.speechSynthesis;
let utterance;
let isPlaying = false;

document.getElementById("playPauseBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value;
  if (!isPlaying) {
    utterance = new SpeechSynthesisUtterance(text);
    speechSynthesisInstance.speak(utterance);
    isPlaying = true;
    document.getElementById("playPauseBtn").textContent = "⏸ Pause";
  } else {
    speechSynthesisInstance.cancel();
    isPlaying = false;
    document.getElementById("playPauseBtn").textContent = "▶ Play";
  }
});

// On-screen keyboard setup
const keyboardContainer = document.getElementById("keyboard");
const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

keys.forEach(letter => {
  const keyDiv = document.createElement("div");
  keyDiv.classList.add("key");
  keyDiv.textContent = letter;
  keyDiv.id = "key-" + letter;
  keyboardContainer.appendChild(keyDiv);
});

// Highlight keys as user types
document.getElementById("transcriptionArea").addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const keyDiv = document.getElementById("key-" + key);
  if (keyDiv) {
    keyDiv.classList.add("active");
    setTimeout(() => keyDiv.classList.remove("active"), 200);
  }
});