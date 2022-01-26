window.addEventListener('DOMContentLoaded', () => {
    new WOW().init();

    //open menu
    const menu = document.querySelector('.menu__block'),
          trigger = document.querySelector('.menu__close'),
          menuOverlay = document.querySelector('.menu__overlay'),
          menuNav = document.querySelector('.menu__nav');
        
    function showContent(item) {
        item.classList.add('show');
        item.classList.remove('hide');
    }
    function hideContent(item) {
        item.classList.add('hide');
        item.classList.remove('show');
    }
    function closeMenu() {
        menu.classList.remove('menu__block_active', 'wow', 'animate__animated', 'animate__zoomIn');
        trigger.classList.remove('menu__close_active');
        
        hideContent(menuNav);
        hideContent(menuOverlay);
    }

    trigger.addEventListener('click', () => {
        if (!menu.classList.contains('menu__block_active') && !trigger.classList.contains('menu__close_active')) {
            menu.classList.add('menu__block_active', 'wow', 'animate__animated', 'animate__zoomIn');
            trigger.classList.add('menu__close_active');

            menuNav.classList.add('wow', 'animate__animated', 'animate__bounceInRight');
            showContent(menuNav);
            showContent(menuOverlay);
            
            menuOverlay.addEventListener('click', () => {
                closeMenu();
            }) ;
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
});