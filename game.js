document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('game-area');
    const startButton = document.getElementById('start-button');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let gameInterval;

    function startGame() {
        score = 0;
        scoreDisplay.textContent = 'Score: 0';
        startButton.disabled = true;
        gameInterval = setInterval(createBeat, 1000);
    }

    function createBeat() {
        const beat = document.createElement('div');
        beat.className = 'beat';
        beat.style.left = Math.random() * (gameArea.offsetWidth - 20) + 'px';
        beat.style.top = '0px';
        gameArea.appendChild(beat);

        let beatInterval = setInterval(() => {
            const beatTop = parseInt(beat.style.top);
            if (beatTop >= gameArea.offsetHeight - 20) {
                clearInterval(beatInterval);
                gameArea.removeChild(beat);
            } else {
                beat.style.top = beatTop + 5 + 'px';
            }
        }, 50);

        beat.addEventListener('click', () => {
            clearInterval(beatInterval);
            gameArea.removeChild(beat);
            score++;
            scoreDisplay.textContent = 'Score: ' + score;
        });
    }

    startButton.addEventListener('click', startGame);
});
