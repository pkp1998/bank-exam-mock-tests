document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mock-test');
    const answers = {
        'sbi-po.html': { q1: '250', q2: 'Joyful' },
        'sbi-clerk.html': { q1: '42', q2: 'Slow' },
        'ibps-po.html': { q1: '4', q2: 'Delhi' },
        'ibps-clerk.html': { q1: '20', q2: 'Large' },
        'ibps-rrb-po.html': { q1: '7', q2: 'Jupiter' },
        'ibps-rrb-clerk.html': { q1: '32', q2: 'Hot' }
    };
    const page = window.location.pathname.split('/').pop();
    const correctAnswers = answers[page];

    // Timer for each question (30 seconds)
    let timeLeftQ1 = 30;
    let timeLeftQ2 = 30;
    const timerQ1 = document.getElementById('timer-q1');
    const timerQ2 = document.getElementById('timer-q2');

    const intervalQ1 = setInterval(() => {
        timeLeftQ1--;
        timerQ1.textContent = `Time Left: ${timeLeftQ1}s`;
        if (timeLeftQ1 <= 0) {
            clearInterval(intervalQ1);
            timerQ1.textContent = "Time's Up!";
            form.dispatchEvent(new Event('submit')); // Auto-submit
        }
    }, 1000);

    const intervalQ2 = setInterval(() => {
        timeLeftQ2--;
        timerQ2.textContent = `Time Left: ${timeLeftQ2}s`;
        if (timeLeftQ2 <= 0) {
            clearInterval(intervalQ2);
            timerQ2.textContent = "Time's Up!";
            form.dispatchEvent(new Event('submit')); // Auto-submit
        }
    }, 1000);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        clearInterval(intervalQ1);
        clearInterval(intervalQ2);
        let score = 0;
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        if (q1 && q1.value === correctAnswers.q1) score++;
        if (q2 && q2.value === correctAnswers.q2) score++;
        document.getElementById('result').textContent = `You scored ${score} out of 2!`;
    });
});