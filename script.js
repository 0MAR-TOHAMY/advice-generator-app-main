const generateAdvice = document.getElementById('generateAdvice');
const adviceContainer = document.getElementById('advice');
const adviceID = document.getElementById('adviceID');
let advices;

generateAdvice.addEventListener('click', async () => {
    generateAdvice.disabled = true;
    try {
        const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
        const advice = await response.json();
        advices = advice.slip;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceContainer.textContent = 'An error occurred while fetching advice.';
        generateAdvice.disabled = false;
        return;
    }
    adviceContainer.textContent = `"${advices.advice}"`;
    adviceID.textContent = `ADVICE #${advices.id}`;
    setTimeout(() => {
        generateAdvice.disabled = false;
    }, 2000);
});
