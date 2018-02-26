score = 0;
scoreAddAICar = 5;
latestPos = 0;

playerDead = false;
beginGame = true;

carsM = new AIcarManager();
carcolor = new CarColor();
carcolor.setCarColor();

AIcarId = 0;
lineId = 0;
beginHardPts = 60;
beginHardCars = 6;

backgroundMusic.play();

hasPlayBoum = false;

var gameManager = setInterval(function(){
    $(document).keydown(function(e) {
        car.pressedKeys[e.which] = true;
    });
    $(document).keyup(function(e) {
        car.pressedKeys[e.which] = false;
    });

    if (!beginGame) {
        $("#score").text ("Appuyez sur entrée");
        if (car.pressedKeys[car.KEY.ENTER]) {
          beginGame = true;
          carcolor = new CarColor();
          carcolor.setCarColor();
        }
    }

    if (playerDead) {
      if (!hasPlayBoum) {
        boumSound.play();
      }
      document.getElementById("panel").style.display = "block";
      backgroundMusic.stop();

      if (car.pressedKeys[car.KEY.ENTER]) {
        document.location.reload();
      }
    } else {
      $("#playground").css({
        "background": "#6b6a6a",
      });

      document.getElementById("panel").style.display = "none";
      if (beginGame) {
        $("#score").text ("Score: " + score.toString());
      }
    }

    if (!playerDead && beginGame) {
      carsM.moveAIcar();
    }

    if (score > scoreAddAICar && carsM.cars.length <= 5) {
      carsM.createAIcar();

      scoreAddAICar += 5;
    }


    if (score >= beginHardPts && carsM.cars.length <= beginHardCars) {
        carsM.createAIcar();
        beginHardPts += 20;
        beginHardCars += 1;
    }

    $("#button").click(function(event) {
      playerDead = false;
      document.getElementById("settings").style.display = "none";
      document.getElementById("playground").style.display = "block";
      carsM.createAIcar();
    });

}, 30);

var increaseScore = setInterval(function(){
  if (!playerDead && beginGame) {
    score += 1;
  }
}, 500);
