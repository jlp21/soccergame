window.onload = () => {

    // let game = new Game(team);
    // game.start();
    let game;
    document.getElementById("italy-button").addEventListener("click", () => {
        if(game) {
            game.soundtrack.pause();
        }
        game = new Game("italy", "./images/pick.png", "./images/italyflag.png", "./sounds/italyanthem.mp3");
        // game.team = "italy";
        // game.start();
        gameStart()
    })
    
    
    document.getElementById("england-button").addEventListener("click", () => {
        if(game) {
            game.soundtrack.pause();
        }
        game = new Game("england", "./images/don.png", "./images/englandflag.png", "./sounds/englandanthem.mp3");
        // game.team = "england";
        // game.start();
        gameStart()
    })
    
    function gameStart() {
        game.start();
        document.onkeyup = (event) => {
            game.shoot(event.code);
        }
    }
}   

