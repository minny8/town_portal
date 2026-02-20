// いいづかと。ポータルサイト - メインJavaScript
// 「みさとと。」風スクロールアニメーション対応

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

        // スクロールアニメーションの初期化（新デザイン対応）
        initScrollReveal();

        // ヘッダースクロール効果
        initHeaderScroll();

        // パララックス効果
        initParallax();

        // ボトムナビのアクティブ状態を設定
        setActiveBottomNav();

        // タッチフィードバック
        initTouchFeedback();
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

                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 0;
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
        const yearSpan = document.querySelector('.copyright-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    /**
     * スクロールリビールアニメーション（新デザイン対応）
     * scroll-reveal, scroll-reveal-left, scroll-reveal-right, scroll-reveal-scale クラス対応
     */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .fade-in');

        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -80px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        // スタガードアニメーション用のディレイ
                        const delay = entry.target.dataset.delay || 0;

                        setTimeout(function() {
                            entry.target.classList.add('revealed');
                            entry.target.classList.add('visible'); // 後方互換性
                        }, delay * 100);

                        // 一度表示したら監視を解除
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            revealElements.forEach(function(element, index) {
                // ディレイクラスからデータ属性を設定
                if (element.classList.contains('delay-1')) element.dataset.delay = 1;
                else if (element.classList.contains('delay-2')) element.dataset.delay = 2;
                else if (element.classList.contains('delay-3')) element.dataset.delay = 3;
                else if (element.classList.contains('delay-4')) element.dataset.delay = 4;
                else if (element.classList.contains('delay-5')) element.dataset.delay = 5;
                else if (element.classList.contains('delay-6')) element.dataset.delay = 6;

                observer.observe(element);
            });
        } else {
            // IntersectionObserverに対応していない場合は即座に表示
            revealElements.forEach(function(element) {
                element.classList.add('revealed');
                element.classList.add('visible');
            });
        }
    }

    /**
     * ヘッダースクロール効果
     * スクロール時にヘッダーにシャドウを追加
     */
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScrollY = 0;
        let ticking = false;

        function updateHeader() {
            const scrollY = window.scrollY;

            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        });

        // 初期状態をチェック
        updateHeader();
    }

    /**
     * パララックス効果
     * 装飾要素に軽いパララックスを適用
     */
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.hero-decoration, .parallax-bg');

        if (parallaxElements.length === 0) return;

        // モバイルではパララックスを無効化
        if (window.innerWidth < 768) return;

        let ticking = false;

        function updateParallax() {
            const scrollY = window.scrollY;

            parallaxElements.forEach(function(element, index) {
                const speed = 0.1 + (index * 0.05);
                const yPos = -(scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });

            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });
    }

    /**
     * ボトムナビのアクティブ状態を設定
     */
    function setActiveBottomNav() {
        const currentPath = window.location.pathname;
        const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

        bottomNavItems.forEach(function(item) {
            const href = item.getAttribute('href');

            // 現在のパスとリンクのパスを比較
            if (currentPath.includes(href) ||
                (currentPath === '/' && href === 'index.html') ||
                (currentPath.endsWith('/') && href === 'index.html')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    /**
     * タッチフィードバック効果
     * モバイルでタップした時の視覚的フィードバック
     */
    function initTouchFeedback() {
        const interactiveElements = document.querySelectorAll(
            '.category-card-pop, .story-card, .news-item-timeline, .category-card-modern, .link-card, .listing-card'
        );

        interactiveElements.forEach(function(element) {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });

            element.addEventListener('touchend', function() {
                this.style.transform = '';
            }, { passive: true });

            element.addEventListener('touchcancel', function() {
                this.style.transform = '';
            }, { passive: true });
        });
    }

    /**
     * スクロールインジケーターのクリックで下へスクロール
     */
    document.addEventListener('click', function(event) {
        if (event.target.closest('.hero-scroll-indicator')) {
            const hero = document.querySelector('.hero-storytelling');
            if (hero) {
                const heroBottom = hero.offsetTop + hero.offsetHeight;
                window.scrollTo({
                    top: heroBottom - 100,
                    behavior: 'smooth'
                });
            }
        }
    });

})();
