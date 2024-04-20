let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let started = false;
let level = 0;

$(document).keypress(function() {
    if (!started) { 
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
});

function updateTitle(title) {
    $("#level-title").text(title);
}

function nextSequence() {
    level++; 
    updateTitle("Level " + level); 

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("." + randomChosenColour).fadeOut(100).fadeIn(100);
}

$(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    updateTitle();
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    var delayInMilliseconds = 100;
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, delayInMilliseconds);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('success');
    } else {
        startOver()
        console.log('failure');
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        }

    

    }
    if ((gamePattern.length - 1) == currentLevel) {
        userClickedPattern = [];
        setTimeout(nextSequence, 1000);
    }
}

function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}
