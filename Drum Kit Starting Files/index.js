var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrumButtons; i++) {
    drumButtons[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var Tom1 = new Audio("sounds/tom-1.mp3");
            Tom1.play();
            break;
        case "a":
            var Tom2 = new Audio("sounds/tom-2.mp3");
            Tom2.play();
            break;
        case "s":
            var Tom3 = new Audio("sounds/tom-3.mp3");
            Tom3.play();
            break;
        case "d":
            var Tom4 = new Audio("sounds/tom-4.mp3");
            Tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log("Invalid key pressed: " + key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelectorAll("." + currentKey)[0]; // Selecting the first element from the NodeList
    activeButton.classList.add("pressed");
    

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100); // Penundaan selama 100 milidetik (0.1 detik)
}

