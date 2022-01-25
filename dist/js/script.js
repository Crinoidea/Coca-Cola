window.addEventListener('DOMContentLoaded', () => {
    new WOW().init();

    const menu = document.querySelector('.menu__block'),
          trigger = document.querySelector('.menu__close'),
          menuNav = document.querySelector('.menu__nav');
        

    trigger.addEventListener('click', () => {
        if (!menu.classList.contains('menu__block_active') && !trigger.classList.contains('menu__close_active')) {
            menu.classList.add('menu__block_active', 'wow', 'animate__animated', 'animate__zoomIn');
            trigger.classList.add('menu__close_active', 'wow', 'animate__animated', 'animate__pulse');
            menuNav.classList.add('show');
            menuNav.classList.remove('hide');
        } else {
            menu.classList.remove('menu__block_active', 'wow', 'animate__animated', 'animate__zoomIn');
            trigger.classList.remove('menu__close_active', 'wow', 'animate__animated', 'animate__zoomIn');
            
            menuNav.classList.add('hide');
            menuNav.classList.remove('show');
        }
    });
    

});