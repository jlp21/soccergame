window.onload = () => {

    const game = new Game();
    // game.start();

    document.getElementById("italy-button").addEventListener("click", () => {
        game.team = "italy";
        game.start();
        })
    
    
    document.getElementById("england-button").addEventListener("click", () => {
        game.team = "england";
        game.start();
        })
    
    }   


