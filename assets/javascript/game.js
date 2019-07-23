$(document).ready(function () {

    const rndNum = Math.floor(Math.random() * 102) + 19;
    const button1 = Math.floor(Math.random() * 12) + 1;
    const button2 = Math.floor(Math.random() * 12) + 1;
    const button3 = Math.floor(Math.random() * 12) + 1;
    const button4 = Math.floor(Math.random() * 12) + 1;
    let totalScore = 0;
    $('.myTotalScore').text('0');
    $(".randomNumber").text(rndNum);
    let winCount = 0;
    let lossCount = 0;

    let a = totalScore
    let b = rndNum
    
    if (a === b) {
        winCount++
        $(".wins").text("Wins:" + winCount);
    } else if (a>b) {
        lossCount++
        $(".loss").text("Loss:" + lossCount);
    }


    //  let newScore= $(".myTotalScore").val() + e.currentTarget.value

    //$attr("data-value")
    //   $('#btn1').click() same thing as below


    $("#btn1").on("click", function () {
        totalScore += button1
        console.log(totalScore)
        $(".myTotalScore").text(totalScore);
    });

    $("#btn2").on("click", function () {
        totalScore += button2
        console.log(totalScore)
        $(".myTotalScore").text(totalScore);
    });

    $("#btn3").on("click", function () {
        totalScore += button3
        console.log(totalScore)
        $(".myTotalScore").text(totalScore);
    });

    $("#btn4").on("click", function () {
        totalScore += button4
        console.log(totalScore)
        $(".myTotalScore").text(totalScore);
    });
    

    //(`Wins:${winCount}`)

});

