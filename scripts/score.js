var score = 0;
var strike = 0;

const scoreUp = () => {
    var scoreBoard = document.querySelector("#score");
    score++;
    scoreBoard.setAttribute("value",score);
};

const strikes = () => {
    var strk = document.querySelector("#strike");
    strike++;
    if(strike == 1)
        strk.setAttribute("value","X O O");
    else if(strike == 2)
        strk.setAttribute("value","X X O");
    else if(strike == 3){
        strk.setAttribute("value","X X X");
        //gameover scene
        console.log("game over");
        setTimeout(function(){
            var gOver = document.querySelector("#gameOver");
            gOver.setAttribute("visible","true");
            gOver.setAttribute("position","0 1.6 -1.2");
            var finalscore = document.querySelector("#finalscore");
            var cur = document.querySelector("#cursor");
            cur.setAttribute("visible","true");
            finalscore.setAttribute("value",score);

            //clean up

            var playArea = document.querySelector("#playArea");
            playArea.setAttribute("visible","false");
            score = 0;
            strike = 0;
            strk.setAttribute("value","O O O");
        },1000);
    }

}