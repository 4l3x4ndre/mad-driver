const KEYS = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  ENTER: 13
}

var car = {
  x: 200,
  y: 200,
  width: 60,
  height: 31,
  pressedKeys: [],
  KEY: KEYS,
  speed: 15,
  gravity: 15
}

var test = 0;

var carManager = setInterval(function() {
  $("#car").css({
    "top": car.y + "px",
    "left": car.x + "px",
  });

  if (car.pressedKeys[car.KEY.UP] && car.y > 5 && !playerDead && beginGame) {
    car.y -= car.speed;
  }
  if (car.y < 360 && car.pressedKeys[car.KEY.DOWN] && !playerDead && beginGame) {
    car.y += car.speed;
  }
  if (car.x > 10 && car.pressedKeys[car.KEY.LEFT] && !playerDead && beginGame) {
    car.x -= car.speed;
  }
  if (car.x < 800 - car.width && car.pressedKeys[car.KEY.RIGHT] && !playerDead && beginGame) {
    car.x += car.speed;
  }

}, 30);

function CarColor() {

  this.setCarColor = function() {
    nb = Math.random() * 100;
    if (nb <= 20) {
      document.getElementById("carImg").setAttribute('src', './playerCarGreen.png');
    }
    if (nb > 20 && nb <= 40) {
      document.getElementById("carImg").setAttribute('src', './playerCarGrey.png');
    }
    if (nb > 40 && nb <= 60) {
      document.getElementById("carImg").setAttribute('src', './playerCarBlue.png');
    }
    if (nb > 60 && nb <= 80) {
      document.getElementById("carImg").setAttribute('src', './playerCarPink.png');
    }
    if (nb > 80 && nb <= 100) {
      document.getElementById("carImg").setAttribute('src', './playerCarYellow.png');
    }
  }
}
