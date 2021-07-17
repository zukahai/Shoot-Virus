var virus_Im = new Image();
virus_Im.src = "images/virus.png";

class virus{
    constructor (game, x, y, value, level) {
        this.game = game;
        this.value = value;
        this.VALUE = value;
        this.x = x;
        this.y = y;
        this.level = level;
        this.init();
    }

    init() {
        this.angle = (Math.floor(Math.random() * 99999999)) % 360;
        let H = this.game.getWidth() / 5;
        let angle_temp = (Math.floor(Math.random() * 99999999)) % 360;
        this.dx = H * Math.cos(this.toRadian(angle_temp));
        this.dy = -2 * Math.abs(H * Math.cos(this.toRadian(angle_temp)));
        this.acceleration = this.game.getWidth() / 100;
        this.disable = false;
        this.chAngle = (Math.random() < 0.5) ? 1.5 : -1.5;
        this.value = Math.round(this.value);
        if (this.value <= 0)
            this.value = 1;
        switch (this.level) {
            case 1:
                this.size = 2 * this.game.getWidth();
                break;
            case 2:
                this.size = 4 * this.game.getWidth();
                break;
            case 3:
                this.size = 6 * this.game.getWidth();
                break;
            default:
                this.size = 0;
        }
    }

    update() {
        this.angle += this.chAngle;
        this.dy += this.acceleration;
        if (this.x - this.size / 2 + this.dx < 0 || this.x + this.size / 2 + this.dx > game_W)
            this.dx *= -1;
        if (this.y + this.size / 2 + this.dy > game_H) {
            this.dy *= -1;
            if (this.dy < this.game.getWidth() / 2)
                this.dy = -this.game.getWidth() / 2;
        }
        if (this.y - this.size / 2 + this.dy < 0) {
            this.dy += this.acceleration;
        }
        
        this.x += this.dx;
        this.y += this.dy;

        if (this.value <= 0) {
            if (this.level > 1) {
                vis[vis.length] = new virus(this.game, this.x, this.y, this.VALUE / 2, this.level - 1);
                vis[vis.length] = new virus(this.game, this.x, this.y, this.VALUE / 2, this.level - 1);
            } 
            this.disable = true;
        }
    }

    draw() {
        if (this.disable)
            return;
        if (count > 0)
            this.update();
        this.game.context.save();
        this.game.context.translate(this.x, this.y);
        this.game.context.rotate(this.toRadian(this.angle));
        this.game.context.drawImage(virus_Im, - this.size / 2, - this.size / 2, this.size, this.size);

        this.game.context.fillStyle = "red";
        this.game.context.font = this.size / 3 + 'px Arial Black';
        this.game.context.fillText(this.value , this.marginLeft(this.value) , this.size / 10);

        this.game.context.restore();
    }

    toRadian(angle) {
        return angle * Math.PI / 180;
    }

    marginLeft(N) {
        if (N < 10)
            return -this.size / 8.0;
        if (N < 100)
            return -this.size / 4.5;
        return -this.size / 3.0;
    }
}