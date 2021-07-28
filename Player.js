class Player extends Component {
    constructor(classGame, x, y, w, h, imageSrc) {
        super(classGame, x, y, w, h, imageSrc);
        this.startingX = x;
        this.startingY = y;
  }


    shootStraight() {
        this.shooting = setInterval(() => {
        this.x += 2.5;    
        }, 1);
    }

    shootRight() {
        this.shooting = setInterval(() => {
        this.x += 1.5, this.y += .3;
        }, 2);
    }

    shootLeft() {
        this.shooting = setInterval(() => {
        this.x += 1.5, this.y -= .3;
        }, 2);
    }

    didScore() {
        if(this.x > 870) {
            clearInterval(this.shooting);
            this.shooting === null;
            this.x = this.startingX;
            this.y = this.startingY;
            return true;
        }
    }
    
}