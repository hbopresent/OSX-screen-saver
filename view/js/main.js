var screenlock = (function() {
   var musicPlayerBoard = document.getElementById("musicPlayerBoard");
   var playingState = document.getElementById("playingState");
   var unlock = document.getElementById("unlock");
   var password = document.getElementById("password");
   var signinButton = document.getElementById("signinButton");
   var desktop = document.getElementById("desktop");
   var passedTimeMinute = document.getElementById("passedTimeMinute");
   var passedTimeSecond = document.getElementById("passedTimeSecond");
   var remainingTimeMinute = document.getElementById("remainingTimeMinute");
   var remainingTimeSecond = document.getElementById("remainingTimeSecond");
   var playingMusicFlag = null;
   var playingStateWidth = 20;
   var playedSecond = null;
   var playedMinute = null;
   var remainingSecond = null;
   var remainingMinute = null;

   function bindListeners() {
     unlock.addEventListener("click", unlockScreen);
     signinButton.addEventListener("click", startMac);
     // sign in to mac
     window.addEventListener("keydown", function(e) {
       if(e.code == "Enter") {
         if(password.value === "screenlockdesignwork") {
           startMac();
         }
         else {
           console.log("remove class");
           password.classList.add("unavailablePassword");
         }
       }
     });
     // remove wrong password animation class
     password.addEventListener("animationend", function(e) {
       if(e.animationName === "unavailablePassword") {
         password.classList.remove("unavailablePassword");
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
     password.style.backgroundColor = "rgba(225, 225, 225, 0.1)";
     signinButton.style.backgroundColor = "rgba(225, 225, 225, 0.1)";
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
       addPassedTime();
       countDownMusicTime();
     }, 1000);
   }

   //  add passed time
   function addPassedTime() {
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

   //  count remaining time of music
   function countDownMusicTime() {
     remainingSecond = parseInt(remainingTimeSecond.innerHTML) - 1;

     if(remainingSecond < 0) {
       remainingTimeSecond.innerHTML = 59;

      //  update remaining minutes
      remainingMinute = (parseInt(remainingTimeMinute.innerHTML) - 1);
      if(remainingMinute < 10) {
       remainingTimeMinute.innerHTML = "0" + remainingMinute + ":";
      }
      else {
       remainingTimeMinute.innerHTML = remainingMinute + ":";
      }
     }
     else {
       if(remainingSecond < 10) {
         remainingTimeSecond.innerHTML = "0" + remainingSecond;
       }
       else {
         remainingTimeSecond.innerHTML = remainingSecond;
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
