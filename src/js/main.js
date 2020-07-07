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

});