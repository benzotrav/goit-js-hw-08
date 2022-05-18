import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const savedKey = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay (data) {
    localStorage.setItem
    (savedKey, data.seconds.toString())
};

const returnKey = localStorage.getItem(savedKey);
if (returnKey) {
  player.setCurrentTime(JSON.parse(returnKey));
}
