class Background {
    constructor() {
        this.bg = new Image();
        this.fg = new Image();
        this.bg.src = "images/bg.png";
        this.fg.src = "images/fg.png";
    }

    getBg() {
        return this.bg;
    }

    getFg() {
        return this.fg;
    }
}