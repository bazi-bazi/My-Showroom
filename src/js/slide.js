window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let slider = document.querySelector('.slider__items').children;
    let nextSlider = document.querySelector('.slider-right');
    let prevSlider = document.querySelector('.slider-left');
    let allSlider = slider.length;
    let index = 0;


    nextSlider.addEventListener('click', () => {
        next('next');
    });


    prevSlider.addEventListener('click', () => {
        next('prev')
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

    // slider 2

    let slideIndex = 1;
    let slideruno = document.querySelectorAll('.slideruno__item');
    let unoPrev = document.querySelector('.slideruno-left');
    let unoNext = document.querySelector('.slideruno-right');
    let dotAll = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slideruno.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slideruno.length;
        }

        slideruno.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slideruno[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');

    }

    function nextSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    unoPrev.addEventListener('click', function () {
        nextSlide(-1);
    });

    unoNext.addEventListener('click', function () {
        nextSlide(1);
    });

    dotAll.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

});