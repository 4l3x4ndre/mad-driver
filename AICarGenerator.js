function AIcarManager() {
  this.cars = [];
  this.carsSpeed = [];

  /// Create a car image
  this.createAIcar = function() {
    let e = document.createElement('img');
    e.setAttribute('src', './AIcarImg.png');
    let currentId = AIcarId;
    e.setAttribute('id', 'AIcar' + AIcarId);
    e.setAttribute('class', 'AIcar');
    e.setAttribute('style', `top: 200px; left: 800px; z-index: 1000; width: 60; height: 40; position: absolute`);
    let o = {
      id: "#AIcar"+AIcarId,
      speed: 10,
      width: 60,
      height: 40,
      x: 800 -60 /2,
      y: 200,
      directionX: 1,
      directionY: 1,
      elt: e
    }
    this.cars.push(o);
    document.getElementById("playground").appendChild(e);
    AIcarId += 1;
  }


  this.moveAIcar = function() {
    for (let AIcarChild in this.cars) {

      let r = this.cars[AIcarChild];
        $(r.id).css({
          "left": r.x+"px",
          "top": r.y+"px",
        });

      if (!playerDead && beginGame) {
          if ((car.y + car.height - 10 >= r.y && car.y <= r.y) || (car.y + 10 <= r.y + r.height && car.y + car.height >= r.y+r.height)) {
            if ((car.x >= r.x && car.x - car.width <= r.x) || (car.x - car.width <= r.x - r.width && car.x >= r.x - r.width)) {

              playerDead = true;
              document.getElementById("carImg").setAttribute('src', './explosion.png');

          }

        }

        r.x -= r.speed;
        if (r.x < 0 -r.width/2) {

          newPosX = Math.random() * 360;
          if (latestPos >= newPosX) {
            while (latestPos - newPosX < r.height && newPosX < r.height) {
              newPosX = Math.random() * 360;
            }
          } else if (latestPos <= newPosX) {
            while (newPosX - latestPos < r.height && newPosX < r.height) {
              newPosX = Math.random() * 360;
            }
          }


          latestPos = newPosX;

          r.y = newPosX;
          r.x = 800+r.width/2;
          if (r.speed < 15) {
            r.speed += 0.5;
          }

        }
      }

    }
  }


  this.removeCars = function() {

    for (i in this.cars) {
      $(".AIcar").remove();
      this.cars.splice(this.cars[i], 1);
    }
  }

}
