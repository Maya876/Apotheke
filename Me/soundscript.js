


const sound = new Audio("klavier.mp3");
const klavier = document.getElementById("book");

klavier.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play()

});

