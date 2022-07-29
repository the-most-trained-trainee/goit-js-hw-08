import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const heroPlayer = new Player(document.querySelector("#vimeo-player"));

if (localStorage.getItem("videoplayer-current-time") === null) {
    localStorage.setItem("videoplayer-current-time", "0");
}

heroPlayer.on("timeupdate", throttle(currentVideo => localStorage.setItem("videoplayer-current-time", currentVideo.seconds), 1000));

heroPlayer.setCurrentTime(parseFloat(localStorage.getItem("videoplayer-current-time")));