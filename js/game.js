game_W = 0, game_H = 0;
let c = 0;
vis = [];
move = 0;

class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
    }

    init() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.render();
        vis[0] = new virus(this, game_W / 2, 0, this.getWidth() * 7, 3);
        this.g = new gun(this, game_W / 2, game_H - this.getWidth() * 3);
        this.b = new bullet(this, this.g.x, this.g.y - this.getWidth() / 2);

        this.loop();

        this.listenMouse();
        this.listenKeyboard();
    }

    listenKeyboard() {
        document.addEventListener("keydown", key => {
            switch(key.keyCode) {
                case 37:
                case 65:
                    move = -this.getWidth() / 4;
                    this.g.chAngle = -5;
                    break;
                case 39:
                case 68:
                    move = this.getWidth() / 4;
                    this.g.chAngle = 5;
                    break;
            }
        })
        document.addEventListener("keyup", key => {
            move = this.g.chAngle = 0;
        })
    }

    listenMouse() {
        document.addEventListener("mousedown", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
        })

        document.addEventListener("mousemove", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
        })

        document.addEventListener("mouseup", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
        })
    }


    loop() {
        this.update();
        this.draw();
        setTimeout(() => {
            this.loop();
        }, 30);
    }

    update() {
        this.g.x += move;
        this.render();
    }

 
    render() {
        if (game_W != document.documentElement.clientWidth * c|| game_H != document.documentElement.clientHeight) {
            this.canvas.height = document.documentElement.clientHeight;
            this.canvas.width = document.documentElement.clientWidth;
            if (this.canvas.width > this.canvas.height)
                this.canvas.width = this.canvas.height / 1.5;

            game_W = this.canvas.width;
            game_H = this.canvas.height;
            c = game_W / document.documentElement.clientWidth;
        }
    }

    draw() {
        this.clearScreen();
        this.drawGun();
        for (let i = 0; i < vis.length; i++)
            vis[i].draw();
        this.drawBullet();
    }

    drawGun() {
        this.g.draw();
    }

    drawBullet() {
        this.b.draw();
    }

    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        this.context.fillStyle = '#000000';
        this.context.fillRect(0 , 0, game_W, game_H); 
    }

    getWidth() {
        var area = game_W * game_H;
        return Math.sqrt(area / 300);
    }
}

var g = new game();