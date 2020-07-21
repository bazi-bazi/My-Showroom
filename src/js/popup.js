window.addEventListener('DOMContentLoaded', function () {


    'use strict';

    let btnOpen = document.querySelector('.popup__open');
    let btnClose = document.querySelector('.modal__close');
    let modal = document.querySelector('.modal__window');
    let overlay = document.getElementById('overlay');


    btnOpen.addEventListener('click', function () {
        modal.classList.add('active-modal');
        overlay.classList.add('active-overlay');
        console.log('click');
    });

    btnClose.addEventListener('click', function () {
        modal.classList.remove('active-modal');
        overlay.classList.remove('active-overlay');
        console.log('click');
    });


});