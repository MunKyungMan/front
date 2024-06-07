document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('searchBox');
    const searchIcon = document.querySelector('.search-icon');
    const locationSelect = document.getElementById('locationSelect');
    const amountInput1 = document.getElementById('amountInput1');
    const amountInput2 = document.getElementById('amountInput2');

    // 검색 함수
    function search() {
        const query = searchBox.value.trim();
        // 검색어가 있는 경우에만 이동하도록 조건을 설정
        if (query) {
            console.log(`Searching for: ${query}`);
            window.location.href = 'subpage.html';
        }
    }

    // Enter 키 이벤트 핸들러
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            search();
        }
    }

    // 필터 초기화 함수
    function resetFilters() {
        locationSelect.selectedIndex = 0;
        amountInput1.value = '';
        amountInput2.value = '';
        console.log('Filters reset');
    }

    // 로그인 페이지로 이동하는 함수
    function goToLogin() {
        window.location.href = 'login.html';
    }

    // 회원가입 페이지로 이동하는 함수
    function goToSignup() {
        window.location.href = 'signup.html';
    }

    // 검색 아이콘 클릭 이벤트 리스너 추가
    searchIcon.addEventListener('click', search);

    // 새로고침 아이콘 클릭 이벤트 리스너 추가
    const refreshIcon = document.querySelector('.refresh-icon');
    refreshIcon.addEventListener('click', resetFilters);

    // Enter 키 이벤트 리스너 추가
    searchBox.addEventListener('keydown', handleKeyDown);

    // 로그인 버튼 클릭 이벤트 리스너 추가
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', goToLogin);

    // 회원가입 버튼 클릭 이벤트 리스너 추가
    const registerButton = document.querySelector('.register-button');
    registerButton.addEventListener('click', goToSignup);
});
