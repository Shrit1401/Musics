const wrapper = document.querySelector(".wrapper"),
      MusicImg = document.querySelector(".img-area img"),
      MusicName = document.querySelector(".song-details .name"),
      MusicArtist = document.querySelector(".song-details .artist"),
      MainAudio = document.querySelector("#main-audio"),
      playPauseBtn = document.querySelector(".play-pause"),
      prevBtn = document.querySelector("#prev"),
      nextBtn = document.querySelector("#next"),
      progressBar = document.querySelector(".progress-bar"),
      progressArea = document.querySelector(".progress-area"),
      ShowMoreBtn = document.querySelector("#more-music"),
      musicList = document.querySelector(".music-list"),
      hideMusicBtn = musicList.querySelector("#close"),
      lightsong = wrapper.querySelector("#light-song"),
      stuff = document.querySelector(".stuff"),
      DownloadBtn = stuff.querySelector(".downloadBtn"),
      DownloadLink = DownloadBtn.querySelector("a"),
      ThemeToggler = stuff.querySelector(".Theme_toggle");

      var r = document.querySelector(':root');


      let MusicIndex = Math.floor((Math.random() * allMusic.length) + 1);
      console.log(allMusic.length + 1 + " are the songs currently");

window.addEventListener("load", ()=>{
    loadmusic(MusicIndex);
    PlayingNow();
    r.classList.add("dark");
    document.body.classList.add("dark");
    document.querySelector(".stuff").classList.remove("show");
})

function loadmusic(IndexNumb){
    MusicName.innerHTML = allMusic[IndexNumb - 1].name;
    MusicArtist.innerHTML = allMusic[IndexNumb - 1].artist;
    MusicImg.src = allMusic[IndexNumb - 1].img;
    MainAudio.src =  allMusic[IndexNumb - 1].src;
    DownloadLink.href = allMusic[IndexNumb - 1].src;
}

function PlayMusic(){
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    MainAudio.play();
}

function PauseMusic(){
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    MainAudio.pause();
}

function nextMusic(){
    MusicIndex++;
    MusicIndex > allMusic.length ? MusicIndex = 1 : MusicIndex = MusicIndex;
    loadmusic(MusicIndex);
    PlayMusic();
    PlayingNow();
}

function prevMusic(){
    MusicIndex--;
    MusicIndex < 1 ? MusicIndex = allMusic.length : MusicIndex = MusicIndex;
    loadmusic(MusicIndex);
    PlayMusic();
    PlayingNow();
}

playPauseBtn.addEventListener("click", ()=>{
    const isMusicPuased = wrapper.classList.contains("paused");
    isMusicPuased ? PauseMusic() : PlayMusic();
    PlayingNow();
})

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        const isMusicPuased = wrapper.classList.contains("paused");
        isMusicPuased ? PauseMusic() : PlayMusic();
    }
}

nextBtn.addEventListener("click", ()=>{
    nextMusic();
});


prevBtn.addEventListener("click", ()=>{
    prevMusic();
});

MainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100 + "%";
    progressBar.style.width = progressWidth;

    let musicCurrentTime = wrapper.querySelector(".current");
    let musicDuration = wrapper.querySelector(".duration");

    MainAudio.addEventListener("loadeddata", ()=>{
        let audioDuration = MainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10){
            totalSec = "0" + Math.floor(audioDuration % 60);
        }
        musicDuration.innerHTML = totalMin + ":" + totalSec;
    });

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){
        currentSec = "0" + Math.floor(currentTime % 60);
    }
    musicCurrentTime.innerHTML = currentMin + ":" + currentSec;
});

progressArea.addEventListener("click", (e)=>{
    let progressWidthval =  progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = MainAudio.duration;

    MainAudio.currentTime = (clickedOffSetX / progressWidthval) * songDuration;
    PlayMusic();
});

const repeatBtn = wrapper.querySelector("#repeat-plist");

repeatBtn.addEventListener("click", ()=>{
    let getText = repeatBtn.innerText;

    switch(getText){
        case "repeat":
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title", "Song looped");
            break;
        
        case "repeat_one":
            repeatBtn.innerText = "shuffle";
            repeatBtn.setAttribute("title", "Playback Shuffle");
            break;

        case "shuffle":
            repeatBtn.innerHTML = "repeat";
            repeatBtn.setAttribute("title", "Playlist Looped");
            break;
    }
});

MainAudio.addEventListener("ended", ()=>{
    let getText = repeatBtn.innerText;

    switch(getText){
        case "repeat":
            nextMusic();
            break;
        
        case "repeat_one":
            MainAudio.currentTime = 0;
            loadmusic(MusicIndex);
            break;

        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            do{
                let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while(MusicIndex == randIndex);
            MusicIndex = randIndex;
            loadmusic(MusicIndex);
            PlayMusic();
            PlayingNow();
            break;
    }

});


ShowMoreBtn.addEventListener("click", ()=>{
    musicList.classList.toggle("show");
});

hideMusicBtn.addEventListener("click", ()=>{
   ShowMoreBtn.click();
});

const ulTag = wrapper.querySelector("ul");

for (let i = 0; i < allMusic.length; i++) {
let liTag = `<li li-index = ${i + 1}>
                <div class="row">
                    <span>${allMusic[i].name}</span>
                    <p>${allMusic[i].artist}</p>
                </div>
                <audio id="${allMusic[i].no}" src="${allMusic[i].src}"></audio>
                <span class="audio-duration"><i class="material-icons">play_circle</i></span>
            </li>`;

ulTag.insertAdjacentHTML("beforeend", liTag);
}


const allliTags = ulTag.querySelectorAll("li");
function PlayingNow(){
    for (let j = 0; j < allliTags.length; j++) {

        let audioTag = allliTags[j].querySelector(".audio-duration");

        if(allliTags[j].classList.contains("playing")){
            allliTags[j].classList.remove("playing");
            audioTag.innerHTML = `<i class="material-icons">play_circle</i>`;
        }

        if(allliTags[j].getAttribute("li-index") == MusicIndex){
            allliTags[j].classList.add("playing");
            audioTag.innerHTML = `<i class="material-icons">volume_up</i>`;
        }
    
        allliTags[j].setAttribute("onclick", "clicked(this)")
    }
}


function clicked(element){
    let getLiIndex = element.getAttribute("li-index");
    MusicIndex = getLiIndex;
    loadmusic(MusicIndex);
    PlayMusic();
    PlayingNow();
}

lightsong.addEventListener("click", ()=>{
    wrapper.classList.toggle("light-song");
})

document.querySelector("#more").addEventListener("click", ()=>{
    document.querySelector(".stuff").classList.toggle("show");
});

ThemeToggler.addEventListener("click", ()=>{
    r.classList.toggle("dark");
    document.body.classList.toggle("dark");
    document.querySelector(".stuff").classList.remove("show");
});

setInterval(function(){ console.clear; }, 3000);
