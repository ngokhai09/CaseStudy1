class Bird{
    constructor(){
        this.img = new Image();
        this.img.src = "images/bird.png";
        this.x = 10;
        this.y = 150;
    }
    getImg(){
        return this.img;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    setY(y){
        this.y = y;
    }
}