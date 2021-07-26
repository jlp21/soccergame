window.onload = () => {

    const game = new Game();
    // game.start();

    document.getElementById("italy-button").addEventListener("click", () => {
        team = "italy";
        game.start();
        })
    
    
    document.getElementById("england-button").addEventListener("click", () => {
        team = "england";
        game.start();
        })
    
    }

        document.addEventListener("keydown", (event) => {
        console.log(event.code);
        game.shooting = true;
        // this.goalieMove();
        switch (event.code) {
        case "Digit1":
          game.soccerBall.shootStraight();
          game.goalieMove();
          break;
        case "Digit2":
          game.soccerBall.shootRight();
          game.goalieMove();
           break;
        case "Digit3":
          game.soccerBall.shootLeft();
          game.goalieMove();
           break;
        default:
            window.alert("Shoot with 1,2 or 3 key");
            }
        });        


