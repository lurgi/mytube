const video = document.querySelector("video");
const videoController = document.getElementById("videoController");
const psBtn = videoController.querySelector("#playPauseBtn");
const volumeBtn = videoController.querySelector("#volume");
const volumeRange = videoController.querySelector("#volumeRange");

let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayAndStop = () => {
  if (video.paused) {
    video.play();
    psBtn.className = "fas fa-pause";
  } else {
    video.pause();
    psBtn.className = "fas fa-play";
  }
};

const handleSound = () => {
  if (video.muted) {
    video.muted = false;
    volumeRange.value = volumeValue;
    volumeBtn.className = "fas fa-volume-up";
  } else {
    video.muted = true;
    volumeRange.value = 0;
    volumeBtn.className = "fas fa-volume-mute";
  }
};

const handleVolume = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    volumeBtn.className = "fas fa-volume-mute";
  }
  if (value === "0") {
    volumeBtn.className = "fas fa-volume-off";
  } else {
    volumeBtn.className = "fas fa-volume-up";
  }
  video.volume = volumeValue = value;
};

psBtn.addEventListener("click", handlePlayAndStop);
volumeBtn.addEventListener("click", handleSound);
volumeRange.addEventListener("input", handleVolume);

const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const formatTime = (s) => new Date(s * 1000).toISOString().substring(11, 19);
const totalTimeSet = () => {
  totalTime.innerText = formatTime(video.duration);
};
const currentTimeSet = () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
};

video.addEventListener("loadedmetadata", totalTimeSet);
video.addEventListener("timeupdate", currentTimeSet);

const fullScreenBtn = document.getElementById("fullScreenBtn");
const videoContainer = document.getElementById("videoContainer");
const handleFullScreen = () => {
  const fullElement = document.fullscreenElement;
  if (fullElement) {
    document.exitFullscreen();
  } else {
    videoContainer.requestFullscreen();
  }
};
const handleFullScreenChange = () => {
  const fullElement = document.fullscreenElement;
  if (fullElement) {
    fullScreenBtn.classList.remove("fa-expand");
    fullScreenBtn.classList.add("fa-compress");
  } else {
    fullScreenBtn.classList.remove("fa-compress");
    fullScreenBtn.classList.add("fa-expand");
  }
};
fullScreenBtn.addEventListener("click", handleFullScreen);
document.addEventListener("fullscreenchange", handleFullScreenChange);

const timeline = document.getElementById("timeLine");
video.addEventListener(
  "loadedmetadata",
  () => (timeline.max = Math.floor(video.duration))
);
video.addEventListener("timeupdate", () => {
  timeline.value = video.currentTime;
});
const handleTimeline = () => {
  video.currentTime = timeline.value;
};
timeline.addEventListener("input", handleTimeline);

const handleEnded = () => {
  const { id } = videoContainer.dataset;
  fetch(`/api/videos/${id}/views`, { method: "POST" });
};
video.addEventListener("ended", handleEnded);
