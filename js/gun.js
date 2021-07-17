var gun_Im = new Image();
gun_Im.src = "images/gun.png";

var wheel_im = new Image();
wheel_im.src = "images/wheel.png";

class gun {
    constructor (game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
    }

    update() {
        if (this.x < 0)
            this.x = 0;
        if (this.x > game_W)
            this.x = game_W;
    }

    draw() {
        this.update();
        this.game.context.drawImage(gun_Im, this.x - this.game.getWidth(), this.y, this.game.getWidth() * 2, this.game.getWidth() * 2);
        this.game.context.drawImage(wheel_im, this.x - this.game.getWidth(), this.y + this.game.getWidth() / 1.2, this.game.getWidth() * 2, this.game.getWidth() * 2);
    }
}