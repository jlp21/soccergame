 class Game {
     constructor(team, imgSrc) {
         //move to component
         this.canvas = document.getElementById("canvas");
         this.context = this.canvas.getContext("2d");
         // initialize game from index, move properties of components
         this.soccerBall = new Player(this, 200, 305, 30, 30, "./images/soccerball.png")
         this.goalie = new Component(this, 800, 300, 60, 60, imgSrc)
         this.kick = new Audio("./sounds/soccerballkick.wav")
         this.score = 0;
         this.opposingScore = 0;
         this.team = team;
         this.shooting = false;
     }

     //game methods
     //init or start

     start() {
         this.drawLoop();
         document.addEventListener("keydown", (event) => {
             console.log(event.code);
             this.shooting = true;
             this.kick.play();
             this.goalie.goalieMove();
             switch (event.code) {
                 case "Digit1":
                     this.soccerBall.shootStraight();
                     break;
                 case "Digit2":
                     this.soccerBall.shootRight();
                     break;
                 case "Digit3":
                     this.soccerBall.shootLeft();
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
         this.context.lineTo(950, 495);
         this.context.stroke();
         this.context.lineTo(870, 495);
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
         this.goalie.drawComponent();


         if (this.goalie.didBlock(this.soccerBall)) {
             this.opposingScore += 1;
             // this.context.fillText("BLOCKED!!", 100, 400);
             console.log(this);
             window.alert("BLOCKED!!");
             // shoot a new penalty and reset the ball
         }

         if (this.soccerBall.didScore()) {
             this.score += 1;
             // this.context.fillText("GOAAAALLLL!!", 100, 400);
             window.alert("GOOOOAAAALLLL!!");
         };


         if (this.opposingScore === this.score + 3) {
             this.gameOver();
         }

         if (this.score === this.opposingScore + 3) {
             this.youWin();
         }


         if (this.score - this.opposingScore < 4 || this.opposingScore - this.score < 4) {
             requestAnimationFrame(() => {
                 this.drawLoop();
             });
         }

         // diffOfScores(() => {
         // this.score >= this.opposingScore ? this.score - this.opposingScore : this.opposingScore - this.score});
         // if(diffOfScores <= 3) {
         //     requestAnimationFrame(() => {
         //         this.drawLoop();
         //     });
         // }
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