function playSound(e: KeyboardEvent) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`) as HTMLAudioElement;
  const key = document.querySelector(`.key[data-key="${e.code}"]`);

  if (!key || !audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
}

function removeActive(e: TransitionEvent) {
    if (e.propertyName !== "transform") return;
  (e.target as HTMLElement).classList.remove("active");
}


const keys = Array.from(document.querySelectorAll(".key")) as HTMLElement[];
keys.forEach(key => key.addEventListener("transitionend", removeActive));

window.addEventListener("keydown", playSound);