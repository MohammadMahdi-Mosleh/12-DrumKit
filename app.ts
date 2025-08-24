//VARIABLES

window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`) as HTMLAudioElement;

    audio.currentTime = 0;
    audio.play();
});
