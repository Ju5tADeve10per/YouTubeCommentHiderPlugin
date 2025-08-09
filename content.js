function hideCommnets() {
    const commnetSection = document.getElementById('commnets');
    if (commentSection) {
        commnetSection.style.display = 'none';
    }
}

// 初期表示時
hideComments();

// 遅延読み込み対応（ページの一部が後から読み込まれる）
const observer = new MutationObserver(hideCommnets);
observer.observe(document.body, { childList: true, subtree: true });