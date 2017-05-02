var screenlock = (function() {
   var musicPlayerBoard = document.getElementById("musicPlayerBoard");
   var playingState = document.getElementById("playingState");
   var unlock = document.getElementById("unlock");
   var password = document.getElementById("password");
   var signinButton = document.getElementById("signinButton");
   var desktop = document.getElementById("desktop");
   var playingMusicFlag = null;
   var width = 20;

   function bindListeners() {
     unlock.addEventListener("click", unlockScreen);
    //  password.addEventListener("click", passwordOfSignin);
     signinButton.addEventListener("click", startMac);
   }

   function unlockScreen() {
     musicPlayerBoard.classList.add("disappearMusicPlayer");
     setTimeout(function() {
       unlockBoard.classList.add("displayUnlockBoard");
     }, 300);
   }

   function passwordOfSignin() {

   }

   function startMac() {
     desktop.classList.add("displayDesktop");
   }

   function playingMusic() {
     playingMusicFlag = setInterval(function() {
       console.log("hh");
       playingState.style.width = width + "%";
       width += 1;
     }, 1000);
   }

   function stopPlayingMusic() {

   }

   function initialize() {
     bindListeners();
    //  playingMusic();
   }

   return {
     init: initialize
   }
})();
screenlock.init();
