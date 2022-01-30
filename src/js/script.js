window.addEventListener('DOMContentLoaded', () => {

    //open menu
    const menu = document.querySelector('.menu__block'),
          trigger = document.querySelector('.menu__close'),
          menuOverlay = document.querySelector('.menu__overlay'),
          menuNav = document.querySelector('.menu__nav'),
          menuNavItem = document.querySelectorAll('.menu__link');
    
    function showContent(item) {
        item.classList.add('show');
        item.classList.remove('hide');
    }
    function hideContent(item) {
        item.classList.add('hide');
        item.classList.remove('show');
    }
    function closeMenu() {
        menu.classList.remove('menu__block_active');
        trigger.classList.remove('menu__close_active');
        
        hideContent(menuNav);
        hideContent(menuOverlay);
    }
    
    trigger.addEventListener('click', () => {
        if (!menu.classList.contains('menu__block_active') && !trigger.classList.contains('menu__close_active')) {
            menu.classList.add('menu__block_active');
            trigger.classList.add('menu__close_active');

            showContent(menuNav);
            showContent(menuOverlay);
            
            menuOverlay.addEventListener('click', () => {
                closeMenu();
            });
            menuNavItem.forEach(item => {
                item.addEventListener('click', () => {
                    closeMenu();
                });
            });
        } else {
            closeMenu();
        }
    });
 
    //Tabs present

    const tabs = document.querySelectorAll('.product__presents-item'),
          tabsContent = document.querySelectorAll('.product__content');

    function showTabsContent(index = 0) {
        tabsContent[index].classList.add('show_flex', 'fade');
        tabsContent[index].classList.remove('hide');

        tabs[index].classList.add('product__presents-item_active');
    }

    function hideTabsContent() {
        tabsContent.forEach((item) => {
            item.classList.remove('show_flex', 'fade');
            item.classList.add('hide');
        });
        
        tabs.forEach(item => {
            item.classList.remove('product__presents-item_active');
        });
    }
    
    tabs.forEach((item, index) => {
        item.addEventListener('click', () => {
                hideTabsContent();
                showTabsContent(index);
            }        
        );
    });

    // Scroll page
    function smoothScroll(links, sections) {
        links.each((index, link) => {
            $(link).on('click', function (e) {
                e.preventDefault();

                sections.each((index, item) => {
                    if (item.className == $(this).attr('href').slice(1)) {
                        $('html, body').animate({
                            scrollTop: $(item).offset().top  
                        }, 1000);
                    }
                });
            });
        });
    }

    if (document.documentElement.clientWidth > 576) {
        $.scrollify({
            section : "section",
            sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: false,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll: false,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {
                $("a").on("click",$.scrollify.move);
                $(".promo__btn").on("click",$.scrollify.move);
            }
        });
    } else {
        smoothScroll($('[href*="#"]'), $('section'));
    }

    // move Snowflake

    function parallaxScroll() {
        if (window.pageYOffset > $('.product').offset().top - 5) {
            $('.snowflake').css('bottom', '-400'+'px');
        } else {
            $('.snowflake').css('bottom', '40'+'px');
        }
    }
    
    $(window).bind('scroll', function (event) {
        event.preventDefault();
        parallaxScroll();
    });
});

