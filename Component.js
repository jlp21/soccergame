class Component {
    constructor(classGame, x, y, w, h, imageSrc) {
        this.game = classGame;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = this.game.team === "italy" ? "./images/pickford.png" : "./images/donna.png";
        this.goalieY = [151, 300, 424];
    }

    //800, 300, 70, 70

    drawComponent() { 
        this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    goalieMove(y) {
        this.y = this.goalieY[Math.floor(Math.random() * this.goalieY.length)];
    }

    didBlock(soccerBall) {
        if(soccerBall.x + soccerBall.width === this.x &&
            soccerBall.y > this.y && soccerBall.y < this.y - this.height) {
            this.opposingScore += 1;
            this.context.fillText("BLOCKED!!", 0, 500);
            return true;
        }
    }




    
}