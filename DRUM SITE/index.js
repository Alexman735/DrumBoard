var playswitch = -1;
document.querySelector('.play').innerHTML = 'Play';
document.querySelector('.stop').innerHTML = 'Stop';
function getAudio(key)
{
  switch(key)
  {
    case "w":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "a":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case "s":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "d":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "j":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "k":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "l":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
  }
}

function animatekey(key)
{
  var cssref = "."+key;
  document.querySelector(cssref).classList.add("pressed");
  setTimeout(function()
 {
  document.querySelector(cssref).classList.remove("pressed");
}, 100);
}

for (var i = 0; i<document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    var key = this.innerHTML;
    console.log(key);
    getAudio(key);
    animatekey(key);
  });

  document.querySelectorAll(".drum")[i].addEventListener("keypress", function()
  {
    var key = event.key;
    console.log(key);
    getAudio(key);
    animatekey(key);
  });
}

var songaudio;
for (var j = 0; j<document.querySelectorAll(".dropdown-content a").length; j++)
{
  document.querySelectorAll(".dropdown-content a")[j].addEventListener("click", function()
  {
    if(this.innerHTML == "Song 1")
    {
      songaudio = new Audio("sounds/bensound-endlessmotion.mp3");
    }
    else if(this.innerHTML == "Song 2")
    {
      songaudio = new Audio("sounds/bensound-dreams.mp3");
    }
    else if(this.innerHTML == "Song 3")
    {
      songaudio = new Audio("sounds/bensound-sunny.mp3");
    }


  });
}


document.querySelector(".play").addEventListener("click", function()
{
  playswitch = -playswitch;
  if (playswitch == 1)
  {
    songaudio.play();
    document.querySelector('.play').innerHTML = 'Pause';
    document.querySelector('.stop').style.visibility = 'hidden';
  }
  else if (playswitch == -1)
  {
    songaudio.pause();
    document.querySelector('.play').innerHTML = 'Play';
    document.querySelector('.stop').style.visibility = 'visible';
  }
});
  document.querySelector(".stop").addEventListener("click", function()
  {
    songaudio.currentTime = 0;
    document.querySelector('.play').innerHTML = 'Play';
    document.querySelector('.stop').style.visibility = 'hidden';
});
