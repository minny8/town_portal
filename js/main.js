// 飯塚市ポータルサイト - メインJavaScript

(function() {
    'use strict';

    // DOM読み込み完了後に実行
    document.addEventListener('DOMContentLoaded', function() {

        // モバイルメニューの初期化
        initMobileMenu();

        // スムーススクロールの初期化
        initSmoothScroll();

        // 現在の年を表示
        updateCopyrightYear();
    });

    /**
     * モバイルメニューの開閉機能
     */
    function initMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navList = document.querySelector('.nav-list');

        if (!navToggle || !navList) return;

        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');

            // アクセシビリティのための属性更新
            const isExpanded = navList.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);

            // ハンバーガーアイコンのアニメーション
            navToggle.classList.toggle('active');
        });

        // メニュー外をクリックしたら閉じる
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navList.contains(event.target);

            if (!isClickInsideNav && navList.classList.contains('active')) {
                navList.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // ウィンドウサイズ変更時の処理
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                // デスクトップサイズに戻った時はメニューを閉じる
                if (window.innerWidth > 768 && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }, 250);
        });
    }

    /**
     * スムーススクロール機能
     */
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function(link) {
            link.addEventListener('click', function(event) {
                const href = link.getAttribute('href');

                // ハッシュのみの場合はスキップ
                if (href === '#') return;

                const target = document.querySelector(href);

                if (target) {
                    event.preventDefault();

                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * 著作権表示の年を更新
     */
    function updateCopyrightYear() {
        const footerBottom = document.querySelector('.footer-bottom p');

        if (footerBottom) {
            const currentYear = new Date().getFullYear();
            const text = footerBottom.textContent;

            // 年号が含まれている場合は更新
            if (text.includes('2025')) {
                footerBottom.textContent = text.replace('2025', currentYear);
            }
        }
    }

    /**
     * ページトップへ戻るボタン（オプション機能）
     * 将来的な拡張用
     */
    function initScrollToTop() {
        const scrollButton = document.getElementById('scroll-to-top');

        if (!scrollButton) return;

        // スクロール位置に応じてボタンの表示/非表示
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollButton.classList.add('visible');
            } else {
                scrollButton.classList.remove('visible');
            }
        });

        // クリックでページトップへ
        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * 画像の遅延読み込み（オプション機能）
     * 将来的な拡張用
     */
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(function(img) {
                imageObserver.observe(img);
            });
        } else {
            // IntersectionObserverに対応していない場合は即座に読み込み
            images.forEach(function(img) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }

})();
