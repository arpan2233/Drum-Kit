var list = document.getElementsByClassName("drum");
for(var i = 0; i < 7; i++) {
    list[i].addEventListener("click", function (){
        var buttonPressed = this.innerHTML;
        playSound(buttonPressed);
        buttonAnimation(buttonPressed);
    });
}
document.addEventListener("keydown", function(event){
    var keyPressed = event.key;
    playSound(keyPressed);
    buttonAnimation(keyPressed);
});

function playSound(alphabet){
    switch(alphabet){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log("Please Enter a valid key");
            break;
    }
}
function buttonAnimation(currentKey){
    var keyObject = document.querySelector("." + currentKey);
    keyObject.classList.add("pressed");
    setTimeout(function(){
        keyObject.classList.remove("pressed");
    },100);
}