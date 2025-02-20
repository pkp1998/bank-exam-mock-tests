// script.js
document.getElementById('mock-test').addEventListener('submit', function(e) {
    e.preventDefault();
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
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q1 && q1.value === correctAnswers.q1) score++;
    if (q2 && q2.value === correctAnswers.q2) score++;
    document.getElementById('result').textContent = `You scored ${score} out of 2!`;
});