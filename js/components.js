// 飯塚市ポータルサイト - 共通コンポーネント
// ヘッダー、フッター、ボトムナビを動的に挿入

(function() {
    'use strict';

    // ページの相対パスを判定
    function getBasePath() {
        const path = window.location.pathname;
        if (path.includes('/pages/')) {
            return '../';
        }
        return '';
    }

    // 現在のページを判定
    function getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('news.html')) return 'news';
        if (path.includes('tourism.html')) return 'tourism';
        if (path.includes('events.html')) return 'events';
        if (path.includes('map.html')) return 'map';
        if (path.includes('real-estate.html')) return 'real-estate';
        if (path.includes('restaurants.html')) return 'restaurants';
        if (path.includes('jobs.html')) return 'jobs';
        if (path.includes('lessons.html')) return 'lessons';
        return 'home';
    }

    // ヘッダーHTMLを生成
    function createHeader() {
        const basePath = getBasePath();
        const currentPage = getCurrentPage();

        return `
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="${basePath}index.html" class="site-title-link">
                    <h1 class="site-title">飯塚市ポータルサイト</h1>
                    <p class="site-subtitle">いいづか暮らし</p>
                </a>
            </div>
            <nav class="nav">
                <button class="nav-toggle" aria-label="メニュー">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-list">
                    <li><a href="${basePath}index.html" ${currentPage === 'home' ? 'class="active"' : ''}>ホーム</a></li>
                    <li><a href="${basePath}pages/news.html" ${currentPage === 'news' ? 'class="active"' : ''}>ニュース</a></li>
                    <li><a href="${basePath}pages/tourism.html" ${currentPage === 'tourism' ? 'class="active"' : ''}>観光</a></li>
                    <li><a href="${basePath}pages/events.html" ${currentPage === 'events' ? 'class="active"' : ''}>イベント</a></li>
                    <li><a href="${basePath}pages/map.html" ${currentPage === 'map' ? 'class="active"' : ''}>マップ</a></li>
                </ul>
            </nav>
        </div>
    </header>`;
    }

    // フッターHTMLを生成
    function createFooter() {
        const basePath = getBasePath();

        return `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>飯塚市ポータルサイト</h3>
                    <p>〒820-8501<br>福岡県飯塚市新立岩5番5号</p>
                </div>
                <div class="footer-links">
                    <h4>サイトマップ</h4>
                    <ul>
                        <li><a href="${basePath}index.html">ホーム</a></li>
                        <li><a href="${basePath}pages/news.html">ニュース</a></li>
                        <li><a href="${basePath}pages/tourism.html">観光情報</a></li>
                        <li><a href="${basePath}pages/events.html">イベント</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span class="copyright-year">2025</span> 飯塚市ポータルサイト All rights reserved.</p>
            </div>
        </div>
    </footer>`;
    }

    // ボトムナビHTMLを生成
    function createBottomNav() {
        const basePath = getBasePath();
        const currentPage = getCurrentPage();

        return `
    <nav class="bottom-nav">
        <a href="${basePath}index.html" class="bottom-nav-item ${currentPage === 'home' ? 'active' : ''}">
            <span class="bottom-nav-icon">🏠</span>
            <span class="bottom-nav-label">ホーム</span>
        </a>
        <a href="${basePath}pages/news.html" class="bottom-nav-item ${currentPage === 'news' ? 'active' : ''}">
            <span class="bottom-nav-icon">📰</span>
            <span class="bottom-nav-label">ニュース</span>
        </a>
        <a href="${basePath}pages/tourism.html" class="bottom-nav-item ${currentPage === 'tourism' ? 'active' : ''}">
            <span class="bottom-nav-icon">🏛️</span>
            <span class="bottom-nav-label">観光</span>
        </a>
        <a href="${basePath}pages/events.html" class="bottom-nav-item ${currentPage === 'events' ? 'active' : ''}">
            <span class="bottom-nav-icon">🎉</span>
            <span class="bottom-nav-label">イベント</span>
        </a>
        <a href="${basePath}pages/map.html" class="bottom-nav-item ${currentPage === 'map' ? 'active' : ''}">
            <span class="bottom-nav-icon">🗺️</span>
            <span class="bottom-nav-label">マップ</span>
        </a>
    </nav>`;
    }

    // コンポーネントを挿入
    function insertComponents() {
        // ヘッダーを挿入
        const headerPlaceholder = document.getElementById('site-header');
        if (headerPlaceholder) {
            headerPlaceholder.outerHTML = createHeader();
        }

        // フッターを挿入
        const footerPlaceholder = document.getElementById('site-footer');
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = createFooter();
        }

        // ボトムナビを挿入
        const bottomNavPlaceholder = document.getElementById('site-bottom-nav');
        if (bottomNavPlaceholder) {
            bottomNavPlaceholder.outerHTML = createBottomNav();
        }

        // 著作権の年を更新
        updateCopyrightYear();
    }

    // 著作権表示の年を更新
    function updateCopyrightYear() {
        const yearSpan = document.querySelector('.copyright-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // DOMContentLoadedで実行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertComponents);
    } else {
        insertComponents();
    }

})();
