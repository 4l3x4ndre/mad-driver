backimgX = 0;

var moveBackGround = setInterval(function(){
  if(!playerDead && beginGame) {
    backimgX -= 15;
  }
  $("#backgroundImg").css({
    "left": backimgX+"px",
  });
  if (backimgX < -800) {
    backimgX = 0;
  }
}, 30);
