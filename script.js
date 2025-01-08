let countdown = 10;
let interval = null;
let audio = null; // Track the audio object

// Function to play a sound
function playSound() {
  audio = new Audio('assets/alarm.mp3'); // Replace with your desired sound URL
  audio.play();
}

function startCountdown() {
  if (interval) return;

  interval = setInterval(() => {
    countdown--;
    document.getElementById('timer').textContent = countdown;

    if (countdown <= 0) {
      clearInterval(interval);
      interval = null;
      document.getElementById('timer').textContent = "Time's up!";
      playSound(); // Play the sound when the countdown finishes
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(interval);
  interval = null;

  // Stop the audio if it's playing
  if (audio) {
    audio.pause();         // Stop the audio playback
    audio.currentTime = 0; // Reset the audio to the beginning
    audio = null;          // Clear the audio object reference
  }
}

document.getElementById('startButton').onclick = startCountdown;
document.getElementById('stopButton').onclick = stopCountdown;
