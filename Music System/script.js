let audio = document.getElementById("audio");
let progressBar = document.getElementById("progress-bar");
let body = document.body;
let songName = document.getElementById("song-name");
let artistName = document.getElementById("artist-name");

let songs = [
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    image: "images/music1.jpg",
    name: "Midnight Echo",
    artist: "Ethan Rivers",
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    image: "images/music2.jpg",
    name: "Starlit Dreams",
    artist: "Olivia Hart",
  },
  {
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    image: "images/music3.jpg",
    name: "Echoes of Yesterday",
    artist: "Daniel Carter",
  },
  {
    url: "songs/handshake.mp3",
    image: "images/music2.jpg",
    name: "Handshake",
    artist: "Sophia Lane",
  },
  {
    url: "songs/gorila.mp3",
    image: "images/music2.jpg",
    name: "Gorila",
    artist: "Ft.Zack",
  },
];

let currentSongIndex = 0;

function loadSong(index) {
  audio.src = songs[index].url;
  body.style.backgroundImage = `url(${songs[index].image})`;
  songName.innerText = songs[index].name;
  artistName.innerText = songs[index].artist;
  // Check if the image exists, otherwise use a gradient
  // if (songs.image) {
  //   body.style.backgroundImage = `url(${songs.image})`;
  // } else {
  //   body.style.background = "linear-gradient(-45deg, #ff416c, #ff4b2b, #1e3c72, #2a5298)";
  // }
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
}

audio.addEventListener("timeupdate", function () {
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";
});

function setProgress(event) {
  let width = event.currentTarget.clientWidth;
  let clickX = event.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
}

function increaseVolume() {
  if (audio.volume < 1) {
    audio.volume = Math.min(audio.volume + 0.1, 1); // Increase volume by 10%, max is 1
  }
}

function decreaseVolume() {
  if (audio.volume > 0) {
    audio.volume = Math.max(audio.volume - 0.1, 0); // Decrease volume by 10%, min is 0
  }
}

loadSong(currentSongIndex);
