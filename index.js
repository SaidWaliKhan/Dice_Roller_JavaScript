function rollDice() {
    const roll = document.getElementById("roll").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < roll; i++) {
        const val = Math.floor(Math.random() * 6) + 1;
        values.push(val);
        images.push(`<img src="Dice-images/${val}.png" alt="Dice face ${val}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`; 
    diceImages.innerHTML = images.join(''); 
}
