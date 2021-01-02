var score = 0;
var strike = 0;

const scoreUp = () => {
    var scoreBoard = document.querySelector("#scoreboard");
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
    else if(strike == 3)
        strk.setAttribute("value","X X X");
}