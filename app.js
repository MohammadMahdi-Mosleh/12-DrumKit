"use strict";
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!key || !audio)
        return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
}
function removeActive(e) {
    if (e.propertyName !== "transform")
        return;
    e.target.classList.remove("active");
}
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeActive));
window.addEventListener("keydown", playSound);
