window.addEventListener('DOMContentLoaded', function () {

    'use strict';

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



    let header = document.querySelector('.header');
    let hamburger = document.querySelector('.nav-icon');
    let mainTitle = document.querySelector('.main__title');

    let toggleStatus = 1;
    hamburger.addEventListener('click', () => {
        if (toggleStatus == 1) {
            header.style.left = '-300px';
            toggleStatus = 0;
        } else if (toggleStatus == 0) {
            header.style.left = '0';
            toggleStatus = 1;
        }
    })

});