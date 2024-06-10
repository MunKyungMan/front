// 새로고침 텍스트를 보여주는 함수
function showRefreshText() {
    var refreshContainer = document.getElementById('refresh-container');
    refreshContainer.innerHTML = '새로고침 <span id="refresh-icon" onclick="refresh()">🔄</span>';
}

// 새로고침 텍스트 클릭 시 호출되는 함수
function refresh() {
    // 위치 선택 초기화
    document.getElementById('location').selectedIndex = 0;
    // 금액 1 선택 초기화
    document.getElementById('amount1').value = "";
    // 금액 2 선택 초기화
    document.getElementById('amount2').value = "";
}

// 검색 함수
function search() {
    var searchText = document.getElementById('search-box').value.trim();
    var searchResult = document.getElementById('search-text');
    if (searchText === "") {
        searchResult.textContent = '"아무것도 입력되지 않았습니다."';
    } else {
        searchResult.textContent = '"' + searchText + '"가 입력되었습니다.';
    }
}

// 엔터 키 입력 시 검색 함수 호출
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        search();
    }
}

// 실시간 순위 데이터
var rankings = [
    "1위 검색어",
    "2위 검색어",
    "3위 검색어",
    "4위 검색어",
    "5위 검색어"
];

var currentIndex = 0; // 현재 순위 인덱스

// 실시간 순위 업데이트 함수
function updateRanking() {
    var rankSelect = document.getElementById('realtime-rank');
    var selectedRank = rankSelect.value; // 현재 선택된 순위

    // 현재 인덱스에 해당하는 순위를 가져와서 옵션에 설정
    for (var i = 0; i < 5; i++) {
        var option = rankSelect.options[i];
        var newIndex = (currentIndex + i) % rankings.length; // 순환하도록 설정
        option.text = (i + 1) + "위: " + rankings[newIndex];
    }

    // 선택된 순위의 값을 현재 순위 인덱스로 설정
    rankSelect.value = selectedRank;
    
    // 다음 순위로 이동
    currentIndex = (currentIndex + 1) % rankings.length;
}

// 게시판에 게시물 추가 함수
function addPost(title, location, amount) {
    var boardContainer = document.getElementById('board-container');
    var postDiv = document.createElement('div');
    postDiv.classList.add('post');

    var titlePara = document.createElement('p');
    titlePara.classList.add('post-title');
    titlePara.textContent = title;

    var locationPara = document.createElement('p');
    locationPara.classList.add('post-location');
    locationPara.textContent = '위치: ' + location;

    var amountPara = document.createElement('p');
    amountPara.classList.add('post-amount');
    amountPara.textContent = '금액: ' + amount;

    postDiv.appendChild(titlePara);
    postDiv.appendChild(locationPara);
    postDiv.appendChild(amountPara);

    boardContainer.appendChild(postDiv);
}

// 검색 상자 클릭 시 플레이스홀더 제거 함수
function clearPlaceholder() {
    var searchBox = document.getElementById('search-box');
    if (searchBox.value === "중소기업지원사업을 입력하세요.") {
        searchBox.value = "";
    }
}

// 검색 상자 blur 시 플레이스홀더 추가 함수
function setPlaceholder() {
    var searchBox = document.getElementById('search-box');
    if (searchBox.value === "") {
        searchBox.value = "중소기업지원사업을 입력하세요.";
    }
}

// 페이지네이션 기능
const postsPerPage = 5;
let currentPage = 1;
const posts = [];

function paginatePosts() {
    const boardContainer = document.getElementById('board-container');
    boardContainer.innerHTML = '';

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = posts.slice(start, end);

    paginatedPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const titlePara = document.createElement('p');
        titlePara.classList.add('post-title');
        titlePara.textContent = post.title;

        const locationPara = document.createElement('p');
        locationPara.classList.add('post-location');
        locationPara.textContent = '위치: ' + post.location;

        const amountPara = document.createElement('p');
        amountPara.classList.add('post-amount');
        amountPara.textContent = '금액: ' + post.amount;

        postDiv.appendChild(titlePara);
        postDiv.appendChild(locationPara);
        postDiv.appendChild(amountPara);

        boardContainer.appendChild(postDiv);
    });

    renderPagination();
}

function renderPagination() {
    const paginationNumbers = document.getElementById('pagination-numbers');
    paginationNumbers.innerHTML = '';

    const pageCount = Math.ceil(posts.length / postsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const pageNumber = document.createElement('span');
        pageNumber.classList.add('page-number');
        if (i === currentPage) {
            pageNumber.classList.add('active');
        }
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            paginatePosts();
        });

        paginationNumbers.appendChild(pageNumber);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        paginatePosts();
    }
}

function nextPage() {
    const pageCount = Math.ceil(posts.length / postsPerPage);
    if (currentPage < pageCount) {
        currentPage++;
        paginatePosts();
    }
}

// 페이지 로드 시 실행되는 함수
window.onload = function () {
    showRefreshText();
    updateRanking(); // 초기 순위 표시
    // 3초마다 순위 업데이트
    setInterval(updateRanking, 3000);

    // 테스트를 위해 임의의 게시물을 추가합니다.
    posts.push({ title: "테스트 게시물 1", location: "서울", amount: "10,000원" });
    posts.push({ title: "테스트 게시물 2", location: "부산", amount: "15,000원" });
    posts.push({ title: "테스트 게시물 3", location: "대구", amount: "20,000원" });
    posts.push({ title: "테스트 게시물 4", location: "대구", amount: "20,000원" });
    posts.push({ title: "테스트 게시물 5", location: "대구", amount: "25,000원" });
    posts.push({ title: "테스트 게시물 6", location: "대구", amount: "30,000원" });
    posts.push({ title: "테스트 게시물 7", location: "대구", amount: "35,000원" });
    posts.push({ title: "테스트 게시물 8", location: "인천", amount: "25,000원" });
    posts.push({ title: "테스트 게시물 9", location: "경기", amount: "30,000원" });
    posts.push({ title: "테스트 게시물 10", location: "강원", amount: "35,000원" });

    paginatePosts(); // 초기 게시물 표시
};

function goToLogin() {
    // 로그인 페이지로 이동하는 함수
    window.location.href = 'login.html'; // 로그인 페이지 URL로 변경
}

function goToSignUp() {
    // 회원가입 페이지로 이동하는 함수
    window.location.href = 'signUp.html'; // 회원가입 페이지 URL로 변경
}
