 class Game {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.soccerBall = new Component(this, 200, 325, 30, 30, "./images/soccerball.png")
        this.pickford = new Component(this, 700, 325, 60,60, "./images/pickford.png")
        this.donna = new Component(this, 700, 325, 60, 60, "./images/donna.png")
        this.score = 0;
    }

    //game methods
    //init or start

    start() {
        this.drawLoop();
    }

    drawBackground() {
        this.context.fillStyle = "green";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);


        this.context.strokeStyle = "white";
        this.context.beginPath();
        this.context.moveTo(870, 150);
        this.context.lineTo(950, 150);
        this.context.stroke();
        this.context.lineTo(950,495);
        this.context.stroke();
        this.context.lineTo(870,495);
        this.context.stroke();


        this.context.fillStyle = "white";
        this.context.font = "25px Arial";
        this.context.fillText(`Score: ${this.score}`, 900, 30);

    }

    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackground();
        this.soccerBall.drawComponent();

        if("italy-button".onclick === true) {
            this.pickford.drawComponent();
        }
        if("england-button".onclick === true) {
            this.donna.drawComponent();
        }

        requestAnimationFrame(() => {
            this.drawLoop();
          });

    }
}