// JavaScript 코드를 분리하여 작성합니다.
document.getElementById("loginButton").onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 가정상으로, username이 "user"이고 password가 "password"라고 가정하겠습니다.
    if (username === "user" && password === "password") {
        // 로그인이 성공하면 다음 페이지로 이동합니다.
        alert("로그인 성공!");
        window.location.href = "login_complete.html";
    } else {
        // 로그인이 실패하면 사용자에게 알림을 표시합니다.
        alert("사용자 정보가 일치하지 않습니다.");
    }
};
