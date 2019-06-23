$(document).ready(function(){

var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;

var wins = 0;
var losses = 0;

var goalScore = 0;
var totalScore = 0;



var reset = function(){
    totalScore = 0;
    $('#totalScoreNum').html(totalScore);
    goalScore = Math.floor((Math.random() * 102) + 19);
    $('#goalScore').html('Goal Score: ' + goalScore);
    redCrystal = Math.floor((Math.random() * 12) + 1);
    blueCrystal = Math.floor((Math.random() * 12) + 1);
    yellowCrystal = Math.floor((Math.random() * 12) + 1);
    greenCrystal = Math.floor((Math.random() * 12) + 1);
}


var scoreCompare = function(){
    if(totalScore === goalScore){
        alert("You Won!");
        wins++;
        $('#wins').html('Wins: ' + wins);
        reset();
    }

    else if(totalScore > goalScore){
        alert("You Lost! Please try again.");
        losses++;
        $('#losses').html('Losses: ' + losses);
        reset();
    }
}

reset()
$('#redCrystal').on('click', function(){
    //clicking crystals makes total score div show incrementing score
    totalScore+=redCrystal;
    $('#totalScoreNum').html(totalScore);
    scoreCompare();
    });

$('#blueCrystal').on('click', function(){
    //clicking crystals makes total score div show incrementing score
    totalScore+=blueCrystal;
    $('#totalScoreNum').html(totalScore);
    scoreCompare();
});
$('#yellowCrystal').on('click', function(){
    //clicking crystals makes total score div show incrementing score
    totalScore+=yellowCrystal;
    $('#totalScoreNum').html(totalScore);
    scoreCompare();
});

$('#greenCrystal').on('click', function(){
    //clicking crystals makes total score div show incrementing score
    totalScore+=greenCrystal;
    $('#totalScoreNum').html(totalScore);
    scoreCompare();
});

















})