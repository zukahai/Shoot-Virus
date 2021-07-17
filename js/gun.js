var gun_Im = new Image();
gun_Im.src = "images/gun.png";

var wheel_im = new Image();
wheel_im.src = "images/wheel.png";

class gun {
    constructor (game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.angle = (Math.floor(Math.random() * 99999999)) % 360;
        this.chAngle = 0;
    }

    update() {
        if (this.x < this.game.getWidth())
            this.x = this.game.getWidth();
        if (this.x > game_W - this.game.getWidth())
            this.x = game_W - this.game.getWidth();
        this.angle += this.chAngle;
    }

    draw() {
        this.update();
        this.game.context.drawImage(gun_Im, this.x - this.game.getWidth(), this.y, this.game.getWidth() * 2, this.game.getWidth() * 2);

        this.game.context.save();
        this.game.context.translate(this.x, this.y + 2 * this.game.getWidth());
        this.game.context.rotate(this.toRadian(this.angle));
        this.game.context.drawImage(wheel_im, - this.game.getWidth(), -this.game.getWidth(), this.game.getWidth() * 2, this.game.getWidth() * 2);
        this.game.context.restore();
    }

    toRadian(angle) {
        return angle * Math.PI / 180;
    }
}