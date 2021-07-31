window.onload = () => {

    // let game = new Game(team);
    // game.start();

    document.getElementById("italy-button").addEventListener("click", () => {
        let game = new Game("italy", "./images/pickford.png", "./images/italyflag.png", "./sounds/italyanthem.mp3");
        // game.team = "italy";
        game.start();
        })
    
    
    document.getElementById("england-button").addEventListener("click", () => {
        let game = new Game("england", "./images/donna.png", "./images/englandflag.png", "./sounds/englandanthem.mp3");
        // game.team = "england";
        game.start();
        })
    
    }   


