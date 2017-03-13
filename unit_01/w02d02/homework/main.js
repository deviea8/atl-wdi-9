window.onload = function(){
  var timerVal = 100;
  console.log(timerUI);

  var countDown = function(){
    if (timerVal >= 0) {
      // Trigger All TimerUI Methods //
      for (var key in timerUI) {
        timerUI[key](timerVal);
      }
      console.log(timerVal);
      timerVal -= 1;
      setTimeout(countDown, 1000);
      if (timerVal === 98) {
      }
    }
  };
  countDown();
};

var ladyBug = document.getElementsByClassName("crawler");

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById("numeric-display").innerHTML = timerValue;
  },
  drawProgressBars: function(timerValue){
    document.getElementsByClassName("progress-bar")[0].style.width = (100 - timerValue + '%');
  },
  drawLitFuses: function(timerValue){
    var unburntPart = document.getElementById("unburnt");
    unburntPart.style.width = ((98 - (100-timerValue)) + '%');
    document.getElementById("burnt").style.width = ((100 - timerValue) + '%');
  },
  drawCrawlers: function(timerValue){
    if (timerValue >= 4) {
    ladyBug[0].style.marginLeft = ((100 - timerValue) * 10) + 'px';
    if (timerValue % 2 === 0) {
      ladyBug[0].style.marginTop = "10px";
    } else {
      ladyBug[0].style.marginTop = "0px";
    }
  }
}
};


