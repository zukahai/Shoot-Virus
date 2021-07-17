var virus_Im = new Image();
virus_Im.src = "images/virus.png";

class virus{
    constructor (game, x, y, size) {
        this.game = game;
        this.size = size;
        this.x = x;
        this.y = y;
    }

    draw() {
        this.game.context.drawImage(virus_Im, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    }
}