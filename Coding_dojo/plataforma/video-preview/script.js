console.log("page loaded...");

var vid = document.getElementById("myVideo");

function enableMute() { 
  vid.muted = true;
} 

function disableMute() { 
  vid.muted = false;
} 

function checkMute() { 
  alert(vid.muted);
} 

function playVideo(vid){
  console.log(vid);
  vid.play();

}

function pauseVideo(vid){
  console.log(vid);
  vid.pause();
  vid.currentTime = 0;
}