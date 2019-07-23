$(document).ready(function () {

    let rndNum = Math.floor(Math.random() * 102) + 19;
    let button1 = Math.floor(Math.random() * 12) + 1;
    let button2 = Math.floor(Math.random() * 12) + 1;
    let button3 = Math.floor(Math.random() * 12) + 1;
    let button4 = Math.floor(Math.random() * 12) + 1;
    let totalScore = 0;
    $('.myTotalScore').text('0');
    $(".randomNumber").text(rndNum);
    let winCount = 0;
    let lossCount = 0;




    function winLoss() {

        if (totalScore === rndNum) {
            winCount++;
            $(".wins").text("Wins:" + winCount);
            redoGame();

        } else if (totalScore > rndNum) {
            lossCount++;
            $(".loss").text("Loss:" + lossCount);
            redoGame();

        }
    };



    function redoGame() {

        rndNum = Math.floor(Math.random() * 102) + 19;
        button1 = Math.floor(Math.random() * 12) + 1;
        button2 = Math.floor(Math.random() * 12) + 1;
        button3 = Math.floor(Math.random() * 12) + 1;
        button4 = Math.floor(Math.random() * 12) + 1;
        totalScore = 0;
        $('.myTotalScore').text(totalScore);
        $(".randomNumber").text(rndNum);

    };


    $("#btn1").on("click", function () {
        totalScore += button1
        $(".myTotalScore").text(totalScore);
        winLoss();
    });

    $("#btn2").on("click", function () {
        totalScore += button2
        $(".myTotalScore").text(totalScore);
        winLoss();
    });

    $("#btn3").on("click", function () {
        totalScore += button3
        $(".myTotalScore").text(totalScore);
        winLoss();
    });

    $("#btn4").on("click", function () {
        totalScore += button4
        $(".myTotalScore").text(totalScore);
        winLoss();
    });


});