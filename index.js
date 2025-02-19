
var songs = [
  {
    id: 1,
    imageSrc: "./thumbnails/Yell.jpg",
    audioSrc: "./Audio/What if.mp3",
    title: "Will Talks- Nag kita muli",
  },

  {
    id: 2,
    imageSrc: "./thumbnails/Chard.jpg",
    audioSrc: "./Audio/what if 1.mp3",
    title: "Will Talks- What if reply cession",
  },

  {
    id: 3,
    imageSrc: "./thumbnails/Lay.jpg",
    audioSrc: "./Audio/what if 2.mp3",
    title: "Will Talks- Mix Signal",
  },

  {
    id: 4,
    imageSrc: "./thumbnails/Whing.jpg",
    audioSrc: "./Audio/what if 3.mp3",
    title: "Will Talks- Assuming",
  },

  {
    id: 5,
    imageSrc: "./thumbnails/Bert.jpg",
    audioSrc: "./Audio/what if 4.mp3",
    title: "Will Talks- Waiting cession",
  },

  {
    id: 6,
    imageSrc: "./thumbnails/Son.jpg",
    audioSrc: "./Audio/what if 5.mp3",
    title: "Will Talks- What if di sya seryuso sayo",
  },

  {
    id: 7,
    imageSrc: "./thumbnails/One.jpg",
    audioSrc: "./Audio/what if 6.mp3",
    title: "Will Talks- Gulong gulo",
  },

  {
    id: 8,
    imageSrc: "./thumbnails/Two.jpg",
    audioSrc: "./Audio/what if 7.mp3",
    title: "Will Talks- Willing to Wait ba?",
  },
];

function playaudio(songid) {
  var song = songs.find(function (song, index) {
    return song.id === songid;
  });

  document.getElementById("image_thumbnail").src = song.imageSrc;
  document.getElementById("audio_play").src = song.audioSrc;
  document.getElementById("audio_player_title").innerText = song.title;
  document.getElementById("audio_play").play();
}
