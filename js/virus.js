var virus_Im = new Image();
virus_Im.src = "images/virus.png";

class virus{
    constructor (game, size) {
        this.game = game;
        this.size = size;
    }

    draw() {
        this.game.context.drawImage(virus_Im, 0, 0, 100, 100);
    }
}