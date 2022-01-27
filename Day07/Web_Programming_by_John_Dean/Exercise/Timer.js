var min, sec;
var timer;

function startTimer() {
  min = $("#startMin").val();
  if (min == "") {
    min = 0;
  }
  sec = $("#startSec").val();
  if (sec == "") {
    sec = 0;
  }
  $("#display").html(min + "분 " + sec + "초 남았습니다.");
  timer = setInterval(countTimer, 1000);
}

function countTimer() {
  if (sec != 0) {
    sec--;
    $("#display").html(min + "분 " + sec + "초 남았습니다.");
  } else {
    if (min != 0) {
      min--;
      sec = 59;
      $("#display").html(min + "분 " + sec + "초 남았습니다.");
    } else {
        clearTimer(timer);
      $("#display").text("타이머 종료");
      
    }
  }
}

function resetTimer() {
  clearTimer(timer);
}

function clearTimer(t) {
  clearInterval(t);
  $("#display").text("");
  $("#startMin").val("");
  $("#startSec").val("");
}
