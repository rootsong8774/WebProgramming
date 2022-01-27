var count = 0;
var randomNumber = Math.floor(Math.random() * 100) + 1;

function finding() {
  var userNumber = $("#try").val();
  if (userNumber >= 1 && userNumber <= 100) {
    if (randomNumber > userNumber) {
      $("#display").html("UP!");
    } else if (randomNumber < userNumber) {
      $("#display").html("DOWN!");
    } else if (randomNumber == userNumber) {
      $("#display").html("<span style='color:red'>맞혔습니다!</span>");
    }
    count++;
    $("#counter").html("시도 횟수:" + count + "회");
  } else {
    alert("1과 100 사이의 숫자를 입력하세요.");
  }
}
$("#try").on("keydown", function (e) {
  if (e.keyCode == 13) {
    finding();
    return false;
  }
});
