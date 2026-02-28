// かほっと。ポータルサイト - 共通コンポーネント
// 嘉穂地域（飯塚市・嘉麻市・桂川町）
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
        if (path.includes('news-detail.html')) return 'news';
        if (path.includes('news.html')) return 'news';
        if (path.includes('tourism.html')) return 'tourism';
        if (path.includes('event-detail.html')) return 'events';
        if (path.includes('events.html')) return 'events';
        if (path.includes('map.html')) return 'map';
        if (path.includes('real-estate.html')) return 'real-estate';
        if (path.includes('restaurant-detail.html')) return 'restaurants';
        if (path.includes('restaurants.html')) return 'restaurants';
        if (path.includes('jobs.html')) return 'jobs';
        if (path.includes('lessons.html')) return 'lessons';
        if (path.includes('living.html')) return 'living';
        if (path.includes('government.html')) return 'government';
        if (path.includes('faq.html')) return 'faq';
        return 'home';
    }

    // 全メニュー項目の定義
    function getMenuItems(basePath) {
        return [
            { icon: '🏠', label: 'ホーム', href: basePath + 'index.html', page: 'home' },
            { icon: '📰', label: 'ニュース', href: basePath + 'pages/news.html', page: 'news' },
            { icon: '🏛️', label: '観光', href: basePath + 'pages/tourism.html', page: 'tourism' },
            { icon: '🎉', label: 'イベント', href: basePath + 'pages/events.html', page: 'events' },
            { icon: '🗺️', label: 'マップ', href: basePath + 'pages/map.html', page: 'map' },
            { icon: '🏠', label: 'おうち探し', href: basePath + 'pages/real-estate.html', page: 'real-estate' },
            { icon: '🍜', label: '美味しいお店', href: basePath + 'pages/restaurants.html', page: 'restaurants' },
            { icon: '📚', label: '習い事', href: basePath + 'pages/lessons.html', page: 'lessons' },
            { icon: '💼', label: '仕事探し', href: basePath + 'pages/jobs.html', page: 'jobs' },
            { icon: '🏡', label: '暮らし', href: basePath + 'pages/living.html', page: 'living' },
            { icon: '🏛️', label: '行政', href: basePath + 'pages/government.html', page: 'government' },
            { icon: '❓', label: 'FAQ', href: basePath + 'pages/faq.html', page: 'faq' }
        ];
    }

    // ヘッダーHTMLを生成（ナチュラルデザイン）
    function createHeader() {
        const basePath = getBasePath();
        const currentPage = getCurrentPage();
        const menuItems = getMenuItems(basePath);

        // デスクトップ用メガメニューのグリッド生成
        var megaMenuGrid = '';
        for (var i = 0; i < menuItems.length; i++) {
            var item = menuItems[i];
            var activeClass = item.page === currentPage ? ' mega-menu-item--active' : '';
            megaMenuGrid += '<a href="' + item.href + '" class="mega-menu-item' + activeClass + '">' +
                '<span class="mega-menu-item-icon">' + item.icon + '</span>' +
                '<span class="mega-menu-item-label">' + item.label + '</span>' +
                '</a>';
        }

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
                        <h1 class="site-title">かほっと。</h1>
                        <p class="site-subtitle">嘉穂地域ポータルサイト</p>
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
                    <li><a href="${basePath}pages/restaurants.html" ${currentPage === 'restaurants' ? 'class="active"' : ''}>お店</a></li>
                    <li><a href="${basePath}pages/map.html" ${currentPage === 'map' ? 'class="active"' : ''}>マップ</a></li>
                </ul>
                <div class="mega-menu-wrapper">
                    <button class="mega-menu-toggle" id="megaMenuToggle" aria-label="すべてのメニュー" aria-expanded="false">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/>
                            <rect x="11" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/>
                            <rect x="1" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/>
                            <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/>
                        </svg>
                        <span>メニュー</span>
                    </button>
                    <div class="mega-menu-dropdown" id="megaMenuDropdown">
                        <div class="mega-menu-grid">
                            ${megaMenuGrid}
                        </div>
                    </div>
                </div>
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
                <h3>かほっと。</h3>
                <p>福岡県 嘉穂地域の公式ポータルサイト<br>
                飯塚市・嘉麻市・桂川町の暮らしと遊びをまるごと</p>
                <p style="margin-top: 1rem; font-size: 0.85rem; opacity: 0.8;">
                    飯塚市・嘉麻市・桂川町（旧嘉飯山地区）
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
            <p>&copy; <span class="copyright-year">2025</span> かほっと。 All rights reserved.</p>
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
        <button type="button" class="bottom-nav-item bottom-nav-menu-btn" id="bottomNavMenuBtn">
            <span class="bottom-nav-icon">
                <svg class="bottom-nav-menu-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
                    <rect x="11" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
                    <rect x="2" y="12" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
                    <rect x="11" y="12" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
                </svg>
            </span>
            <span class="bottom-nav-label">メニュー</span>
        </button>
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

    // メニューモーダルHTMLを生成
    function createMenuModal() {
        const basePath = getBasePath();
        const currentPage = getCurrentPage();

        var items = getMenuItems(basePath);

        var gridItems = '';
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var activeClass = item.page === currentPage ? ' menu-modal-item--active' : '';
            gridItems += '<a href="' + item.href + '" class="menu-modal-item' + activeClass + '">' +
                '<span class="menu-modal-item-icon">' + item.icon + '</span>' +
                '<span class="menu-modal-item-label">' + item.label + '</span>' +
                '</a>';
        }

        return '<div class="menu-modal-overlay" id="menuModalOverlay">' +
            '<div class="menu-modal" id="menuModal">' +
                '<div class="menu-modal-header">' +
                    '<h3 class="menu-modal-title">メニュー</h3>' +
                    '<button type="button" class="menu-modal-close" id="menuModalClose" aria-label="閉じる">' +
                        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
                            '<line x1="18" y1="6" x2="6" y2="18"/>' +
                            '<line x1="6" y1="6" x2="18" y2="18"/>' +
                        '</svg>' +
                    '</button>' +
                '</div>' +
                '<div class="menu-modal-grid">' +
                    gridItems +
                '</div>' +
            '</div>' +
        '</div>';
    }

    // メニューモーダルの開閉ロジック
    function initMenuModal() {
        var menuBtn = document.getElementById('bottomNavMenuBtn');
        var overlay = document.getElementById('menuModalOverlay');
        var modal = document.getElementById('menuModal');
        var closeBtn = document.getElementById('menuModalClose');

        if (!menuBtn || !overlay) return;

        function openModal() {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        menuBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);

        // オーバーレイ（モーダル外）をタップで閉じる
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal();
            }
        });
    }

    // デスクトップ メガメニューの開閉ロジック
    function initMegaMenu() {
        var toggle = document.getElementById('megaMenuToggle');
        var dropdown = document.getElementById('megaMenuDropdown');
        if (!toggle || !dropdown) return;

        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            var isOpen = dropdown.classList.contains('active');
            dropdown.classList.toggle('active');
            toggle.setAttribute('aria-expanded', !isOpen);
        });

        // 外側クリックで閉じる
        document.addEventListener('click', function(e) {
            if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        // ESCキーで閉じる
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                dropdown.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
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

        // メニューモーダルをbodyに挿入
        var modalDiv = document.createElement('div');
        modalDiv.innerHTML = createMenuModal();
        document.body.appendChild(modalDiv.firstChild);

        // メニューモーダルの初期化
        initMenuModal();

        // デスクトップ メガメニューの初期化
        initMegaMenu();

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
