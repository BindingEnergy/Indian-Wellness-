document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let duration;

    // Get the timer buttons
    const timer5Btn = document.getElementById('timer5');
    const timer10Btn = document.getElementById('timer10');
    const timer15Btn = document.getElementById('timer15');

    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const restartBtn = document.getElementById('restartBtn');

    // Add click event listeners to the timer buttons
    timer5Btn.addEventListener('click', function () {
        startTimer(5 * 60); // 5 minutes in seconds
    });

    timer10Btn.addEventListener('click', function () {
        startTimer(10 * 60); // 10 minutes in seconds
    });

    timer15Btn.addEventListener('click', function () {
        startTimer(15 * 60); // 15 minutes in seconds
    });

    startBtn.addEventListener('click', function () {
        startTimer(duration);
    });

    stopBtn.addEventListener('click', function () {
        stopTimer();
    });

    pauseBtn.addEventListener('click', function () {
        pauseTimer();
    });

    restartBtn.addEventListener('click', function () {
        restartTimer();
    });

    // Function to start the timer
    function startTimer(timeInSeconds) {
        stopTimer(); // Stop any existing timers

        duration = timeInSeconds;

        let timerDisplay = document.getElementById('timerDisplay');
        let minutes, seconds;

        // Play soothing sound
        let audio = document.getElementById('audio');
        audio.play();

        timer = setInterval(function () {
            minutes = parseInt(duration / 60, 10);
            seconds = parseInt(duration % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerDisplay.textContent = minutes + ":" + seconds;

            if (--duration < 0) {
                clearInterval(timer);
                timerDisplay.textContent = "Timer Complete";
                // Pause soothing sound
                audio.pause();
                audio.currentTime = 0;
            }
        }, 1000);
    }

    // Function to stop the timer
    function stopTimer() {
        clearInterval(timer);
        resetTimerDisplay();
        // Pause soothing sound
        let audio = document.getElementById('audio');
        audio.pause();
        audio.currentTime = 0;
    }

    // Function to pause the timer
    function pauseTimer() {
        clearInterval(timer);
        // Pause soothing sound
        let audio = document.getElementById('audio');
        audio.pause();
    }

    // Function to restart the timer
    function restartTimer() {
        stopTimer();
        startTimer(duration);
    }

    // Function to reset the timer display
    function resetTimerDisplay() {
        let timerDisplay = document.getElementById('timerDisplay');
        timerDisplay.textContent = "";
    }
});
