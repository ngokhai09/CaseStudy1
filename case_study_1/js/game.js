var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var pipelst = new Array();
var bird;
var background;
var pipe;
var gap;
var constant;
var gravity;
var score;
var rq;

class Game {
    constructor() {
        gap = 150;
        bird = new Bird();
        background = new Background();
        pipe = new Pipe();

        gravity = 2.0;
        score = 0;
        document.addEventListener("keydown", this.moveUp);

        pipelst[0] = {
            x: cvs.width,
            y: 0
        };

    }

    moveUp() {
        bird.setY(bird.getY() - 50);
    }


    draw = () => {

        ctx.drawImage(background.getBg(), 0, 0);
        for (let i = 0; i < pipelst.length; i++) {

            constant = pipe.getPipeNorth().height + gap;
            ctx.drawImage(pipe.getPipeNorth(), pipelst[i].x, pipelst[i].y);
            ctx.drawImage(pipe.getPipeSouth(), pipelst[i].x, pipelst[i].y + constant);

            pipelst[i].x--;

            if (pipelst[i].x === 125) {
                pipelst.push({
                    x: cvs.width,
                    y: Math.floor(Math.random() * pipe.getPipeNorth().height) - pipe.getPipeNorth().height
                });
            }
            if (bird.getX() + bird.getImg().width >= pipelst[i].x && bird.getX() <= pipelst[i].x + pipe.getPipeNorth().width && (bird.getY() <= pipelst[i].y + pipe.getPipeNorth().height || bird.getY() + bird.getImg().height >= pipelst[i].y + constant) || bird.getY() + bird.getImg().height >= cvs.height - background.getFg().height) {
                location.reload();
                // this.stop();
            }


            if (pipelst[i].x === 5) {
                score++;
            }


        }

        ctx.drawImage(background.getFg(), 0, cvs.height - background.getFg().height);

        ctx.drawImage(bird.getImg(), bird.getX(), bird.getY());

        bird.setY(bird.getY() + gravity);

        ctx.fillStyle = "#000";
        ctx.font = "20px Verdana";
        ctx.fillText("Score : " + score, 10, cvs.height - 20);

        // this.run();
        rq = requestAnimationFrame(this.draw);
    }
    stop(){
        alert("Game Over");
        cancelAnimationFrame(rq);
    }
}

let game = new Game();
game.draw();

