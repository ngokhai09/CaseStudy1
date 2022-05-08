class Pipe{
    constructor(){
        this.pipeNorth = new Image();
        this.pipeSouth = new Image();
        this.pipeNorth.src = "images/pipeNorth.png";
        this.pipeSouth.src = "images/pipeSouth.png";
    }

    getPipeNorth(){
        return this.pipeNorth;
    }
    getPipeSouth(){
        return this.pipeSouth;
    }
}