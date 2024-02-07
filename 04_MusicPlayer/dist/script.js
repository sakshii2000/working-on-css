//const playBtn = document.querySelector(".play");

let slider = document.querySelector(".slider");
let audio = document.querySelector(".audio");
let start = document.querySelector(".start-value");
let end = document.querySelector(".end-value");

let cover = document.querySelector(".cover");
let title = document.querySelector(".title");
let author = document.querySelector(".author");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remSecs = Math.floor(seconds % 60);
  const ftime = `${minutes < 10 ? "0" : ""}${minutes}:${
    remSecs < 10 ? "0" : ""
  }${remSecs}`;
  return ftime;
}

function playPauseAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function updateSlider() {
  const time = Math.floor(audio.currentTime);
  slider.value = time;
  start.innerHTML = formatTime(time);
}

function sliderMaxValue() {
  const duration = Math.floor(audio.duration);
  slider.max = duration;
  end.innerHTML = formatTime(duration);
}

function playAudio() {
  playPauseAudio();
  sliderMaxValue();

  audio.addEventListener("timeupdate", () => {
    updateSlider();
    playNextSong();
  });
}

audio.addEventListener("loadedmetadata", function () {
  sliderMaxValue();
});

function playNextSong() {
  if (audio.ended) {
    nextSong();
  }
}

slider.addEventListener("input", () => {
  audio.currentTime = slider.value;
});

function nextSong() {
  cover.src = "./assets/cover-2.png";
  title.innerHTML = "Forest Lullaby";
  author.innerHTML = "Lesfm";
  audio.src = "./assets/forest-lullaby-110624.mp3";
  playAudio();
}

function prevSong() {
  cover.src = "./assets/cover-1.png";
  title.innerHTML = "Lost in the City Lights";
  author.innerHTML = "Cosmo Sheldrake";
  audio.src = "./assets/lost-in-city-lights-145038.mp3";
  playAudio();
}
