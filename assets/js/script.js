/*set up function to change style of every list by adding className 
 using for-loop when mouse is over and leaving icons*/
 
function changeCurrent() {
    let navBar = document.querySelector('.nav-bar');

    for (let i = 0; i < navBar.children.length; i++) {
        navBar.children[i].addEventListener('mouseover', function() {
            this.className = 'current';
        });
        navBar.children[i].addEventListener('mouseout', function() {
            this.className = '';
        });
    }
}
changeCurrent();


/** set up function for slides. when mouse clicked smaller images that will be fully displayed by using two 
* for loops. The first one will remove class attribute and then second for add class attribute to the images
that is clicked */

function setActive() {
    let wrapper = document.querySelector('.wrapper');
    
    for (let i = 0; i < wrapper.children.length; i++) {
        wrapper.children[i].addEventListener('click', function() {
            for (let i = 0; i < wrapper.children.length; i++) {
                wrapper.children[i].className = '';
            }
            this.className = 'active';
        });
    }
}
setActive();



/** 
 * First of all, set up a playList array to have every song's information.
 */


const playList = [ {
    id: 'song-1',
    songName: '君が好きだと叫びたい',
    singer: 'BAAD',
    path: 'song1.mp3'
},
{
    id: 'song2',
    songName: '世界が終るまでは…',
    singer: 'WANDS',
    path: 'song2.mp3'
},
{
    id: 'song3',
    songName: 'ぜったいに 誰も',
    singer: 'ZYYG',
    path: 'song3.mp3'
},
{
    id: 'song4',
    songName: 'あなただけ見つめてる',
    singer: '大黑摩季',
    path: 'song4.mp3'
}
];

// get the elements for javascript

let audio = document.querySelector('.audio');
let playerTrack = document.querySelector('.player-track');
let songName = document.querySelector('.song-name');
let singer = document.querySelector('.singer');
let trackTime = document.querySelector('.track-time');
let currentTime = document.querySelector('.current-time');
let totalTime = document.querySelector('.total-time');
let progressBox = document.querySelector('.progress-box');
let playTime = document.querySelector('.play-time');
let hoverBar = document.querySelector('.hover-bar');
let progressBar = document.querySelector('progress-bar');
let albums = document.querySelector('.albums');
let playPause = document.querySelector('.play-pause');
let playPrev = document.querySelector('.play-prev');
let playNext = document.querySelector('.play-next');

//The current played song

let currentSongIndex = 0;

//Set up a variable to judge whether songs are played

let isPlay = true;

//Initialize the function

function init() {
    render(playList[currentSongIndex]);
    playPause.addEventListener('click', pause);
    playPrev.addEventListener('click', leftFun);
    playNext.addEventListener('click', rightFun);
}

/**
 * Set up function for play previous button that can allow user to go backward.
 */
function leftFun() {
    currentSongIndex = currentSongIndex -1;
    if(currentSongIndex > -1) {
        selfFun();
    } else {
        currentSongIndex += currentSongIndex;
    }
}

/**
 * Set up function for play previous button that can allow user to go forword.
 */

function rightFun() {
    currentSongIndex = currentSongIndex + 1;
    if(currentSongIndex < playList.length) {
        selfFun();
    } else {
        currentSongIndex -= currentSongIndex;
    }
}

/**
 * Set up function for music play
 */

function selfFun() {
    songName.innerHTML = playList[currentSongIndex].songName;
    singer.innerHTML = playList[currentSongIndex].singer;
    audio.src = 'assets/audio/' + playList[currentSongIndex].path;
    playerTrack.classList.add('play');
    playPause.children.classList = 'fa-solid fa-pause';
    albums.classList.add('play');
    changeAlbumsCover();
    audio.play();
}

/**
 * Set up function for change alums cover images as user changes different songs. For realizing this 
 * function, using for loop to remove all the className = 'play', then let current songs' image to 
 * show on the alums cover
 */

function changeAlbumsCover() {
    for(let i = 0; i < albums.children.length; i++) {
        albums.children[i].className = '';
    }
    albums.children[currentSongIndex].className = 'play';
}

/** 
 * Build a function to fill in the songName and singer information to music box, which can 
 *  be taken from the playList array.
 */

function render(song) {
    songName.innerHTML = song.songName;
    singer.innerHTML = song.singer;
    audio.src = 'assets/audio/' + song.path;
}


/**
 * Add function to play and pause. Use isPlay to judge if the player is on play. The play button changes 
 * to pause button and default audio player is on when isPlay is true. 
 */

function pause() {
    if (isPlay) {
      playerTrack.classList.add('play');
      playPause.children.classList = 'fa-solid fa-pause';
      albums.classList.add('play');
      audio.play();
      document.querySelector('#open').style.display = 'block';
      document.querySelector('#close').style.display = 'none';
      isPlay = false;
    } else {
      playerTrack.classList.remove('play');
      playPause.children.classList = 'fa-solid fa-play';
      albums.classList.remove('play');
      audio.pause();
      document.querySelector('#open').style.display = 'none';
      document.querySelector('#close').style.display = 'block';
      isPlay = true;
    }
  }

init();

/**
 * Sadly there is always a return value = NaN by chekcing console.log(totalTime) when 
 * I tried to used totalTime = audio.duration to show the total time on designed music box,
 * . And for time reason, I have to leave it for later.
 */



