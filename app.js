"use strict";
//VARIABLES
window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    audio.currentTime = 0;
    audio.play();
});
