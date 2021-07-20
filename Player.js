class Player extends Component {
    constructor(classGame, x, y, w, h, imageSrc) {
      super(classGame, x, y, w, h, imageSrc);
  
    }

    shoot() {
        document.addEventListener("keydown", (event) => {
            console.log(event.code);
    
          switch (event.code) {
            case "Digit1":
              this.x += 50;
              break;
            case "Digit2":
              this.x += 35; this.y += 7;
            //   if(this.x >= 850) this.x += 20; this.y -= 20;
              break;
            case "Digit3":
              this.x += 35; this.y -= 7;
              break;
            default:
          }
        });
      }
}