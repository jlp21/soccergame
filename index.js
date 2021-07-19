const game = new Game();

window.onload = () => {

document.getElementById("italy-button").addEventListener("click", () => {
    game.start();

})


document.getElementById("england-button").addEventListener("click", () => {
    game.start();
})
}