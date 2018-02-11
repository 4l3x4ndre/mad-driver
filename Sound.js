let backgroundMusic = new Sound("./music.mp3", "b");
let boumSound = new Sound("./boum.mp3", "a");

function Sound(src, s) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("class", "backM");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.play();
        if (s == "b") {
          let musicTime = setTimeout(this.rebootSound, 500);
        }
        if (s == "a") {
          let musicTime = setTimeout(this.stopBoum, 500);
        }
    }

    this.stop = function(){
        $(".backM").remove();
        this.sound.pause();
        this.sound.currentTime = 0;
    }

    this.stopBoum = function() {
      hasPlayBoum = true;
    }

    this.rebootSound = function() {
      if (!playerDead) {
        backgroundMusic.play();
      }
    }
}
