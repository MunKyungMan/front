document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('searchBox');
    const searchIcon = document.querySelector('.search-icon');
    const locationSelect = document.getElementById('locationSelect');
    const amountSelect1 = document.getElementById('amountSelect1');
    const amountSelect2 = document.getElementById('amountSelect2');

    // 검색 함수
    function search() {
        const query = searchBox.value.trim();
        if (query) {
            // 실제 검색 기능을 여기에 구현
            console.log(`Searching for: ${query}`);
            // 예: window.location.href = `/search?query=${encodeURIComponent(query)}`;
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
        amountSelect1.selectedIndex = 0;
        amountSelect2.selectedIndex = 0;
        console.log('Filters reset');
    }

    // 검색 아이콘 클릭 이벤트 리스너 추가
    searchIcon.addEventListener('click', search);

    // 새로고침 아이콘 클릭 이벤트 리스너 추가
    const refreshIcon = document.querySelector('.refresh-icon');
    refreshIcon.addEventListener('click', resetFilters);
});
//git upload