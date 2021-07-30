window.onload = () => {

    // let game = new Game(team);
    // game.start();

    document.getElementById("italy-button").addEventListener("click", () => {
        let game = new Game("italy", "./images/pickford.png");
        // game.team = "italy";
        game.start();
        })
    
    
    document.getElementById("england-button").addEventListener("click", () => {
        let game = new Game("england", "./images/donna.png");
        // game.team = "england";
        game.start();
        })
    
    }   


