window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let slider = document.querySelector('.slider__items').children;
    let nextSlider = document.querySelector('.slider-right');
    let prevSlider = document.querySelector('.slider-left');
    let allSlider = slider.length;
    let index = 0;


    nextSlider.addEventListener('click', () => {
        next('next');
        console.log('clicked');
    });


    prevSlider.addEventListener('click', () => {
        next('prev')
        console.log('clicked');
    });


    function next(direction) {

        if (direction == "next") {
            index++;
            if (index == allSlider) {
                index = 0;
            }
        } else {
            if (index == 0) {
                index = allSlider - 1;
            } else {
                index--;
            }
        }

        for (let i = 0; i < slider.length; i++) {
            slider[i].classList.remove("active");
        }
        slider[index].classList.add("active");

    }



});