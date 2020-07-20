window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let deadline = '2020-12-31';



    function getDate(finaldate) {
        let time = Date.parse(finaldate) - Date.parse(new Date());
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / 1000 / 60) % 60);
        let hours = Math.floor((time / 1000 / 60 / 60) % 24);
        let days = Math.floor((time / (1000 * 60 * 60 * 24)));


        return {
            'total': time,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };

    }

    function setTime(id, endtime) {
        let timer = document.getElementById(id);
        let days = timer.querySelector('.days');
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(update, 1000);

        function update() {
            let times = getDate(endtime);
            days.innerHTML = times.days;
            hours.innerHTML = times.hours;
            minutes.innerHTML = times.minutes;
            seconds.innerHTML = times.seconds;


            if (times.total <= 0) {
                clearInterval(timeInterval);
            }
        }


    }

    setTime('timer', deadline);



    /// Timer 2


    const startingNumber = 1;

    let timeCount = startingNumber * 60;

    let countdown = document.querySelector('.countdown');

    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        let minutesCount = Math.floor(timeCount / 60);
        let secondsCount = timeCount % 60;


        countdown.innerHTML = `${minutesCount}:${secondsCount}`;
        timeCount--;


        if (timeCount < 0) {
            timeCount = startingNumber * 60;
        }

    }









});