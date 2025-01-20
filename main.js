const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
try{
const startGame = document.querySelector(`[aria-label="Start game"]`);
startGame.click();}catch{}


async function f1() {
    await delay(80);
    for (let i = 0; i < a.length / 2; i++) {
        try {
            // Check if the first element exists before attempting to click
            const firstElement = document.querySelectorAll(`[aria-label="${a[i * 2]}"]`)[0];
            if (firstElement) {
                await delay(170); // Delay before first click
                firstElement.click();
                const s = document.querySelectorAll(`[aria-label="${a[i * 2 + 1]}"]`);
                const secondElement = s[s.length - 1];
                await delay(170); // Delay before second click
                secondElement.click();
            }

        } catch (error) {
            console.error(error);
        }
    }
}

f1();
