 class Game {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.soccerBall = new Player(this, 200, 305, 30, 30, "./images/soccerball.png")
        this.pickford = new Component(this, 800, 300, 60, 60, "./images/pickford.png")
        this.donna = new Component(this, 800, 300, 60, 60, "./images/donna.png")
        this.score = 0;
        this.opposingScore = 0;
        this.team = "";
        this.shooting = false;
    }

    //game methods
    //init or start

    start() {
        this.drawLoop();
        document.addEventListener("keydown", (event) => {
            console.log(event.code);
            this.shooting = true;
            // this.goalieMove();
            switch (event.code) {
            case "Digit1":
              this.soccerBall.shootStraight();
              this.pickford.goalieMove();
              this.donna.goalieMove();
              break;
            case "Digit2":
              this.soccerBall.shootRight();
              this.pickford.goalieMove();
              this.donna.goalieMove();
               break;
            case "Digit3":
              this.soccerBall.shootLeft();
              this.pickford.goalieMove();
              this.donna.goalieMove();
               break;
            default:
                window.alert("Shoot with 1,2 or 3 key");
                }
            });   
    }

    drawBackground() {
        this.context.fillStyle = "green";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        //Goal
        this.context.strokeStyle = "white";
        this.context.beginPath();
        this.context.moveTo(870, 150);
        this.context.lineTo(950, 150);
        this.context.stroke();
        this.context.lineTo(950,495);
        this.context.stroke();
        this.context.lineTo(870,495);
        this.context.stroke();
        //Score
        this.context.fillStyle = "white";
        this.context.font = "25px Arial";
        this.context.fillText(`Score: ${this.score}`, 50, 30);
        this.context.fillText(`Opposing Score: ${this.opposingScore}`, 745, 30)
        //Controls
        this.context.fillStyle = "white";
        this.context.font = "30px Arial";
        this.context.fillText("1: Straight", 50, 520)
        this.context.fillText("2: Right", 50, 550)
        this.context.fillText("3: Left", 50, 580)
    }



    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.soccerBall.drawComponent();

        if(this.team === "italy") {
        this.pickford.drawComponent();
        };


        if(this.pickford.didBlock(this.soccerBall)) {
            this.opposingScore += 1;
            // this.context.fillText("BLOCKED!!", 100, 400);
            window.alert("BLOCKED!!");
            // shoot a new penalty and reset the ball
        }

        if(this.team === "england") {
            this.donna.drawComponent();
            };

        if(this.donna.didBlock(this.soccerBall)) {
            this.opposingScore += 1;
            // this.context.fillText("BLOCKED!!", 100, 400);
            window.alert("BLOCKED!!");
            // shoot a new penalty and reset the ball
        }
        
        if(this.soccerBall.didScore()) {
            this.score += 1;
            // this.context.fillText("GOAAAALLLL!!", 100, 400);
            window.alert("GOOOOAAAALLLL!!");
        };



        
        
        if(this.score < 10 && this.opposingScore < 10) {
            requestAnimationFrame(() => {
                this.drawLoop();
            });
            
            
            
            if(this.opposingScore === this.score + 3) {
                    gameOver();
                }
    
            if(this.score === this.opposingScore + 3) {
                    youWin();
                }
        }
    }
    

    youWin() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.context.fillStyle = "red";
        this.context.font = "70px Arial";
        this.context.fillText("You Win!", 300, 200);
    }

    gameOver() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.context.fillStyle = "red";
        this.context.font = "70px Arial";
        this.context.fillText("You Lose!", 300, 200);
    }
}