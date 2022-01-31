function checkUserName() {
    var elMeg = $('#feedback');
    var elUserName = $('#username');
    var elPassword = $('#password');
    if (elUserName.val().length < 5) {
        elMeg.text("사용자 이름이 5자 이하 입니다.")
        elUserName.trigger("focus");
    } else {
        elMeg.text("");
        elPassword.trigger("focus");

    }
}