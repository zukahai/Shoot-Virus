bullet_Im = new Image();
bullet_Im.src = "images/bullet1.png";

class bullet {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
    }

    draw() {
        this.game.context.drawImage(bullet_Im, this.x - this.game.getWidth() / 2, this.y, this.game.getWidth(), this.game.getWidth());
    }
}