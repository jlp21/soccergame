class Player extends Component {
    constructor(classGame, x, y, w, h, imageSrc) {
        super(classGame, x, y, w, h, imageSrc);
  }


    shootStraight() {
        // this.shooting === true;
        setInterval(() => {
        this.x += 2.5;    
        }, 1);
    }

    shootRight() {
        // this.shooting === true;
        setInterval(() => {
        this.x += 1.5, this.y += .3;
        }, 2);
    }

    shootLeft() {
        // this.shooting === true;
        setInterval(() => {
        this.x += 1.5, this.y -= .3;
        }, 2);
    }

    didScore() {
        if(this.x > 870 && this.shooting){
            this.shooting === false;
            this.game.score += 1;
            console.log({scoring: "GOOOOOOAAALLLLL"});
            return;
        }
    }
    
}