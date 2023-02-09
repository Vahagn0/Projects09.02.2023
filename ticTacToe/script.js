class Game {
    constructor(){ 
        this.player1 = "X"
        this.player2 = "O"
        this.turn = 1
        this.symbol = ""
        this.divId = ""
    }

    checkTurn(){
        if(this.turn % 2 === 0){
            this.symbol = this.player2
        }else{
            this.symbol = this.player1
        }
    }

    setSymbol(){
        let element = document.getElementById([this.divId])
        this.checkTurn()
        if(this.symbol === this.player1){
            element.innerHTML = `<img src="https://www.pngkey.com/png/detail/475-4751724_open-transparent-background-thin-red-x.png" width="100" height="100">`
            this.turn++
            this.isWin()
        }else{
            element.innerHTML = `<img src="https://www.seekpng.com/png/detail/371-3713702_new-svg-image-letter-o-red.png" width="100" height="100">`
            this.turn++
            this.isWin()
        }
    }

    getDivId(clickeId){
        this.divId = clickeId
    }

    checkHeight(){
        for(let j = 0;j < 3;j++){
            let first = document.getElementById([j + 1]).innerHTML;
            let second = document.getElementById([j + 4]).innerHTML;
            let third = document.getElementById([j + 7]).innerHTML
            if(first === second && second === third && third != ""){
                location.reload();
                alert([this.symbol] + " win")
                break
            }
            }
            this.checkWidth()
    }

    checkWidth(){
        for(let i = 0;i < 9; i+= 3){
            let first = document.getElementById([i + 1]).innerHTML;
            let second = document.getElementById([i + 2]).innerHTML;
            let third = document.getElementById([i + 3]).innerHTML
            if(first === second && second === third && third != ""){
                location.reload();
                alert([this.symbol] + "win")
                break
           }
        }
        this.checkAngle()
    }

    checkAngle(){
        const one = document.getElementById("1").innerHTML
        const five = document.getElementById("5").innerHTML
        const nine = document.getElementById("9").innerHTML
        const three = document.getElementById("3").innerHTML
        const seven = document.getElementById("7").innerHTML
        if(one === five && five === nine && nine != ""){
            location.reload();
            alert([this.symbol] + " win")
         }
         else if(three === five && five === seven && seven != ""){
            location.reload();
            alert([this.symbol] + " win")
        }else{
            this.isDraw()
        }
        
    }

    isWin(){
        this.checkHeight()
    }

    isDraw(){
        const arr = []
        for(let i = 1;i <= 9; i++){
            let element = document.getElementById([i]).innerHTML
            arr.push(element)
        }
        const filterdArr =  arr.filter(item => item === "");
        if(!filterdArr.length){
            alert("draw")
        }
    }

}


let game = new Game()

function start(clickedId){
    const space = document.getElementById([clickedId])
    space.removeAttribute("onclick");
    game.getDivId(clickedId)
    game.setSymbol()
}


