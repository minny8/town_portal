// いいづかと。ポータルサイト - 共通コンポーネント
// 「みさとと。」風ナチュラル・ポップデザイン対応
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

    // ヘッダーHTMLを生成（ナチュラルデザイン）
    function createHeader() {
        const basePath = getBasePath();
        const currentPage = getCurrentPage();

        return `
    <header class="header">
        <div class="header-content">
            <a href="${basePath}index.html" class="site-title-link">
                <div class="site-logo">
                    <!-- ロゴアイコン（SVG） -->
                    <svg class="logo-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="22" fill="#E8A838"/>
                        <circle cx="24" cy="24" r="18" fill="#FFF8F0"/>
                        <path d="M14 28 Q24 12 34 28" stroke="#7BA05B" stroke-width="3" fill="none"/>
                        <circle cx="18" cy="22" r="2" fill="#F4A896"/>
                        <circle cx="30" cy="22" r="2" fill="#F4A896"/>
                        <path d="M20 32 Q24 36 28 32" stroke="#3D3D3D" stroke-width="2" fill="none"/>
                    </svg>
                    <div>
                        <h1 class="site-title">いいづかと。</h1>
                        <p class="site-subtitle">飯塚市ポータルサイト</p>
                    </div>
                </div>
            </a>
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

    // フッターHTMLを生成（ナチュラルデザイン）
    function createFooter() {
        const basePath = getBasePath();

        return `
    <footer class="footer-natural">
        <div class="footer-content-natural">
            <div class="footer-brand">
                <h3>いいづかと。</h3>
                <p>福岡県飯塚市の公式ポータルサイト<br>
                暮らしも遊びも、ぜんぶここで見つかる</p>
                <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
                    〒820-8501<br>福岡県飯塚市新立岩5番5号
                </p>
            </div>
            <div class="footer-links-natural">
                <h4>カテゴリー</h4>
                <ul>
                    <li><a href="${basePath}pages/real-estate.html">おうち探し</a></li>
                    <li><a href="${basePath}pages/restaurants.html">美味しいお店</a></li>
                    <li><a href="${basePath}pages/lessons.html">習い事</a></li>
                    <li><a href="${basePath}pages/jobs.html">仕事探し</a></li>
                </ul>
            </div>
            <div class="footer-links-natural">
                <h4>情報</h4>
                <ul>
                    <li><a href="${basePath}pages/news.html">ニュース</a></li>
                    <li><a href="${basePath}pages/tourism.html">観光情報</a></li>
                    <li><a href="${basePath}pages/events.html">イベント</a></li>
                    <li><a href="${basePath}pages/map.html">街マップ</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom-natural">
            <p>&copy; <span class="copyright-year">2025</span> いいづかと。 All rights reserved.</p>
        </div>
    </footer>`;
    }

    // ボトムナビHTMLを生成（ナチュラルデザイン）
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
