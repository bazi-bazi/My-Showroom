window.addEventListener('DOMContentLoaded', function () {

    'use strict';


    let notifications = {
        loading: 'loading...',
        success: 'Thanks, we will contact with you soon',
        failure: 'something gone wrong',
    };

    let form = document.querySelector('.form__first');
    let input = document.getElementsByTagName('input');
    let statusText = document.createElement('div');
    let textarea = document.getElementsByTagName('textarea');

    statusText.classList.add('status');


    form.addEventListener('submit', function (event) {

        event.preventDefault();
        form.appendChild(statusText);


        let request = new XMLHttpRequest();
        request.open('POST', 'http://localhost/local/server.php');
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");

        let formData = new FormData(form);

        let object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });

        let json = JSON.stringify(object);


        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusText.innerHTML = notifications.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusText.innerHTML = notifications.success;
            } else {
                statusText.innerHTML = notifications.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';

        }

        for (let i = 0; i < textarea.length; i++) {
            textarea[i].value = '';
        }

    });


});