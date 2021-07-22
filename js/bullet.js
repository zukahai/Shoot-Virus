bullet_Im = new Image();
bullet_Im.src = "images/bullet1.png";

class bullet {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.acceleration = this.game.getWidth() / 20;
        this.v = this.game.getWidth() / 2;
    }

    run() {
        this.y -= this.v;
        this.v += this.acceleration;
    }

    draw() {
        this.game.context.drawImage(bullet_Im, this.x - this.game.getWidth() / 2, this.y, this.game.getWidth(), this.game.getWidth());
    }
}