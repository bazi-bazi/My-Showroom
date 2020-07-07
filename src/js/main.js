window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // let menu = document.querySelector('.header__menu');
    // let menuItem = document.querySelectorAll('.header__menu__item');
    // let mainContent = document.querySelectorAll('.main__content');

    // function hideTabContent(a) {
    //     for (let i = a; i < mainContent.length; i++) {
    //         mainContent[i].classList.remove('show');
    //         mainContent[i].classList.add('hide');
    //     }
    // }

    // hideTabContent(1);


    // function showTabContent(b) {
    //     if (mainContent[b].classList.contains('hide')) {
    //         mainContent[b].classList.remove('hide');
    //         mainContent[b].classList.add('show');
    //     }
    // }

    // // Add event listener to tab menu

    // menu.addEventListener('click', function (event) {
    //     let target = event.target;

    //     if (target && target.classList.contains('header__menu__item')) {
    //         for (let i = 0; i < menuItem.length; i++) {
    //             if (target == menuItem[i]) {
    //                 hideTabContent(0);
    //                 showTabContent(i);
    //                 break;
    //             }
    //         }

    //     }
    // });

    let menu = document.querySelectorAll('[data-tab-target]');
    let mainContent = document.querySelectorAll('[data-tab-content]');

    menu.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            mainContent.forEach(mainContent => {
                mainContent.classList.remove('act')
            })
            target.classList.add('act');
        })
    })

});