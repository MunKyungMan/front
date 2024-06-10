// 로그인 버튼 클릭 이벤트 핸들러
document.getElementById("loginButton").onclick = function() {
    checkLogin();
};

// 엔터 키 입력 이벤트 핸들러
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkLogin();
    }
});

// 로그인 정보 확인 함수
function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 가정상으로, username이 "user"이고 password가 "password"라고 가정
    if (username === "user" && password === "password") {
        // 로그인 성공시 다음 페이지로 이동
        alert("로그인 성공!");
        window.location.href = "login_complete.html";
    } else {
        // 로그인 실패시 사용자에게 알림 표시
        alert("사용자 정보가 일치하지 않습니다.");
    }
}
