window.addEventListener('DOMContentLoaded', () => {
    new WOW().init();

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

});