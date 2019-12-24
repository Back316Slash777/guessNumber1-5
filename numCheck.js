const check = document.getElementById('check');
const guess = new URLSearchParams(window.location.search);
const num = guess.get('guess');
const randomNum = Math.floor(Math.random() * 5) + 1;

if (num == randomNum) {
    check.innerHTML = `You guessed correctly! It was ${randomNum}!`;
}
else if (num > randomNum) {
    check.innerHTML = `Sorry, ${num} is too high! It was ${randomNum}!`;
}
else {
    check.innerHTML = `Sorry, ${num} is too low! It was ${randomNum}!`;    
}