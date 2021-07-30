class Component {
    constructor(classGame, x, y, w, h, imageSrc) {
        this.game = classGame;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = imageSrc;
        this.goalieY = [151, 300, 424];
        // this.startingX = x;
        // this.startingY = y;
    }

    //800, 300, 70, 70

    drawComponent() { 
        this.game.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    goalieMove(y) {
        this.y = this.goalieY[Math.floor(Math.random() * this.goalieY.length)];
    }

    didBlock(soccerBall) {
        if(soccerBall.x + soccerBall.width >= this.x &&
            soccerBall.y > this.y && soccerBall.y < this.y + this.height) {
            clearInterval(soccerBall.shooting);
            this.shooting === null;
            soccerBall.x = soccerBall.startingX;
            soccerBall.y = soccerBall.startingY;
            // this.x = this.startingX;
            // this.y = this.startingY;
            return true;
        }
    }




    
}