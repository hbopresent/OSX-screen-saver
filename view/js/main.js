var screenlock = (function() {
   var musicPlayerBoard = document.getElementById("musicPlayerBoard");
   var playingState = document.getElementById("playingState");
   var unlock = document.getElementById("unlock");
   var password = document.getElementById("password");
   var signinButton = document.getElementById("signinButton");
   var desktop = document.getElementById("desktop");
   var passedTimeMinute = document.getElementById("passedTimeMinute");
   var passedTimeSecond = document.getElementById("passedTimeSecond");
   var playingMusicFlag = null;
   var playingStateWidth = 20;
   var playedSecond = null;
   var playedMinute = null;

   function bindListeners() {
     unlock.addEventListener("click", unlockScreen);
     signinButton.addEventListener("click", startMac);
     window.addEventListener("keydown", function(e) {
       if(e.code == "Enter") {
         startMac();
       }
     });
   }

   function unlockScreen() {
     musicPlayerBoard.classList.add("disappearMusicPlayer");
     setTimeout(function() {
       password.focus();
       unlockBoard.classList.add("displayUnlockBoard");
     }, 300);
   }

   function startMac() {
     password.blur();
     password.style.backgroundColor = "rgba(225, 225, 225, 0.05)";
     signinButton.style.backgroundColor = "rgba(225, 225, 225, 0.05)";
     desktop.classList.add("displayDesktop");
   }

   function playingMusic() {
     playingMusicFlag = setInterval(function() {
       if(playingStateWidth >= 100) {
         clearInterval(playingMusicFlag);
         return;
       }
       playingState.style.width = playingStateWidth + "%";
       playingStateWidth += 0.518;
       updateMusicTime();
     }, 1000);
   }

   //  update music time
   function updateMusicTime() {
     // update played seconds
     playedSecond = parseInt(passedTimeSecond.innerHTML) + 1;

     if(playedSecond == 60) {
       playedSecond = 0;
       passedTimeSecond.innerHTML = "0" + playedSecond;

       // update played minutes
       playedMinute = (parseInt(passedTimeMinute.innerHTML) + 1);
       if(playedMinute < 10) {
        passedTimeMinute.innerHTML = "0" + playedMinute + ":";
       }
       else {
        passedTimeMinute.innerHTML = playedMinute + ":";
       }
     }
     else {
       if(playedSecond < 10) {
         passedTimeSecond.innerHTML = "0" + playedSecond;
       }
       else {
         passedTimeSecond.innerHTML = playedSecond;
       }
     }
   }

   function initialize() {
     bindListeners();
     playingMusic();
   }

   return {
     init: initialize
   }
})();
screenlock.init();
